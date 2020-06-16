import React from 'react';

import './styles.css';

import LogoImg from '../../assets/logo.png';

export default function Home() {
    return(
        <div className="container">

            <img src={LogoImg} alt="Logo Soluções Coletivas" />

        </div>
    );
}