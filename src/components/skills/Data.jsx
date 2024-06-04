import { useTranslation } from "react-i18next";

export const getData = () => {
  const {t, i18n} = useTranslation();

  var backend = "back", frontend = "front", Technologies = "tec", DevOps = "devops";

  return [
    {
      id: 1,
      tag: backend,
      level: `${t('Skills.professional')}`,
      tec: "Java"
    },
    {
      id: 2,
      tag: backend,
      level: `${t('Skills.intermediate')}`,
      tec: "PostgreSQL"
    },
    {
      id: 3,
      tag: backend,
      level: `${t('Skills.basic')}`,
      tec: "Python"
    },
    {
      id: 4,
      tag: backend,
      level: `${t('Skills.professional')}`,
      tec: "Spring Boot"
    },
    {
      id: 5,
      tag: backend,
      level: `${t('Skills.intermediate')}`,
      tec: "JavaEE"
    },
    {
      id: 6,
      tag: backend,
      level: `${t('Skills.intermediate')}`,
      tec: "Kafka"
    },
    {
      id: 7,
      tag: backend,
      level: `${t('Skills.basic')}`,
      tec: "IBM MQ"
    },
    {
      id: 8,
      tag: backend,
      level: `${t('Skills.basic')}`,
      tec: "DB2"
    },
    {
      id: 9,
      tag: backend,
      level: `${t('Skills.basic')}`,
      tec: "Redis"
    },
    {
      id: 10,
      tag: backend,
      level: `${t('Skills.basic')}`,
      tec: "MongoDB"
    },
    {
      id: 11,
      tag: backend,
      level: `${t('Skills.intermediate')}`,
      tec: "C#"
    },
    {
      id: 12,
      tag: frontend,
      level: `${t('Skills.intermediate')}`,
      tec: "HTML"
    },
    {
      id: 13,
      tag: frontend,
      level: `${t('Skills.intermediate')}`,
      tec: "CSS"
    },
    {
      id: 14,
      tag: frontend,
      level: `${t('Skills.intermediate')}`,
      tec: "JavaScript"
    },
    {
      id: 15,
      tag: frontend,
      level: `${t('Skills.basic')}`,
      tec: "Bootstrap"
    },
    {
      id: 16,
      tag: frontend,
      level: `${t('Skills.intermediate')}`,
      tec: "TypeScript"
    },
    {
      id: 17,
      tag: frontend,
      level: `${t('Skills.basic')}`,
      tec: "Angular"
    },
    {
      id: 18,
      tag: frontend,
      level: `${t('Skills.basic')}`,
      tec: "React"
    },
    {
      id: 19,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "Jira"
    },
    {
      id: 20,
      tag: Technologies,
      level: `${t('Skills.professional')}`,
      tec: "Bitbucket"
    },
    {
      id: 21,
      tag: Technologies,
      level: `${t('Skills.basic')}`,
      tec: "Confluence"
    },
    {
      id: 22,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "VSCode"
    },
    {
      id: 23,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "Eclipse"
    },
    {
      id: 24,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "Maven"
    },
    {
      id: 25,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "Bamboo"
    },
    {
      id: 26,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "Npm"
    },
    {
      id: 27,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "Git/GitHub"
    },
    {
      id: 28,
      tag: Technologies,
      level: `${t('Skills.intermediate')}`,
      tec: "DBeaver"
    },
    {
      id: 29,
      tag: Technologies,
      level: `${t('Skills.basic')}`,
      tec: "Figma"
    },
    {
      id: 30,
      tag: Technologies,
      level: `${t('Skills.basic')}`,
      tec: "Linux"
    },
    {
      id: 31,
      tag: DevOps,
      level: `${t('Skills.basic')}`,
      tec: "Azure"
    },
    {
      id: 32,
      tag: DevOps,
      level: `${t('Skills.intermediate')}`,
      tec: "Docker"
    },
  ]
};