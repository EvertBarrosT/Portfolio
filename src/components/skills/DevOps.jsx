import React from 'react';
import { useTranslation } from "react-i18next";

const DevOps = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Skills.devops')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Azure</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevOps