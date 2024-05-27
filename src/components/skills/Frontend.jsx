import React from 'react'
import { useTranslation } from "react-i18next";

const Frontend = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Skills.frontend')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">TypeScript</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend