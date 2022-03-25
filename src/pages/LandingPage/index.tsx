import "./style.scss";
import React, { useEffect } from 'react';
import backgroundImg from "../../assets/img/background.jpg";
import LogoImg from "../../assets/img/logo.png";

const LandingPage = () => {

    const fadeHeader = () => {
        if(window.scrollY > 0) {
            document.querySelector("header")?.classList.add('active');
        } else {
            document.querySelector("header")?.classList.remove('active');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => fadeHeader();
    })
    
    return (
        <div className="landing-page">
            <img src={ backgroundImg } className="background-image" alt="" />
            <header className="navbar">
                <a className="navbar-item"><img className="logo" src={ LogoImg } alt="" /></a>
                <a className="navbar-item">Contato</a>
                <a className="navbar-item">Início</a>
                <a className="navbar-item">Sobre Nós</a>
                <a className="navbar-item">Serviços</a>
                <a className="navbar-item">Entrar</a>
            </header>

            <div className="opening">
                <h1 className="title">Hey brother</h1>
            </div>
            <div className="about">
                
            </div>
        </div>
    )
}

export default LandingPage;