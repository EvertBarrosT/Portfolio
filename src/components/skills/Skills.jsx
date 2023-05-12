import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import './skills.css';
import { i18n } from "../translate/i18n";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">{i18n.t('Skills.title')}</h2>
            <span className="section__subtitle">{i18n.t('Skills.subtitle')}</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}

export default Skills