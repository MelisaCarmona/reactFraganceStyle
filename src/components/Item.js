import React from 'react';
import productos from './api/productos';
import { Card, Button } from 'react-bootstrap'


function ListarProductos(){
    const view =  productos.map((p) => {
        return (<Card  key={p.id} style={{ width: '18rem', marginTop: '10px' }}>
        <Card.Img variant="top" src= {p.ruta} />
        <Card.Body>
          <Card.Title>{p.nombre}</Card.Title>
          <Card.Text>
            ${p.precio}
          </Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>)
    });

    return view;
}
export default function Item(){
    return (
        <ListarProductos/>
    );
}