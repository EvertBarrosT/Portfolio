import React from 'react';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { getData } from "./Data";

const Tecnologia = () => {
    const { t, i18n } = useTranslation();
    let array3 = [];
    let aux = 0;
    let listaBackend = getData().filter(({ tag }) => tag === "tec");

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Skills.tecnologia')}</h3>
            <div className="skills__box">
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {listaBackend.map((element) => {
                        if(aux === 6){
                            array3 = [];
                            aux = 0;
                        }

                        array3[aux] = element;

                        try {
                            if (array3.length === 6 || array3[aux].id === listaBackend[listaBackend.length - 1].id) {
                                return (
                                    <SwiperSlide key={array3[0].id}>
                                        <div className="skills__group">
                                            {array3[0] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[0].tec}</h3>
                                                        <span className="skills__level">{array3[0].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[1] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[1].tec}</h3>
                                                        <span className="skills__level">{array3[1].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[2] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[2].tec}</h3>
                                                        <span className="skills__level">{array3[2].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
    
    
    
                                        <div className="skills__group">
                                            {array3[3] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[3].tec}</h3>
                                                        <span className="skills__level">{array3[3].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[4] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[4].tec}</h3>
                                                        <span className="skills__level">{array3[4].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
    
                                            {array3[5] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[5].tec}</h3>
                                                        <span className="skills__level">{array3[5].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="skills__group">
                                            {array3[6] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[6].tec}</h3>
                                                        <span className="skills__level">{array3[6].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}

                                            {array3[7] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[7].tec}</h3>
                                                        <span className="skills__level">{array3[7].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}

                                            {array3[8] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[8].tec}</h3>
                                                        <span className="skills__level">{array3[8].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="skills__group">
                                            {array3[9] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[9].tec}</h3>
                                                        <span className="skills__level">{array3[9].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}

                                            {array3[10] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[10].tec}</h3>
                                                        <span className="skills__level">{array3[10].level}</span>
                                                    </div>
                                                </div>
                                            ) : null}

                                            {array3[11] !== undefined ? (
                                                <div className="skills__data">
                                                    <i className='bx bx-badge-check'></i>
                                                    <div>
                                                        <h3 className="skills__name">{array3[11].tec}</h3>
                                                        <span className="skills__level">{array3[11].level}</span>
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

export default Tecnologia