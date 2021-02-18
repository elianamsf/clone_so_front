import React from 'react';

// posso usar o exports diretamente na criação da função

export default function Header({title}){
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
}