import React from 'react';


const TileCountProduct = (props) => {

    return (
        <article className="tile is-child notification is-warning">
            <p className="title">Produtos</p>
            <p className="subtitle">Quantidade de produtos</p>
            <div className="has-text-centered">
                <p className="title" >{props.data}</p>
            </div>
        </article>
    )

}

export default TileCountProduct