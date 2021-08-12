import React from 'react';
import Item from './Item';

const style_greeting = {
marginTop: 10,
marginLeft: 10
};

export const ItemListContainer = ({ greeting }) => {
    return (
        <>
       <h3 style={style_greeting}>{greeting}</h3>
       <Item/>
       </>
    );
};