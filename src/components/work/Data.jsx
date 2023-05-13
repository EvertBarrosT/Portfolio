import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import { i18n } from "../translate/i18n"

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
];

export const projectsNav = [
    {
        name: `${i18n.t('Portfolio.all')}`,
    },
    {
        name: `${i18n.t('Portfolio.web')}`,
    },
    {
        name: `${i18n.t('Portfolio.apis')}`,
    },
    {
        name: `${i18n.t('Portfolio.architecture')}`,
    },
]







