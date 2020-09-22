import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import api from '../../services/api'

import LogoImg from '../../assets/Logo.svg';
import HeroImg from '../../assets/heroes.png';

export default function () {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('session', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('profile');
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Logo Heroes" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" submi="submit" >Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color={"#e02041"} />
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={HeroImg} alt="Hero Imagem" />
        </div>
    )
}

