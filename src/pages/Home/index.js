import React from 'react';
import { FiChevronDown, FiCornerRightDown, FiChevronRight } from 'react-icons/fi'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'

import './styles.css';

export default function Home() {
    return(
        <div className="home-container">

            <div className="header" id="home">
                <a className="hidden" unselectable="on" href="#projeto">
                    Conheça o Projeto
                    <FiChevronDown />
                </a>

                <img src={require('../../assets/logo.png')} alt="Logo Soluções Coletivas" />

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

                <div className="progress-bar" ></div>

                <div className="money">
                    <h3>R$ 340,70</h3>

                    <h3>Meta: R$ 45.000,00</h3>
                </div>
                
                <h3 className="contribute">
                    Contribua agora mesmo através dos nossos links
                    <FiCornerRightDown/>
                </h3>

                <div className="contributions">
                    <div className="cards">                
                        <a className="img-link" href="https://app.picpay.com/user/solu.coletivas" target="_blank">
                            <img src={require('../../assets/picpay.png')} alt="QR Code"/>
                        </a>
                        
                        <a className="link" href="https://app.picpay.com/user/solu.coletivas" target="_blank">
                            <h5 className="text-link">
                                <FiChevronRight/>
                                PicPay
                            </h5>
                        </a>
                    </div>

                    <div className="cards">
                        <a className="img-link" href="https://abacashi.com/p/solucoes_coletivas" target="_blank">
                            <img src={require('../../assets/abacashi.png')} alt="QR Code"/>
                        </a>

                        <a className="link" href="https://abacashi.com/p/solucoes_coletivas" target="_blank">
                            <h5 className="text-link">
                                <FiChevronRight/>
                                Abacashi
                            </h5>
                        </a>
                    </div>
                </div>            
            </div>

            <div className="project">
                <h1 id="projeto">O Projeto</h1>

                <div className="description">
                    <h3 id="projeto">Nossa missão é fomentar o debate racial no meio universitário, interligando Associações Atléticas Acadêmicas com líderes de comunidades quilombolas e indígenas, com o intuito de criar conteúdos com esse tema e levar esse debate de forma acessível a sociedade, além de fazer arrecadações que serão convertidas em alimentos e insumos para essas comunidades que necessitam em Goiás.</h3>
                    <img src={require('../../assets/family.jpg')} alt="Família Indígena" />
                </div>
            </div>

        </div>
    );
}