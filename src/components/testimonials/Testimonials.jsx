import React from 'react';
import "./testimonials.css";
import { Data } from "./Data";
import { useTranslation } from "react-i18next";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  const {t, i18n} = useTranslation();

  return (
    <section className="testimonial container section" id="testimonials">
         <h2 className="section__title">{t('Testimonial.title')}</h2>
            <span className="section__subtitle">{t('Testimonial.subtitle')}</span>

            <Swiper className="testimonial__container"
             grabCursor={true}
             spaceBetween={24}
             pagination={{
               clickable: true,
             }}
             breakpoints={{
               576: {
                 slidesPerView: 2,
               },
               768: {
                 slidesPerView: 2,
                 spaceBetween: 48,
               },
             }}
             modules={[Pagination]}
            >
                {Data.map(({id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <div class="card-header">
                              <img src={image} alt="" className="testimonial__img" />
                              <h3 className="testimonial__name">{title}</h3>
                            </div>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    </section>
  )
}

export default Testimonials