import React from 'react';
import { useTranslation } from "react-i18next";

const Backend = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Skills.backend')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Spring Boot</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Kafka</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">PostgreSQL</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">IBM MQ</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Redis</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend