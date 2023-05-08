import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "title": "WBSR",
            "slogan": "Everyone Can Play Music In Web3",
            "language": "简体中文",
            "roadmap": "Roadmap",
            "about": "About",
            "collection": "Collection",
        }
    },
    zh: {
        translation: {
            "title": "WBSR",
            "slogan": "每个人都都是音乐家",
            "language": "English",
            "about": "关于",
            "roadmap": "规划",
            "team": "团队",
            "collection": "作品",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;