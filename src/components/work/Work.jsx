import React from 'react'
import "./work.css"
import Works from './Works'
import { i18n } from "../translate/i18n"

const Work = () => {
  return (
    <section className="word section" id='portfolio'>
        <h2 className="section__title">{i18n.t('Portfolio.title')}</h2>
        <span className="section__subtitle">{i18n.t('Portfolio.subtitle')}</span>

        <Works/>
    </section>
  )
}

export default Work