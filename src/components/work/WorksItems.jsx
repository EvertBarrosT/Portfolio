import React from 'react'
import { useTranslation } from "react-i18next";

const WorksItems = ({item}) => {
  const {t, i18n} = useTranslation();
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <div className="access__links">
          <a href={item.demo} className="work__button">
            {t('Portfolio.demo')} <i className="bx bx-play work__button-icon"></i>
          </a>
          <a href={item.github} className="work__button">
            {t('Portfolio.repo')} <i className="bx bxl-github work__button-icon"></i>
          </a>
        </div>
       
    </div>
  )
}

export default WorksItems