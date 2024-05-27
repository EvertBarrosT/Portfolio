import React from 'react';
import { useTranslation } from "react-i18next";

const Tecnologia = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t('Skills.tecnologia')}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Jira</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Bitbucket</h3>
                            <span className="skills__level">{t('Skills.professional')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Confluence</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">VSCode</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Eclipse</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Maven</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Bamboo</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Npm</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Git/GitHub</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">DBeaver</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">{t('Skills.basic')}</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Linux</h3>
                            <span className="skills__level">{t('Skills.intermediate')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tecnologia