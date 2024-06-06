import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import { useTranslation } from "react-i18next";



export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Web design",
        category: "web",
    },
    {
        id: 2,
        image: Work2,
        title: "App movil",
        category: "app",
    },
    {
        id: 3,
        image: Work3,
        title: "Brand design",
        category: "design",
    },
    {
        id: 4,
        image: Work4,
        title: "App movil",
        category: "app",
    },
    {
        id: 5,
        image: Work5,
        title: "Web design",
        category: "web",
    },
    {
        id: 6,
        image: Work4,
        title: "Api Pokemon",
        category: "apis",
    },
    {
        id: 7,
        image: Work2,
        title: "Arquitetura PicPay",
        category: "architecture",
    },
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







