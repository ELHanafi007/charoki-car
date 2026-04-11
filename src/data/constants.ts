import type { Car } from '../types';

export const INITIAL_CARS: Car[] = [
  { 
    id: 1, brand: "Hyundai", name: "Hyundai Tucson", price: 600, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/hyundai-tucson-ultimate-17.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Diesel", "Showroom Casa"],
      en: ["Automatic", "5 Seats", "Diesel", "Casa Showroom"],
      ar: ["أوتوماتيك", "5 مقاعد", "ديزل", "معرض الدار البيضاء"]
    },
    details: {
      fr: "Le confort moderne pour vos trajets urbains et familiaux.",
      en: "Modern comfort for your urban and family trips.",
      ar: "الراحة العصرية لرحلاتكم الحضرية والعائلية."
    },
    fullDescription: {
      fr: "Le Hyundai Tucson est le SUV polyvalent par excellence. Son design audacieux et son habitacle spacieux en font le compagnon idéal pour explorer Casablanca ou partir en voyage à travers le Maroc.",
      en: "The Hyundai Tucson is the quintessential versatile SUV. Its bold design and spacious interior make it the ideal companion for exploring Casablanca or embarking on a trip across Morocco.",
      ar: "هيونداي توسان هي السيارة الرياضية متعددة الاستخدامات بامتياز. تصميمها الجريء ومقصورتها الواسعة تجعلها الرفيق المثالي لاستكشاف الدار البيضاء أو الانطلاق في رحلة عبر المغرب."
    },
    engine: "1.6L CRDi 136ch", 
    transmission: { fr: "Automatique 7 rapports", en: "7-speed Automatic", ar: "أوتوماتيك 7 سرعات" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 7, brand: "Hyundai", name: "Hyundai Accent", price: 350, 
    category: { fr: "Berline", en: "Sedan", ar: "سيارة عائلية" },
    image: "/cars/hyundai-accent-in-grey-color-with-almaty-car-number-front-view.webp", 
    specs: {
      fr: ["Manuelle", "5 Sièges", "Diesel", "Économique"],
      en: ["Manual", "5 Seats", "Diesel", "Economical"],
      ar: ["يدوي", "5 مقاعد", "ديزل", "اقتصادية"]
    },
    details: {
      fr: "Une berline fiable et économe, idéale pour les longs trajets.",
      en: "A reliable and economical sedan, ideal for long journeys.",
      ar: "سيارة عائلية موثوقة واقتصادية، مثالية للرحلات الطويلة."
    },
    fullDescription: {
      fr: "La Hyundai Accent combine élégance et efficacité. Sa consommation de carburant optimisée et son confort intérieur en font un choix privilégié pour vos déplacements professionnels et personnels au Maroc.",
      en: "The Hyundai Accent combines elegance and efficiency. Its optimized fuel consumption and interior comfort make it a preferred choice for your business and personal travel in Morocco.",
      ar: "تجمع هيونداي أكسنت بين الأناقة والكفاءة. استهلاكها المحسن للوقود وراحتها الداخلية تجعلها خيارًا مفضلاً لتنقلاتكم المهنية والشخصية في المغرب."
    },
    engine: "1.5L CRDi 115ch", 
    transmission: { fr: "Manuelle 6 rapports", en: "6-speed Manual", ar: "يدوي 6 سرعات" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 8, brand: "Hyundai", name: "Hyundai i20", price: 350, 
    category: { fr: "Citadine", en: "City Car", ar: "سيارة مدينة" },
    image: "/cars/hyundai-i20-n-line-reveal-02_Image Video Collection Item Mobile.webp", 
    specs: {
      fr: ["Manuelle", "5 Sièges", "Essence", "Urbaine"],
      en: ["Manual", "5 Seats", "Petrol", "Urban"],
      ar: ["يدوي", "5 مقاعد", "بنزين", "حضرية"]
    },
    details: {
      fr: "Agile et moderne, parfaite pour naviguer en centre-ville.",
      en: "Agile and modern, perfect for navigating the city center.",
      ar: "رشيقة وعصرية، مثالية للتنقل في وسط المدينة."
    },
    fullDescription: {
      fr: "La Hyundai i20 se distingue par son design dynamique et sa maniabilité exceptionnelle. Parfaite pour se faufiler dans le trafic de Casablanca tout en offrant un intérieur technologique.",
      en: "The Hyundai i20 stands out with its dynamic design and exceptional maneuverability. Perfect for weaving through Casablanca's traffic while offering a high-tech interior.",
      ar: "تتميز هيونداي i20 بتصميمها الديناميكي وقدرتها الاستثنائية على المناورة. مثالية للتنقل في زحمة السير بالدار البيضاء مع توفير مقصورة تكنولوجية."
    },
    engine: "1.2L MPi 84ch", 
    transmission: { fr: "Manuelle 5 rapports", en: "5-speed Manual", ar: "يدوي 5 سرعات" },
    fuel: { fr: "Essence", en: "Petrol", ar: "بنزين" }, 
    status: 'disponible'
  },
  { 
    id: 5, brand: "Renault", name: "Renault Clio 4", price: 350, 
    category: { fr: "Citadine", en: "City Car", ar: "سيارة مدينة" },
    image: "/cars/renault-clio-v-on-a-street.webp", 
    specs: {
      fr: ["Manuelle", "5 Sièges", "Diesel", "Pratique"],
      en: ["Manual", "5 Seats", "Diesel", "Practical"],
      ar: ["يدوي", "5 مقاعد", "ديزل", "عملية"]
    },
    details: {
      fr: "Fiabilité et polyvalence pour votre quotidien.",
      en: "Reliability and versatility for your daily life.",
      ar: "الموثوقية وتعدد الاستخدامات لحياتكم اليومية."
    },
    fullDescription: {
      fr: "La Renault Clio 4 est une icône de polyvalence. Son design intemporel et sa sobriété en font la voiture idéale pour explorer les rues de la ville ou s'évader sur la côte.",
      en: "The Renault Clio 4 is an icon of versatility. Its timeless design and sobriety make it the ideal car for exploring city streets or escaping to the coast.",
      ar: "رينو كليو 4 هي رمز لتعدد الاستخدامات. تصميمها الخالد وبساطتها يجعلها السيارة المثالية لاستكشاف شوارع المدينة أو الهروب إلى الساحل."
    },
    engine: "1.5L dCi 85ch", 
    transmission: { fr: "Manuelle 5 rapports", en: "5-speed Manual", ar: "يدوي 5 سرعات" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 9, brand: "Renault", name: "Renault Arkana", price: 650, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/Renault-Arkana_EU-Version-2022-1280-01.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Hybride", "Style"],
      en: ["Automatic", "5 Seats", "Hybrid", "Style"],
      ar: ["أوتوماتيك", "5 مقاعد", "هجينة", "أنيقة"]
    },
    details: {
      fr: "Le SUV coupé qui allie élégance et performance.",
      en: "The SUV coupe that combines elegance and performance.",
      ar: "سيارة رياضية كوبيه تجمع بين الأناقة والأداء."
    },
    fullDescription: {
      fr: "Le Renault Arkana redéfinit le segment avec sa silhouette de coupé et sa position de conduite haute. Un mélange parfait de style, d'espace et de technologie hybride moderne.",
      en: "The Renault Arkana redefines the segment with its coupe silhouette and high driving position. A perfect blend of style, space, and modern hybrid technology.",
      ar: "رينو أركانا تعيد تعريف هذه الفئة بتصميمها الكوبيه ووضعية القيادة المرتفعة. مزيج مثالي من الأناقة والمساحة والتكنولوجيا الهجينة الحديثة."
    },
    engine: "E-Tech Hybrid 145ch", 
    transmission: { fr: "Automatique Multi-modes", en: "Multi-mode Automatic", ar: "أوتوماتيك متعدد الأوضاع" },
    fuel: { fr: "Hybride", en: "Hybrid", ar: "هجينة" }, 
    status: 'disponible'
  },
  { 
    id: 6, brand: "Volkswagen", name: "VW Golf 8", price: 700, 
    category: { fr: "Berline", en: "Sedan", ar: "سيارة عائلية" },
    image: "/cars/Volkswagen-Golf-facelift-2024-Neuve-Maroc-01.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Digital", "Allemande"],
      en: ["Automatic", "5 Seats", "Digital", "German"],
      ar: ["أوتوماتيك", "5 مقاعد", "رقمية", "ألمانية"]
    },
    details: {
      fr: "La perfection allemande alliée à la technologie numérique.",
      en: "German perfection combined with digital technology.",
      ar: "الكمال الألماني مجتمعاً مع التكنولوجيا الرقمية."
    },
    fullDescription: {
      fr: "La Golf 8 est une icône de l'automobile mondiale. Toujours à la pointe de l'innovation, elle offre un agrément de conduite et une qualité de finition qui font référence.",
      en: "The Golf 8 is a global automotive icon. Always at the forefront of innovation, it offers a driving pleasure and finish quality that set the standard.",
      ar: "غولف 8 هي أيقونة في عالم السيارات العالمي. دائمًا في طليعة الابتكار، فهي توفر متعة قيادة وجودة تشطيب تعتبر مرجعًا في فئتها."
    },
    engine: "2.0L TDI 150ch", 
    transmission: { fr: "DSG Automatique", en: "DSG Automatic", ar: "DSG أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 10, brand: "Volkswagen", name: "VW T-Roc", price: 550, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/troc.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Diesel", "Compact"],
      en: ["Automatic", "5 Seats", "Diesel", "Compact"],
      ar: ["أوتوماتيك", "5 مقاعد", "ديزل", "مدمجة"]
    },
    details: {
      fr: "Le SUV compact au design affirmé et dynamique.",
      en: "The compact SUV with a bold and dynamic design.",
      ar: "سيارة رياضية مدمجة بتصميم قوي وديناميكي."
    },
    fullDescription: {
      fr: "Le VW T-Roc combine la force d'un SUV et l'agilité d'une compacte. Idéal pour ceux qui recherchent un style unique et une conduite réactive en toute circonstance.",
      en: "The VW T-Roc combines the strength of an SUV and the agility of a compact car. Ideal for those looking for a unique style and responsive driving in all circumstances.",
      ar: "فولكس فاجن تي روك تجمع بين قوة سيارات الدفع الرباعي ورشاقة السيارات المدمجة. مثالية لمن يبحثون عن أسلوب فريد وقيادة سريعة الاستجابة في جميع الظروف."
    },
    engine: "2.0L TDI 150ch", 
    transmission: { fr: "DSG Automatique", en: "DSG Automatic", ar: "DSG أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 11, brand: "Volkswagen", name: "VW Tiguan", price: 750, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/tiguan.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Diesel", "Luxe"],
      en: ["Automatic", "5 Seats", "Diesel", "Luxury"],
      ar: ["أوتوماتيك", "5 مقاعد", "ديزل", "فاخرة"]
    },
    details: {
      fr: "Polyvalence et confort haut de gamme pour toute la famille.",
      en: "Versatility and premium comfort for the whole family.",
      ar: "تعدد الاستخدامات وراحة راقية لجميع أفراد الأسرة."
    },
    fullDescription: {
      fr: "Le Volkswagen Tiguan est la référence des SUV familiaux. Spacieux, technologique et extrêmement confortable, il vous accompagnera dans tous vos voyages avec une sérénité totale.",
      en: "The Volkswagen Tiguan is the benchmark for family SUVs. Spacious, technological, and extremely comfortable, it will accompany you on all your travels with total peace of mind.",
      ar: "فولكس فاجن تيغوان هي المرجع في السيارات الرياضية العائلية. واسعة وتكنولوجية ومريحة للغاية، سترافقكم في جميع رحلاتكم بكل طمأنينة."
    },
    engine: "2.0L TDI 150ch", 
    transmission: { fr: "DSG Automatique", en: "DSG Automatic", ar: "DSG أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 12, brand: "Volkswagen", name: "VW Touareg", price: 1200, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/touareg.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Diesel", "Premium"],
      en: ["Automatic", "5 Seats", "Diesel", "Premium"],
      ar: ["أوتوماتيك", "5 مقاعد", "ديزل", "ممتازة"]
    },
    details: {
      fr: "Le summum du luxe et de la puissance tout-terrain.",
      en: "The pinnacle of luxury and off-road power.",
      ar: "قمة الفخامة والقوة على جميع الطرقات."
    },
    fullDescription: {
      fr: "Le VW Touareg est un chef-d'œuvre d'ingénierie. Offrant un luxe incomparable et des performances exceptionnelles, c'est le choix ultime pour une expérience de conduite prestigieuse.",
      en: "The VW Touareg is a masterpiece of engineering. Offering incomparable luxury and exceptional performance, it is the ultimate choice for a prestigious driving experience.",
      ar: "فولكس فاجن طوارق هي تحفة هندسية. توفر فخامة لا تضاهى وأداءً استثنائيًا، وهي الخيار الأمثل لتجربة قيادة مرموقة."
    },
    engine: "3.0L V6 TDI 286ch", 
    transmission: { fr: "Tiptronic 8 rapports", en: "8-speed Tiptronic", ar: "تيبترونيك 8 سرعات" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 13, brand: "Citroën", name: "Citroën C3", price: 300, 
    category: { fr: "Citadine", en: "City Car", ar: "سيارة مدينة" },
    image: "/cars/c3.webp", 
    specs: {
      fr: ["Manuelle", "5 Sièges", "Essence", "Confort"],
      en: ["Manual", "5 Seats", "Petrol", "Comfort"],
      ar: ["يدوي", "5 مقاعد", "بنزين", "مريحة"]
    },
    details: {
      fr: "Colorée et confortable, la citadine pétillante.",
      en: "Colorful and comfortable, the sparkling city car.",
      ar: "ملونة ومريحة، سيارة المدينة المتألقة."
    },
    fullDescription: {
      fr: "La Citroën C3 se distingue par son design audacieux et ses Airbump®. Ses sièges Advanced Comfort garantissent une conduite détendue dans toutes les rues de Casablanca.",
      en: "The Citroën C3 stands out with its bold design and Airbumps®. Its Advanced Comfort seats guarantee a relaxed drive in all the streets of Casablanca.",
      ar: "تتميز ستروين C3 بتصميمها الجريء ونظام Airbump®. تضمن مقاعد الراحة المتقدمة قيادة مريحة في جميع شوارع الدار البيضاء."
    },
    engine: "1.2L PureTech 82ch", 
    transmission: { fr: "Manuelle 5 rapports", en: "5-speed Manual", ar: "يدوي 5 سرعات" },
    fuel: { fr: "Essence", en: "Petrol", ar: "بنزين" }, 
    status: 'disponible'
  },
  { 
    id: 3, brand: "Citroën", name: "Citroën C4", price: 550, 
    category: { fr: "Berline", en: "Sedan", ar: "سيارة عائلية" },
    image: "/cars/c4.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Confort", "Design"],
      en: ["Automatic", "5 Seats", "Comfort", "Design"],
      ar: ["أوتوماتيك", "5 مقاعد", "مريحة", "تصميم"]
    },
    details: {
      fr: "Une berline surélevée au confort de suspension exceptionnel.",
      en: "An elevated sedan with exceptional suspension comfort.",
      ar: "سيارة عائلية مرتفعة براحة تعليق استثنائية."
    },
    fullDescription: {
      fr: "La Citroën C4 réinvente la berline compacte. Avec son design unique mixant les codes de la berline et du SUV, elle offre un confort de suspension 'tapis volant' typique de Citroën.",
      en: "The Citroën C4 reinvents the compact sedan. With its unique design mixing sedan and SUV codes, it offers 'magic carpet' suspension comfort typical of Citroën.",
      ar: "ستروين C4 تعيد ابتكار السيارة العائلية المدمجة. بفضل تصميمها الفريد الذي يمزج بين خصائص السيارات العائلية والرياضية، فإنها توفر راحة تعليق 'البساط السحري' المميزة لشركة ستروين."
    },
    engine: "1.5L BlueHDi 130ch", 
    transmission: { fr: "EAT8 Automatique", en: "EAT8 Automatic", ar: "EAT8 أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 4, brand: "Citroën", name: "Citroën C5 Aircross", price: 650, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/citroen-c5-aircross.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Luxe", "Voyage"],
      en: ["Automatic", "5 Seats", "Luxury", "Travel"],
      ar: ["أوتوماتيك", "5 مقاعد", "فخامة", "سفر"]
    },
    details: {
      fr: "Le SUV le plus confortable de sa catégorie.",
      en: "The most comfortable SUV in its category.",
      ar: "السيارة الرياضية الأكثر راحة في فئتها."
    },
    fullDescription: {
      fr: "Le C5 Aircross est conçu pour les longs trajets en toute sérénité. Ses sièges Advanced Comfort et son espace intérieur modulable en font le choix premium pour les familles exigeantes.",
      en: "The C5 Aircross is designed for serene long journeys. Its Advanced Comfort seats and modular interior space make it the premium choice for demanding families.",
      ar: "تم تصميم C5 Aircross للرحلات الطويلة بكل طمأنينة. مقاعد الراحة المتقدمة ومساحتها الداخلية المرنة تجعلها الخيار الأمثل للعائلات المتطلبة."
    },
    engine: "1.5L BlueHDi 130ch", 
    transmission: { fr: "EAT8 Automatique", en: "EAT8 Automatic", ar: "EAT8 أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 2, brand: "Peugeot", name: "Peugeot 208", price: 400, 
    category: { fr: "Citadine", en: "City Car", ar: "سيارة مدينة" },
    image: "/cars/1758455-1920x1080-desktop-1080p-peugeot-208-wallpaper.webp", 
    specs: {
      fr: ["Manuelle", "5 Sièges", "i-Cockpit", "Ville"],
      en: ["Manual", "5 Seats", "i-Cockpit", "City"],
      ar: ["يدوي", "5 مقاعد", "i-Cockpit", "مدينة"]
    },
    details: {
      fr: "Agile et irrésistible, la reine des rues de Casablanca.",
      en: "Agile and irresistible, the queen of Casablanca's streets.",
      ar: "رشيقة ولا تقاوم، ملكة شوارع الدار البيضاء."
    },
    fullDescription: {
      fr: "La Peugeot 208 séduit par son style affirmé et sa technologie embarquée. Agile dans le trafic urbain, elle offre une conduite dynamique et économique sans compromis sur le confort.",
      en: "The Peugeot 208 seduces with its assertive style and on-board technology. Agile in urban traffic, it offers dynamic and economical driving without compromising on comfort.",
      ar: "تغري بيجو 208 بأسلوبها القوي والتكنولوجيا المدمجة. رشيقة في حركة المرور في المدينة، وتوفر قيادة ديناميكية واقتصادية دون المساومة على الراحة."
    },
    engine: "1.2L PureTech 75ch", 
    transmission: { fr: "Manuelle 5 rapports", en: "5-speed Manual", ar: "يدوي 5 سرعات" },
    fuel: { fr: "Essence", en: "Petrol", ar: "بنزين" }, 
    status: 'disponible'
  },
  { 
    id: 14, brand: "Peugeot", name: "Peugeot 2008", price: 550, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/1755809-1920x1080-desktop-1080p-peugeot-2008-background-photo.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Diesel", "Moderne"],
      en: ["Automatic", "5 Seats", "Diesel", "Modern"],
      ar: ["أوتوماتيك", "5 مقاعد", "ديزل", "عصرية"]
    },
    details: {
      fr: "Le SUV compact au design futuriste et élégant.",
      en: "The compact SUV with a futuristic and elegant design.",
      ar: "سيارة رياضية مدمجة بتصميم مستقبلي وأنيق."
    },
    fullDescription: {
      fr: "Le Peugeot 2008 offre une expérience de conduite enrichie grâce à son i-Cockpit® 3D. Un SUV compact qui ne passe pas inaperçu avec ses lignes acérées et sa signature lumineuse distinctive.",
      en: "The Peugeot 2008 offers an enriched driving experience thanks to its i-Cockpit® 3D. A compact SUV that doesn't go unnoticed with its sharp lines and distinctive light signature.",
      ar: "توفر بيجو 2008 تجربة قيادة غنية بفضل نظام i-Cockpit® 3D. سيارة رياضية مدمجة لا تمر دون أن يلاحظها أحد بخطوطها الحادة وتوقيعها الضوئي المميز."
    },
    engine: "1.5L BlueHDi 130ch", 
    transmission: { fr: "EAT8 Automatique", en: "EAT8 Automatic", ar: "EAT8 أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 15, brand: "Peugeot", name: "Peugeot 3008", price: 700, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/peugeot-3008-front-cross-side-view-973750.webp", 
    specs: {
      fr: ["Automatique", "5 Sièges", "Diesel", "Luxe"],
      en: ["Automatic", "5 Seats", "Diesel", "Luxury"],
      ar: ["أوتوماتيك", "5 مقاعد", "ديزل", "فخامة"]
    },
    details: {
      fr: "Design spectaculaire et technologies de pointe.",
      en: "Spectacular design and cutting-edge technologies.",
      ar: "تصميم مذهل وتقنيات متطورة."
    },
    fullDescription: {
      fr: "Le Peugeot 3008 est une invitation au voyage. Son design raffiné et son habitacle high-tech offrent un confort et une sécurité de haut niveau pour tous vos déplacements.",
      en: "The Peugeot 3008 is an invitation to travel. Its refined design and high-tech interior offer high-level comfort and safety for all your travels.",
      ar: "بيجو 3008 هي دعوة للسفر. تصميمها الراقي ومقصورتها عالية التقنية توفر راحة وأمانًا عالي المستوى لجميع تنقلاتكم."
    },
    engine: "1.5L BlueHDi 130ch", 
    transmission: { fr: "EAT8 Automatique", en: "EAT8 Automatic", ar: "EAT8 أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  },
  { 
    id: 16, brand: "Peugeot", name: "Peugeot 5008", price: 850, 
    category: { fr: "SUV", en: "SUV", ar: "سيارة رياضية" },
    image: "/cars/peugeot-5008.webp", 
    specs: {
      fr: ["Automatique", "7 Sièges", "Diesel", "Espace"],
      en: ["Automatic", "7 Seats", "Diesel", "Space"],
      ar: ["أوتوماتيك", "7 مقاعد", "ديزل", "مساحة"]
    },
    details: {
      fr: "Le SUV 7 places idéal pour les grandes familles.",
      en: "The ideal 7-seater SUV for large families.",
      ar: "السيارة الرياضية ذات 7 مقاعد المثالية للعائلات الكبيرة."
    },
    fullDescription: {
      fr: "Le Peugeot 5008 allie la modularité d'un monospace et le style d'un SUV. Avec ses 7 places indépendantes, il offre un espace et un confort exceptionnels pour les groupes et les familles.",
      en: "The Peugeot 5008 combines the modularity of a MPV and the style of an SUV. With its 7 independent seats, it offers exceptional space and comfort for groups and families.",
      ar: "تجمع بيجو 5008 بين مرونة السيارات العائلية وأسلوب السيارات الرياضية. مع 7 مقاعد مستقلة، توفر مساحة وراحة استثنائية للمجموعات والعائلات."
    },
    engine: "1.5L BlueHDi 130ch", 
    transmission: { fr: "EAT8 Automatique", en: "EAT8 Automatic", ar: "EAT8 أوتوماتيك" },
    fuel: { fr: "Diesel", en: "Diesel", ar: "ديزل" }, 
    status: 'disponible'
  }
];

export const TESTIMONIALS = [
  { id: 1, name: "Youssef El Amrani", role: "Entrepreneur", content: "Service exceptionnel. La voiture était impeccable et livrée à l'heure.", rating: 5 },
  { id: 2, name: "Sarah Bennani", role: "Consultante", content: "J'ai loué une citadine pour mes déplacements à Casablanca. Équipe pro.", rating: 5 },
  { id: 3, name: "Marc Lefebvre", role: "Touriste", content: "Une expérience sans stress. Tarifs transparents et assistance réactive.", rating: 4 }
];

export const FAQS = [
  { question: "Quels sont les documents requis ?", answer: "Permis de conduire (min. 2 ans), CIN ou passeport et justificatif de domicile." },
  { question: "L'assurance est-elle incluse ?", answer: "Oui, tous nos tarifs incluent une assurance tous risques avec franchise." },
  { question: "Puis-je restituer la voiture dans une autre ville ?", answer: "Nos restitutions se font principalement à Casablanca. Pour d'autres villes, des frais s'appliquent." },
  { question: "Quel est le mode de paiement ?", answer: "Espèces, virement bancaire ou carte de crédit lors de la prise en charge." }
];

export const WHATSAPP_NUMBER = "+212700382718";
