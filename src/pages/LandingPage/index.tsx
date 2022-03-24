import "./style.scss";
import React, { useEffect } from 'react';
import backgroundImg from "../../assets/img/background.jpg";
import LogoImg from "../../assets/img/logo.png";

const LandingPage = () => {

    const fadeHeader = () => {
        window.addEventListener('scroll', function () {
            if(window.scrollY > 0) {
                document.querySelector("header")?.classList.add('active');
            } else {
                document.querySelector("header")?.classList.remove('active');
            }
        });
    }
    
    useEffect(() => {
        window.onscroll = () => fadeHeader();
    })
    
    return (
        <div>
            <img src={ backgroundImg } className="background-image" alt="" />
            <header>
                <a className="header-item"><img className="logo" src={ LogoImg } alt="" /></a>
                <a className="header-item">Contato</a>
                <a className="header-item">Início</a>
                <a className="header-item">Sobre Nós</a>
                <a className="header-item">Serviços</a>
                <a className="header-item">Entrar</a>
            </header>

            <div className="beggining">
                <h1 className="title">Hey brother</h1>
            </div>
            <div className="about">
                
            </div>
        </div>
    )
}

export default LandingPage;