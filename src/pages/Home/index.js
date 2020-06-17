import React from 'react';
import { FiChevronDown } from 'react-icons/fi'
import { GiReceiveMoney } from 'react-icons/gi'

import './styles.css';

import LogoImg from '../../assets/logo.png';
import QRCodeImg from '../../assets/qrcode.png';
import Family from '../../assets/family.jpg'

export default function Home() {
    return(
        <div className="home-container">

            <div className="header" id="home">
                <a className="hidden" unselectable="on" href="#projeto">
                    Conheça o Projeto
                    <FiChevronDown />
                </a>

                <img src={LogoImg} alt="Logo Soluções Coletivas" />

                <a className="visible" href="#projeto">
                    Conheça o Projeto
                    <FiChevronDown />
                </a>
            </div>

            <div className="donate-card">
                <h1>
                    <GiReceiveMoney />
                    Parcial arrecadado até o momento
                    
                </h1>

                <div class="progress-bar" ></div>

                <div className="money">
                    <h3>R$ 500,00</h3>

                    <h3>Meta: R$ 10.000,00</h3>
                </div>
                
                <img className="qr-code" src={QRCodeImg} alt="QR Code"/>
                <h4>Contribua agora mesmo!</h4>
            </div>

            <div className="project">
                <h1 id="projeto">O Projeto</h1>

                <div className="description">
                    <h3 id="projeto">Nossa missão é fomentar o debate racial no meio universitário, interligando Associações Atléticas Acadêmicas com líderes de comunidades quilombolas e indígenas, com o intuito de criar conteúdos com esse tema e levar esse debate de forma acessível a sociedade, além de fazer arrecadações que serão convertidas em alimentos e insumos para essas comunidades que necessitam em Goiás.</h3>
                    <img src={Family} alt="Família Indígena" />
                </div>
            </div>

        </div>
    );
}