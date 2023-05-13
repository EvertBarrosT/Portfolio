import React from 'react';
import { i18n } from "../translate/i18n";

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">{i18n.t('Skills.backend')}</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Spring Boot</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Kafka</h3>
                    <span className="skills__level">{i18n.t('Skills.basic')}</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">PostgreSQL</h3>
                    <span className="skills__level">{i18n.t('Skills.basic')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">IBM MQ</h3>
                    <span className="skills__level">{i18n.t('Skills.basic')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Redis</h3>
                    <span className="skills__level">{i18n.t('Skills.basic')}</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend