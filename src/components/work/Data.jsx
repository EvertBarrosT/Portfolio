import Work1 from "../../assets/portfolio.png";
import Work2 from "../../assets/sistemaAnuncio.png";
import { useTranslation } from "react-i18next";



export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Portfólio",
        category: "web",
        demo: "https://github.com/EvertBarrosT/Portfolio",
        github: "https://github.com/EvertBarrosT/Portfolio",
    },
    {
        id: 2,
        image: Work2,
        title: "Sistema de Anúncios",
        category: "apis",
        demo: "https://github.com/EvertBarrosT/Sistema-de-Anuncios",
        github: "https://github.com/EvertBarrosT/Sistema-de-Anuncios",
    }
];

export const getProjectsNav = () => {
    const {t, i18n} = useTranslation();

    return [
        {
            name: `${t('Portfolio.all')}`,
        },
        {
            name: `${t('Portfolio.web')}`,
        },
        {
            name: `${t('Portfolio.apis')}`,
        },
        {
            name: `${t('Portfolio.architecture')}`,
        },
    ]
}







