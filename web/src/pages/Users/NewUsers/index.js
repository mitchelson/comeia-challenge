import React, { useEffect, useState } from 'react';
import api from "../../../services/api";
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css';

const NewUsers = () => {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    async function handleAddNewUsers(id) {
        try {
            const result = await api.post(`/users`, {
                name, cpf, password
            });
            alert("Usuário criado com sucesso!");
            setName('')
            setCpf('')
            setPassword('')
        } catch (error) {
            alert("Não foi possível criar este usuário");
        }
    }
    return (
        <div className="container">
            <div className="top">
                <h1>Cadastrar Novo Usuário</h1>
                <div className="topButton">
                    <NavLink to="/users">
                        <button>Voltar</button>
                    </NavLink>
                </div>
            </div>
            <div className="new">
                <div className="inputGroup">
                    <label> Nome </label>
                    <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
                </div>
                <div className="inputGroup">
                    <label> CPF </label>
                    <input type="text" value={cpf} onChange={(e) => (setCpf(e.target.value))} />
                </div>
                <div className="inputGroup">
                    <label> Password </label>
                    <input type="text" value={password} onChange={(e) => (setPassword(e.target.value))} />
                </div>
                <button onClick={handleAddNewUsers}>Salvar</button>
            </div>
        </div >
    );
}

export default NewUsers;