import React, { useState } from "react";
import api from "../../services/api";
import { FaEye } from 'react-icons/fa';
import "./styles.css";
import { useHistory } from "react-router-dom";
import logoIcon from '../../assets/cupom.svg';


function Login() {
  //Dados do Militar, usados para cadastrar/atualizar o registro de um militar
  const [cpf, setlogin] = useState("");
  const [password, setSenha] = useState("");
  //Usado para navegar entre páginas da aplicação
  const history = useHistory();
  //Constante usada para mostrar ou não o erro de login
  const [erro, setErro] = useState(0);
  const [toglePass, setTogle] = useState("password");
  const [desabilitaCampo, setCampo] = useState(false);
  //Verifica se há usuário com os dados informados no sistema
  async function handleLogin(e) {
    e.preventDefault();
    setCampo(true);
    const { data } = await api.get(`/users/${cpf}`);
    if (data[0]) {
      localStorage.setItem("auth", true);
      history.push("/stores");
    } else {
      localStorage.setItem("auth", false);
      setCampo(false);
      setErro(100);
      limpar(e);
    }
  }
  //Alterna o tipo do campo da senha entre text e password (assim ele mostra/esconde a senha)
  async function showSenha(e) {
    e.preventDefault();
    if (toglePass === "password") {
      setTogle("text");
    } else {
      setTogle("password");
    }
  }
  //Função para limpar campos do formulário de login
  async function limpar(e) {
    e.preventDefault();
    setlogin("");
    setSenha("");
  }
  return (
    <div className="login">
      <div className="boxL">
        <img src={logoIcon} />
        <form className="formLogin" onSubmit={handleLogin}>
          <div className="inputGroup">
            <strong>Login</strong>
            <input
              value={cpf}
              required
              disabled={desabilitaCampo}
              onChange={(e) => setlogin(e.target.value)}
            />
          </div>
          {/* <div className="inputGroup">
            <strong>Senha</strong>
            <div className="passGroup">
              <input
                className="inputSenha"
                value={password}
                required
                disabled={desabilitaCampo}
                onChange={(e) => setSenha(e.target.value)}
                type={toglePass}
              />
              <div
                className="showSenha"
                onMouseDown={showSenha}
                onMouseUp={showSenha}
              >
                <FaEye />
              </div>
            </div>
          </div> */}
          <i style={{ opacity: erro }}>*revise seus dados</i>
          <div className="btnEntrar" >
            <button type="submit">
              ENTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;