import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import LogoImg from '../../assets/Logo.svg';
import HeroImg from '../../assets/heroes.png';

export default function () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Logo Heroes" />
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
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

