import React from 'react';
import { useTranslation } from "react-i18next";

const Info = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">{t('About.experience')}</h3>
                <span className="about__subtitle">2 {t('About.yearsWorking')}</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">{t('About.completed')}</h3>
                <span className="about__subtitle">0 {t('About.projects')}</span>
            </div>

            <div className="about__box">
                <i class='bx bx-certification about__icon'></i>
                <h3 className="about__title">{t('About.certifications')}</h3>
                <span className="about__subtitle">0 {t('About.certificates')}</span>
            </div>
        </div>
    )
}

export default Info