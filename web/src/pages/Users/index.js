import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import { NavLink } from 'react-router-dom';
import './styles.css';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })
    }, [users])

    async function handleDeleteUsers(id) {
        return await api.delete(`/users/${id}`)
    }
    return (
        <div className="container">
            <div className="top">
                <h1>Usuários</h1>
                <div className="topButton">
                    <NavLink to="/users/newusers">
                        <button>Novo Usuário</button>
                    </NavLink>

                </div>
            </div>
            <div className="list">
                <div className="titleTable">
                    <div>id</div>
                    <div>Nome</div>
                    <div>CPF</div>
                    <div>Ações</div>
                </div>
                {users.map(user => (
                    <ul key={user.id} className="resultTable">
                        <li>{user.id}</li>
                        <li>{user.name}</li>
                        <li>{user.cpf}</li>
                        <li><button onClick={() => handleDeleteUsers(user.cpf)}>Excluir</button></li>
                    </ul>
                ))}
            </div>
        </div >
    );
}

export default Users;