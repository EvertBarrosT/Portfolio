import React from 'react'
import { i18n } from "../translate/i18n"

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button">
          {i18n.t('Portfolio.demo')} <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems