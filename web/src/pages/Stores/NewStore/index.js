import React, { useState } from 'react';
import api from "../../../services/api";
import { NavLink } from 'react-router-dom';
import './styles.css';

const NewStore = () => {
    const [name, setName] = useState('')

    async function handleAddNewStore(id) {
        try {
            const result = await api.post(`/stores`, {
                name
            });
            alert("Loja criada com sucesso");
            setName('');
        } catch (error) {
            alert("Não foi possível criar esta loja");
        }
    }
    return (
        <div className="container">
            <div className="top">
                <h1>Cadastrar Nova Loja</h1>
                <div className="topButton">
                    <NavLink to="/stores">
                        <button>Voltar</button>
                    </NavLink>
                </div>
            </div>
            <div className="new">
                <div className="inputGroup">
                    <label> Nome </label>
                    <input type="text" value={name} onChange={(e) => (setName(e.target.value))} />
                </div>
                <button onClick={handleAddNewStore}>Salvar</button>
            </div>
        </div >
    );
}

export default NewStore;