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
        "title_luxury": "CHAROKI",
        "title_car": "CAR",
        "subtitle": "Premium mobility excellence in Casablanca. Rediscover travel with our exclusive collection.",
        "browse": "BROWSE",
        "contact": "CONTACT",
        "scroll": "SCROLL"
      },
      "sections": {
        "vision": "OUR VISION",
        "excellence": "Excellence in Service",
        "vision_text": "CHAROKI CAR redefines premium rental standards in Morocco with an exclusive fleet and tailor-made service.",
        "serenity_title": "SERENITY",
        "serenity_text": "Comprehensive insurance and 24/7 assistance included.",
        "delivery_title": "DELIVERY",
        "delivery_text": "Airport, home or office delivery according to your needs.",
        "fleet_subtitle": "OUR SELECTION",
        "fleet_title": "The Fleet",
        "view_all": "VIEW ALL COLLECTION",
        "testimonials": "TESTIMONIALS",
        "faq": "QUESTIONS",
        "contact_title": "Let's Talk About Your Stay",
        "contact_subtitle": "CONTACT"
      },
      "filters": {
        "all": "All",
        "city": "City",
        "suv": "SUV",
        "sedan": "Sedan"
      },
      "footer": {
        "useful_links": "USEFUL LINKS",
        "coordinates": "COORDINATES",
        "rights": "ALL RIGHTS RESERVED."
      },
      "car": {
        "per_day": "/ day",
        "back": "BACK TO FLEET",
        "details": "EXCLUSIVE RATE",
        "reserve": "RESERVE THIS VEHICLE",
        "unavailable": "VEHICLE NOT AVAILABLE",
        "total": "TOTAL",
        "days": "DAYS",
        "engine": "ENGINE",
        "transmission": "TRANSMISSION",
        "fuel": "FUEL",
        "insurance": "Comprehensive insurance included",
        "delivery": "Casablanca delivery included",
        "assistance": "24/7 Assistance"
      },
      "booking": {
        "title": "Booking Confirmation",
        "start": "START OF RENTAL",
        "end": "END OF RENTAL",
        "next": "NEXT",
        "name": "YOUR FULL NAME",
        "phone": "YOUR PHONE",
        "finish": "FINISH ON WHATSAPP",
        "modify": "MODIFY DATES",
        "duration": "Duration"
      },
      "contact": {
        "phone": "PHONE",
        "showroom": "SHOWROOM",
        "hours": "HOURS",
        "hours_text": "09:00 - 20:00 • Mon - Sat",
        "text": "Our team is at your disposal to advise you and organize your tailor-made mobility in Casablanca.",
        "whatsapp": "START ON WHATSAPP"
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
        "title_luxury": "CHAROKI",
        "title_car": "CAR",
        "subtitle": "L'excellence de la mobilité premium à Casablanca. Redécouvrez le voyage avec notre collection exclusive.",
        "browse": "PARCOURIR",
        "contact": "CONTACT",
        "scroll": "SCROLL"
      },
      "sections": {
        "vision": "NOTRE VISION",
        "excellence": "L'Excellence du Service",
        "vision_text": "CHAROKI CAR redéfinit les standards de la location premium au Maroc, avec un parc exclusif et un service sur-mesure.",
        "serenity_title": "SÉRÉNITÉ",
        "serenity_text": "Assurance tous risques et assistance 24/7 incluse.",
        "delivery_title": "LIVRAISON",
        "delivery_text": "Aéroport, domicile ou bureau selon vos besoins.",
        "fleet_subtitle": "NOTRE SÉLECTION",
        "fleet_title": "La Flotte",
        "view_all": "VOIR TOUTE LA COLLECTION",
        "testimonials": "TEMOIGNAGES",
        "faq": "QUESTIONS",
        "contact_title": "Parlons de votre Séjour",
        "contact_subtitle": "CONTACT"
      },
      "filters": {
        "all": "Tous",
        "city": "Citadine",
        "suv": "SUV",
        "sedan": "Berline"
      },
      "footer": {
        "useful_links": "LIENS UTILES",
        "coordinates": "COORDONNÉES",
        "rights": "TOUS DROITS RÉSERVÉS."
      },
      "car": {
        "per_day": "/ jour",
        "back": "RETOUR AU PARC",
        "details": "TARIF EXCLUSIF",
        "reserve": "RÉSERVER CE VÉHICULE",
        "unavailable": "VÉHICULE NON DISPONIBLE",
        "total": "TOTAL",
        "days": "JOURS",
        "engine": "MOTEUR",
        "transmission": "TRANSMISSION",
        "fuel": "CARBURANT",
        "insurance": "Assurance tous risques incluse",
        "delivery": "Livraison Casablanca incluse",
        "assistance": "Assistance 24h/24 & 7j/7"
      },
      "booking": {
        "title": "Confirmation de Réservation",
        "start": "DÉBUT DE LOCATION",
        "end": "FIN DE LOCATION",
        "next": "SUIVANT",
        "name": "VOTRE NOM COMPLET",
        "phone": "VOTRE TÉLÉPHONE",
        "finish": "TERMINER SUR WHATSAPP",
        "modify": "MODIFIER LES DATES",
        "duration": "Durée"
      },
      "contact": {
        "phone": "TÉLÉPHONE",
        "showroom": "SHOWROOM",
        "hours": "HORAIRES",
        "hours_text": "09:00 - 20:00 • Lun - Sam",
        "text": "Notre équipe est à votre disposition pour vous conseiller et organiser votre mobilité sur-mesure à Casablanca.",
        "whatsapp": "DÉBUTER SUR WHATSAPP"
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
        "title_luxury": "شاروكي",
        "title_car": "كار",
        "subtitle": "التميز في التنقل الفاخر في الدار البيضاء. اكتشف متعة السفر مع مجموعتنا الحصرية.",
        "browse": "تصفح",
        "contact": "اتصل",
        "scroll": "مرر"
      },
      "sections": {
        "vision": "رؤيتنا",
        "excellence": "التميز في الخدمة",
        "vision_text": "شاروكي كار تعيد تعريف معايير التأجير الفاخر في المغرب، مع أسطول حصري وخدمة مفصلة حسب الطلب.",
        "serenity_title": "راحة البال",
        "serenity_text": "تأمين شامل ومساعدة على مدار الساعة طوال أيام الأسبوع.",
        "delivery_title": "التسليم",
        "delivery_text": "المطار، المنزل أو المكتب حسب احتياجاتك.",
        "fleet_subtitle": "اختياراتنا",
        "fleet_title": "الأسطول",
        "view_all": "عرض المجموعة كاملة",
        "testimonials": "شهادات العملاء",
        "faq": "أسئلة شائعة",
        "contact_title": "لنتحدث عن إقامتكم",
        "contact_subtitle": "اتصل بنا"
      },
      "filters": {
        "all": "الكل",
        "city": "سيارة مدينة",
        "suv": "سيارة رياضية",
        "sedan": "سيارة عائلية"
      },
      "footer": {
        "useful_links": "روابط مفيدة",
        "coordinates": "معلومات الاتصال",
        "rights": "جميع الحقوق محفوظة."
      },
      "car": {
        "per_day": "/ يوم",
        "back": "العودة للأسطول",
        "details": "سعر حصري",
        "reserve": "احجز هذه السيارة",
        "unavailable": "السيارة غير متوفرة",
        "total": "المجموع",
        "days": "أيام",
        "engine": "المحرك",
        "transmission": "ناقل الحركة",
        "fuel": "الوقود",
        "insurance": "تأمين شامل متضمن",
        "delivery": "التوصيل في الدار البيضاء متضمن",
        "assistance": "مساعدة 24/7"
      },
      "booking": {
        "title": "تأكيد الحجز",
        "start": "بداية الإيجار",
        "end": "نهاية الإيجار",
        "next": "التالي",
        "name": "الاسم الكامل",
        "phone": "رقم الهاتف",
        "finish": "إتمام عبر واتساب",
        "modify": "تعديل التواريخ",
        "duration": "المدة"
      },
      "contact": {
        "phone": "الهاتف",
        "showroom": "المعرض",
        "hours": "ساعات العمل",
        "hours_text": "09:00 - 20:00 • الاثنين - السبت",
        "text": "فريقنا رهن إشارتكم لتقديم المشورة وتنظيم تنقلكم في الدار البيضاء.",
        "whatsapp": "ابدأ عبر واتساب"
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
