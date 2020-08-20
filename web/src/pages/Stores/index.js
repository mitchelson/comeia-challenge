import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import { NavLink } from 'react-router-dom';
import './styles.css';

const Stores = () => {
    const [stores, setStores] = useState([])
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        api.get('tickets').then(ticket => {
            setTickets(ticket.data)
        })
        api.get('stores').then(store => {
            setStores(store.data)
        })
    }, [])

    async function handleDeleteTicket(id) {
        return await api.delete(`/tickets/${id}`)
    }
    return (
        <div className="container">
            <div className="top">
                <h1>Cupons</h1>
                <div className="topButton">
                    <NavLink to="/stores/newticket">
                        <button>Novo Cupom</button>
                    </NavLink>
                </div>
            </div>
            <div className="list">
                <div className="titleTable">
                    <div>id</div>
                    <div>Nome</div>
                    <div>Quantidade</div>
                    <div>Loja</div>
                    <div>Ações</div>
                </div>
                {tickets.map(tickets => (
                    <ul key={tickets.id} className="resultTable">
                        <li>{tickets.id}</li>
                        <li>{tickets.title}</li>
                        <li>{tickets.amount}</li>
                        <li>{tickets.name}</li>
                        <li><button onClick={() => handleDeleteTicket(tickets.id)}>Excluir</button></li>
                    </ul>
                ))}
            </div>
            <div className="top">
                <h1>Lojas</h1>
                <div className="topButton">
                    <NavLink to="/stores/newstore">
                        <button>Nova Loja</button>
                    </NavLink>
                </div>
            </div>
            <div className="list">
                <div className="titleTable">
                    <div>id</div>
                    <div>Nome</div>
                    <div>Ações</div>
                </div>
                {stores.map(store => (
                    <ul key={store.id} className="resultTable">
                        <li>{store.id}</li>
                        <li>{store.name}</li>
                        <li><button onClick={() => handleDeleteTicket(store.id)}>Excluir</button></li>
                    </ul>
                ))}
            </div>
        </div >
    );
}

export default Stores;