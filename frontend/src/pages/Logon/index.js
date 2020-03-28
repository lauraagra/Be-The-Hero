import React, { useState } from 'react'; // ESTADO: trata-se de uma informação a ser mantida pelo componente. Toda vez que o estado é alterado, o componente faz a renderização novamente exibindo as novas informações em tela.
import { Link, useHistory } from 'react-router-dom'; // para não recarregar a pagina (troca pelo a) 
import { FiLogIn } from 'react-icons/fi'; //importar icons
import { toast } from 'react-toastify';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name); // para ter isso em toda a aplicação

            history.push('/profile');
        } catch (err) {
            toast.error('Falha no login, tente novamente.', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon </h1>

                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="button"> Entrar </button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#e02041" /> Não tenho cadastro </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Heroes" /> 
        </div> // incluir variavel com {}
    );
}