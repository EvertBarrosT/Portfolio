import React, { useState } from 'react'
import './services.css'
import { useTranslation } from "react-i18next";

const Services = () => {
    const {t, i18n} = useTranslation();
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">{t('Services.title')}</h2>
            <span className="section__subtitle">{t('Services.subtitle')}</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            {t('Services.backendDeveloper.title1')} <br /> {t('Services.backendDeveloper.title2')}
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        {t('Services.viewMore')}
                        <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">{t('Services.backendDeveloper.title')}</h3>
                            <p className="services__modal-description">{t('Services.backendDeveloper.description')}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services1')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services2')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services3')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services4')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services5')}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-cloud-share services__icon"></i>
                        <h3 className="services__title">
                            {t('Services.devOpsDeveloper.title1')} <br /> {t('Services.devOpsDeveloper.title2')}
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        {t('Services.viewMore')}
                        <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">{t('Services.devOpsDeveloper.title')}</h3>
                            <p className="services__modal-description">{t('Services.devOpsDeveloper.description')}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services1')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services2')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services3')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services4')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.backendDeveloper.services5')}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-trophy services__icon"></i>
                        <h3 className="services__title">
                            {t('Services.gameDeveloper.title1')} <br /> {t('Services.gameDeveloper.title2')}
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        {t('Services.viewMore')}
                        <i className="uil uil-arrow-right services__button-icon"></i></span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">{t('Services.gameDeveloper.title')}</h3>
                            <p className="services__modal-description">{t('Services.gameDeveloper.description')}</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.gameDeveloper.services1')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.gameDeveloper.services2')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.gameDeveloper.services3')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.gameDeveloper.services4')}
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {t('Services.gameDeveloper.services5')}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services