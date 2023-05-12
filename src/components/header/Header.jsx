import React, { useState } from 'react';
import "./header.css";
import { i18n } from "../translate/i18n";

const Header = () => {
    /*=============== Change Website Language ===============*/
    const handleSelectChange = (languageType) => {
        if(languageType === "Português (BR)") {
            console.log("1")
            setLanguage("English (US)")
            i18n.changeLanguage("pt")
        }else {
            console.log("2")
            setLanguage("Português (BR)")
            i18n.changeLanguage("en")
        }
    }

    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // When the scroll is higher than 200 viewport heigth, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const [language, setLanguage] = useState("English (US)");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Evert</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>
                                {i18n.t('Header.navHome')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                {i18n.t('Header.navAbout')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>
                                {i18n.t('Header.navSkills')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                {i18n.t('Header.navServices')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i>
                                {i18n.t('Header.navPortfolio')}
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>
                                {i18n.t('Header.navContact')}
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div>
                    <ul className="nav__list-plus">
                        <li className="nav__item">
                            <span className="nav__button nav__button-language" onClick={() => {handleSelectChange(language)}}>{language}</span>
                        </li>

                        <li className="nav__item">
                            <i className="uil uil-moon nav__button nav__button-darkmod"></i>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header