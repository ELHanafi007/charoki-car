import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "fleet": "Fleet",
        "contact": "Contact",
        "book": "BOOK NOW"
      },
      "hero": {
        "browse": "BROWSE",
        "contact": "CONTACT"
      },
      "sections": {
        "vision": "OUR VISION",
        "excellence": "Excellence in Service",
        "fleet_subtitle": "OUR SELECTION",
        "fleet_title": "The Fleet",
        "testimonials": "TESTIMONIALS",
        "faq": "QUESTIONS"
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "fleet": "La Flotte",
        "contact": "Contact",
        "book": "RÉSERVER"
      },
      "hero": {
        "browse": "PARCOURIR",
        "contact": "CONTACT"
      },
      "sections": {
        "vision": "NOTRE VISION",
        "excellence": "L'Excellence du Service",
        "fleet_subtitle": "NOTRE SÉLECTION",
        "fleet_title": "La Flotte",
        "testimonials": "TEMOIGNAGES",
        "faq": "QUESTIONS"
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "fleet": "الأسطول",
        "contact": "اتصل بنا",
        "book": "احجز الآن"
      },
      "hero": {
        "browse": "تصفح",
        "contact": "اتصل"
      },
      "sections": {
        "vision": "رؤيتنا",
        "excellence": "التميز في الخدمة",
        "fleet_subtitle": "اختياراتنا",
        "fleet_title": "الأسطول",
        "testimonials": "شهادات العملاء",
        "faq": "أسئلة شائعة"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
