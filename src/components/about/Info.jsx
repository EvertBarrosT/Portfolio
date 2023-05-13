import React from 'react';
import { i18n } from "../translate/i18n";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">{i18n.t('About.experience')}</h3>
                <span className="about__subtitle">2 {i18n.t('About.yearsWorking')}</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">{i18n.t('About.completed')}</h3>
                <span className="about__subtitle">0 {i18n.t('About.projects')}</span>
            </div>

            <div className="about__box">
                <i class='bx bx-certification about__icon'></i>
                <h3 className="about__title">{i18n.t('About.certifications')}</h3>
                <span className="about__subtitle">0 {i18n.t('About.certificates')}</span>
            </div>
        </div>
    )
}

export default Info