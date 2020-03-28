import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data);

            toast.success(`Seu ID de acesso: ${response.data.id}`, {
                position: toast.POSITION.TOP_CENTER
            });

            history.push('/'); // volta para inicio
        } catch(err) {
            toast.error('Erro no cadastro, tente novamente.', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos das sua ONG.</p>

                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#e02041" /> Fazer logon </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)} // represeta o valor do input - declarou arrow function
                    />
                    <input type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="UF"
                        style={{ width: 80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        /> 
                    </div> 

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div> 
        </div> // no style é uma tag do react onde a prieira chave indica um código javascript dentro do html e a segunda um objeto
    );
}
