import React from 'react'
import "./work.css"
import Works from './Works'
import { useTranslation } from "react-i18next";

const Work = () => {
  const {t, i18n} = useTranslation();
  return (
    <section className="word section" id='portfolio'>
        <h2 className="section__title">{t('Portfolio.title')}</h2>
        <span className="section__subtitle">{t('Portfolio.subtitle')}</span>

        <Works/>
    </section>
  )
}

export default Work