import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import { messages } from './languages/index'

i18n.use(initReactI18next).init({
    debug: false,
    defaultNS: ['translations'],
    fallbackLng: 'pt',
    ns: ['translations'],
    resources: messages,
    react:{
        useSuspense: false,
    },
    interpolation:{
        escapeValue: false,
    }
})

export { i18n } ;