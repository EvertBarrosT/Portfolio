import React, { useState } from 'react'
import './qualification.css'
import { useTranslation } from "react-i18next";

const Qualification = () => {
    const {t, i18n} = useTranslation();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">{t('Qualification.title')}</h2>
            <span className="section__subtitle">{t('Qualification.subtitle')}</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>{t('Qualification.education.title')}
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>{t('Qualification.experience.title')}
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t('Qualification.education.data1.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.education.data1.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.education.data1.period')}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{t('Qualification.education.data2.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.education.data2.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.education.data2.period')}
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t('Qualification.education.data3.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.education.data3.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.education.data3.period')}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{t('Qualification.education.data4.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.education.data4.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.education.data4.period')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{t('Qualification.experience.data1.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.experience.data1.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.experience.data1.period')}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{t('Qualification.experience.data2.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.experience.data2.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.experience.data2.period')}
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                        <div>
                                <h3 className="qualification__title">{t('Qualification.experience.data3.formation')}</h3>
                                <span className="qualification__subtitle">{t('Qualification.experience.data3.institute')}</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>{t('Qualification.experience.data3.period')}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification