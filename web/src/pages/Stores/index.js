import React from 'react';
import './styles.css';

const Stores = () => {
    return (
        <div className="container">
            <div className="top">
                <h1>Lojas</h1>
                <div className="topButton">
                    <button>Novo Cupom</button>
                    <button>Nova Loja</button>
                </div>
            </div>
        </div>
    );
}

export default Stores;