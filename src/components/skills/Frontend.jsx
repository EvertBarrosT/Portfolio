import React from 'react'
import { i18n } from "../translate/i18n";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{i18n.t('Skills.frontend')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">{i18n.t('Skills.basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">{i18n.t('Skills.professional')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend