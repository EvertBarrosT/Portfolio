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
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Node JS</h3>
                    <span className="skills__level">{i18n.t('Skills.Basic')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Firebase</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__level">{i18n.t('Skills.intermediate')}</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend