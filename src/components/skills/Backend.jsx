import React from 'react';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { getData } from "./Data";

const Backend = () => {
    const { t, i18n } = useTranslation();
    var array3 = [];
    var aux = 0;
    var listaBackend = getData().filter(({ tag }) => tag === "back");

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Skills.backend')}</h3>
            <div className="skills__box">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {console.log(listaBackend)}
                    
                    {listaBackend.map((element) => {
                        if(aux === 6){
                            console.log("Reset")
                            array3 = [];
                            aux = 0;
                        }

                        array3[aux] = element;

                        console.log(array3[aux]);
                        console.log(aux);
                        try {
                            if (array3.length === 6 || array3[aux].id === listaBackend[listaBackend.length - 1].id) {
                                console.log("Return")
                                return (
                                    <SwiperSlide key={array3[0].id}>
                                        <div className="skills__group">
                                            {array3[aux - 5] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[aux - 5].tec}</h3>
                                                        <span className="skills__level">{array3[aux - 5].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[aux - 4] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[aux - 4].tec}</h3>
                                                        <span className="skills__level">{array3[aux - 4].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[aux - 3] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[aux - 3].tec}</h3>
                                                        <span className="skills__level">{array3[aux - 3].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
    
    
    
                                        <div className="skills__group">
                                            {array3[aux - 2] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[aux - 2].tec}</h3>
                                                        <span className="skills__level">{array3[aux - 2].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[aux - 1] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[aux - 1].tec}</h3>
                                                        <span className="skills__level">{array3[aux - 1].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[aux] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[aux].tec}</h3>
                                                        <span className="skills__level">{array3[aux].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
    
                                    </SwiperSlide>
                                );
    
                            }
                        } finally {
                            aux++;
                        }
                        
                    })}
                </Swiper >
            </div >
        </div >
    )
}

export default Backend