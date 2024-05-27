import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import DevOps from './DevOps';
import Tecnologia from './Tecnologia';
import './skills.css';
import { useTranslation } from "react-i18next";

const Skills = () => {
    const {t, i18n} = useTranslation();

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{t('Skills.title')}</h2>
            <span className="section__subtitle">{t('Skills.subtitle')}</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Tecnologia/>
                <DevOps/>
            </div>
        </section>
    )
}

export default Skills