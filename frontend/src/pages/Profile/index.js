import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/Logo.svg';

function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo Heroes" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo incidente</Link>
                <button>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p> Cadelinha Atropelada</p>

                    <strong>Descrição</strong>
                    <p>Decrição Temporaria</p>

                    <strong>Valor: </strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={18} color="#8a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p> Cadelinha Atropelada</p>

                    <strong>Descrição</strong>
                    <p>Decrição Temporaria</p>

                    <strong>Valor: </strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={18} color="#8a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p> Cadelinha Atropelada</p>

                    <strong>Descrição</strong>
                    <p>Decrição Temporaria</p>

                    <strong>Valor: </strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={18} color="#8a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p> Cadelinha Atropelada</p>

                    <strong>Descrição</strong>
                    <p>Decrição Temporaria</p>

                    <strong>Valor: </strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 size={18} color="#8a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Profile;