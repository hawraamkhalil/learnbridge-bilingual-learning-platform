"use strict";

const LEARNBRIDGE_LANGUAGE_STORAGE_KEY =
  "learnbridge-language";

const SUPPORTED_LANGUAGES = Object.freeze({
  ENGLISH: "en",
  ARABIC: "ar"
});

const translations = {
  en: {
    pageTitles: {
      home: "LearnBridge | Bilingual Educational Resources",
      resources: "LearnBridge | Educational Resources",
      about: "LearnBridge | About",
      contact: "LearnBridge | Contact"
    },

    common: {
      skipToContent: "Skip to main content",
      brandHomeLabel: "LearnBridge home",
      primaryNavigation: "Primary navigation",
      footerNavigation: "Footer navigation",

      navHome: "Home",
      navResources: "Resources",
      navAbout: "About",
      navContact: "Contact",

      menu: "Menu",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",

      switchToArabic: "Switch language to Arabic",
      switchToEnglish: "Switch language to English",

      darkMode: "Dark mode",
      switchToDarkMode: "Switch to dark mode",
      switchToLightMode: "Switch to light mode",

      whatsapp: "WhatsApp",
      explore: "Explore",

      footerDescription:
        "Helping learners discover clear and accessible educational resources in English and Arabic.",

      contactHeading: "Contact",
      contactDescription:
        "Contact LearnBridge through the contact page or WhatsApp.",
      contactWhatsApp: "Contact through WhatsApp",

      followHeading: "Follow",
      socialPlaceholder:
        "GitHub and LinkedIn links will be added before publication.",

      rightsReserved: "All rights reserved.",
      backToTop: "Back to top"
    },

    home: {
      eyebrow: "Learn clearly. Grow confidently.",

      heroTitle:
        "Discover educational resources that match your learning journey",

      heroDescription:
        "Explore carefully organized resources in programming, web development, data science, artificial intelligence, mathematics, and career development—in both English and Arabic.",

      browseResources: "Browse resources",
      learnMore: "Learn about LearnBridge",

      highlightsLabel: "Platform highlights",
      highlightBilingual: "English and Arabic",
      highlightResponsive: "Mobile friendly",
      highlightAccessible: "Accessible learning",

      heroPreviewLabel:
        "Preview of the LearnBridge resource experience",

      previewHeading: "Your learning dashboard",
      previewLevel: "Beginner",
      weeklyProgress: "Weekly learning progress",
      previewResourceTitle: "Introduction to HTML",
      previewResourceMeta: "Tutorial · 45 minutes",
      previewCategories: "Categories",
      previewResources: "Resources",
      previewLanguages: "Languages",

      categoriesEyebrow: "Explore by subject",
      categoriesTitle: "Choose a learning category",
      categoriesDescription:
        "Start with the topic that matches your goals, experience, and interests.",
      exploreCategory: "Explore resources",

      featuredEyebrow: "Recommended starting points",
      featuredTitle: "Featured learning resources",
      featuredDescription:
        "Begin with practical resources selected for learners who are building strong foundations.",
      viewAllResources: "View all resources",
      viewResource: "View resource",

      howItWorksEyebrow: "A simple learning process",
      howItWorksTitle: "How LearnBridge works",
      howItWorksDescription:
        "Find useful learning material without moving through an overwhelming collection of unrelated links.",

      stepDiscoverTitle: "Discover",
      stepDiscoverDescription:
        "Browse categories or search for a topic that matches your current learning goal.",

      stepFilterTitle: "Filter",
      stepFilterDescription:
        "Narrow the results by level, resource type, language, or estimated learning time.",

      stepSaveTitle: "Save and learn",
      stepSaveDescription:
        "Bookmark useful resources and return to them whenever you are ready to continue.",

      benefitsEyebrow: "Designed around learners",
      benefitsTitle:
        "Why learners can benefit from LearnBridge",
      benefitsDescription:
        "Every part of the platform is planned to make educational resources easier to understand and access.",

      bilingualBenefitTitle: "Bilingual access",
      bilingualBenefitDescription:
        "Move between English and Arabic while preserving clear and natural page layouts.",

      organizedBenefitTitle: "Organized discovery",
      organizedBenefitDescription:
        "Search and filters help you reach relevant resources more quickly.",

      accessibleBenefitTitle: "Accessible interface",
      accessibleBenefitDescription:
        "Semantic structure, keyboard support, readable contrast, and visible focus improve access.",

      flexibleBenefitTitle: "Learn anywhere",
      flexibleBenefitDescription:
        "The responsive layout works across mobile phones, tablets, and desktop screens.",

      statisticsEyebrow: "Platform overview",
      statisticsTitle: "Learning opportunities at a glance",
      statCategories: "Learning categories",
      statResources: "Starter resources",
      statLanguages: "Supported languages",
      statResponsive: "Responsive interface",

      newsletterEyebrow: "Continue learning",
      newsletterTitle: "Receive future learning updates",
      newsletterDescription:
        "Join the placeholder newsletter list to receive new resource announcements after this feature is connected to a real service.",
      newsletterEmailLabel: "Email address",
      newsletterPlaceholder: "Enter your email address",
      subscribeButton: "Subscribe",
      newsletterNote:
        "This demonstration form does not send or store your email yet.",

      whatsappEyebrow: "Need help?",
      whatsappTitle:
        "Ask about the available educational resources",
      whatsappDescription:
        "Contact LearnBridge through WhatsApp for help finding a useful starting point.",
      whatsappButton: "Contact through WhatsApp"
    },

    categories: {
      webDevelopment: "Web Development",
      webDevelopmentDescription:
        "Learn how modern websites are structured, styled, and made interactive.",

      programming: "Programming",
      programmingDescription:
        "Build programming logic and strengthen your problem-solving foundations.",

      dataScience: "Data Science",
      dataScienceDescription:
        "Explore data analysis, visualization, statistics, and introductory machine learning.",

      artificialIntelligence: "Artificial Intelligence",
      artificialIntelligenceDescription:
        "Understand important AI concepts, tools, applications, and responsible use.",

      mathematics: "Mathematics",
      mathematicsDescription:
        "Improve mathematical understanding through clear explanations and practical exercises.",

      careerDevelopment: "Career Development",
      careerDevelopmentDescription:
        "Strengthen your portfolio, CV, interview preparation, and professional skills."
    },

    resourceLabels: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",

      article: "Article",
      video: "Video",
      tutorial: "Tutorial",
      course: "Course",
      documentation: "Documentation",
      exercise: "Exercise",

      english: "English",
      arabic: "Arabic",
      bilingual: "English and Arabic"
    },

    featured: {
      htmlTitle: "Introduction to HTML",
      htmlDescription:
        "Understand the semantic structure used to build modern web pages.",

      pythonTitle: "Python Programming Foundations",
      pythonDescription:
        "Learn variables, conditions, loops, functions, and basic problem solving.",

      aiTitle: "Artificial Intelligence Explained",
      aiDescription:
        "Explore how AI systems learn from data and where they are used responsibly.",

      duration45: "45 minutes",
      duration180: "3 hours",
      duration20: "20 minutes",

      languageEnglish: "English",
      languageBilingual: "English and Arabic",
      languageArabic: "Arabic"
    },

    resources: {
      eyebrow: "Resource library",

      title:
        "Find the right resource for your next learning goal",

      description:
        "Search and organize educational resources by subject, level, format, language, and estimated learning time.",

      libraryEyebrow: "Explore and refine",
      libraryTitle: "Educational resource library",

      libraryDescription:
        "Use one or several controls together to find resources matching your current needs.",

      searchLabel: "Search resources",
      searchPlaceholder: "Search by title or keyword",

      categoryLabel: "Category",
      allCategories: "All categories",

      difficultyLabel: "Difficulty",
      allDifficulties: "All levels",

      typeLabel: "Resource type",
      allTypes: "All types",

      languageLabel: "Resource language",
      allLanguages: "All languages",

      sortLabel: "Sort resources",
      sortTitleAscending: "Title: A to Z",
      sortTitleDescending: "Title: Z to A",
      sortDurationAscending: "Shortest first",
      sortDurationDescending: "Longest first",

      resetFilters: "Reset filters",

      resultsCount: "{count} resources found",

      noResultsTitle: "No matching resources",

      noResultsDescription:
        "Try a different search term or reset one or more filters.",

      categoryMeta: "Category",
      difficultyMeta: "Difficulty",
      languageMeta: "Language",
      durationMeta: "Learning time",

      durationValue: "{count} minutes",
      viewResource: "View resource",

      linkUnavailable:
        "A final link has not been added for “{title}” yet."
    },

    about: {
      eyebrow: "About the platform",
      placeholderTitle:
        "Learning should be clear and accessible",
      placeholderDescription:
        "The mission, vision, platform story, values, learning philosophy, learner benefits, and bilingual-support explanation will be added in Phase 9.",
      contactButton: "Contact LearnBridge"
    },

    contact: {
      eyebrow: "Contact LearnBridge",
      placeholderTitle:
        "We would be happy to hear from you",
      placeholderDescription:
        "The bilingual contact form and its field-specific validation will be added in Phase 10.",

      formPlaceholderTitle: "Contact form area",
      formPlaceholderDescription:
        "This area will contain the full name, email, subject, message, and preferred contact method fields.",

      whatsappTitle: "Contact through WhatsApp",
      whatsappPlaceholderDescription:
        "The final bilingual WhatsApp link will be generated using JavaScript after the placeholder phone number is configured."
    }
  },

  ar: {
    pageTitles: {
      home: "LearnBridge | مصادر تعليمية باللغتين",
      resources: "LearnBridge | المصادر التعليمية",
      about: "LearnBridge | من نحن",
      contact: "LearnBridge | تواصل معنا"
    },

    common: {
      skipToContent: "الانتقال إلى المحتوى الرئيسي",
      brandHomeLabel: "الصفحة الرئيسية لمنصة LearnBridge",
      primaryNavigation: "التنقل الرئيسي",
      footerNavigation: "روابط التذييل",

      navHome: "الرئيسية",
      navResources: "المصادر",
      navAbout: "من نحن",
      navContact: "تواصل معنا",

      menu: "القائمة",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",

      switchToArabic: "التبديل إلى اللغة العربية",
      switchToEnglish: "التبديل إلى اللغة الإنجليزية",

      darkMode: "الوضع الداكن",
      switchToDarkMode: "التبديل إلى الوضع الداكن",
      switchToLightMode: "التبديل إلى الوضع الفاتح",

      whatsapp: "واتساب",
      explore: "استكشف",

      footerDescription:
        "نساعد المتعلمين على اكتشاف مصادر تعليمية واضحة وسهلة الوصول باللغتين الإنجليزية والعربية.",

      contactHeading: "تواصل معنا",
      contactDescription:
        "تواصل مع LearnBridge من خلال صفحة التواصل أو عبر واتساب.",
      contactWhatsApp: "التواصل عبر واتساب",

      followHeading: "تابعنا",
      socialPlaceholder:
        "ستتم إضافة روابط GitHub وLinkedIn قبل نشر المنصة.",

      rightsReserved: "جميع الحقوق محفوظة.",
      backToTop: "العودة إلى أعلى الصفحة"
    },

    home: {
      eyebrow: "تعلّم بوضوح، وتطوّر بثقة.",

      heroTitle:
        "اكتشف مصادر تعليمية تناسب رحلتك في التعلّم",

      heroDescription:
        "استكشف مصادر منظّمة بعناية في البرمجة وتطوير الويب وعلم البيانات والذكاء الاصطناعي والرياضيات والتطوير المهني، باللغتين الإنجليزية والعربية.",

      browseResources: "تصفّح المصادر",
      learnMore: "تعرّف إلى LearnBridge",

      highlightsLabel: "مميّزات المنصة",
      highlightBilingual: "الإنجليزية والعربية",
      highlightResponsive: "متوافقة مع الهاتف",
      highlightAccessible: "تعلّم سهل الوصول",

      heroPreviewLabel:
        "معاينة لتجربة المصادر التعليمية في LearnBridge",

      previewHeading: "لوحة التعلّم الخاصة بك",
      previewLevel: "مبتدئ",
      weeklyProgress: "تقدّم التعلّم الأسبوعي",
      previewResourceTitle: "مقدمة في HTML",
      previewResourceMeta: "درس تطبيقي · 45 دقيقة",
      previewCategories: "فئات",
      previewResources: "مصادر",
      previewLanguages: "لغات",

      categoriesEyebrow: "استكشف حسب المجال",
      categoriesTitle: "اختر مجالاً للتعلّم",
      categoriesDescription:
        "ابدأ بالموضوع الذي يتناسب مع أهدافك وخبرتك واهتماماتك.",
      exploreCategory: "استكشف المصادر",

      featuredEyebrow: "نقاط بداية مقترحة",
      featuredTitle: "مصادر تعليمية مميّزة",
      featuredDescription:
        "ابدأ بمصادر عملية مختارة للمتعلمين الذين يعملون على بناء أساس قوي.",
      viewAllResources: "عرض جميع المصادر",
      viewResource: "عرض المصدر",

      howItWorksEyebrow: "عملية تعلّم بسيطة",
      howItWorksTitle: "كيف تعمل LearnBridge؟",
      howItWorksDescription:
        "اعثر على مواد تعليمية مفيدة من دون التنقل بين مجموعة كبيرة من الروابط غير المرتبطة.",

      stepDiscoverTitle: "اكتشف",
      stepDiscoverDescription:
        "تصفّح الفئات أو ابحث عن موضوع يتناسب مع هدفك الحالي في التعلّم.",

      stepFilterTitle: "صفِّ النتائج",
      stepFilterDescription:
        "قلّل النتائج حسب المستوى أو نوع المصدر أو اللغة أو مدة التعلّم المقدّرة.",

      stepSaveTitle: "احفظ وتعلّم",
      stepSaveDescription:
        "احفظ المصادر المفيدة وعد إليها عندما تكون مستعداً لمتابعة التعلّم.",

      benefitsEyebrow: "مصممة حول احتياجات المتعلمين",
      benefitsTitle:
        "كيف يمكن للمتعلمين الاستفادة من LearnBridge؟",
      benefitsDescription:
        "خُطّط لكل جزء من المنصة لتسهيل فهم المصادر التعليمية والوصول إليها.",

      bilingualBenefitTitle: "وصول بلغتين",
      bilingualBenefitDescription:
        "انتقل بين الإنجليزية والعربية مع الحفاظ على تخطيط واضح وطبيعي للصفحات.",

      organizedBenefitTitle: "اكتشاف منظّم",
      organizedBenefitDescription:
        "يساعدك البحث والتصفية على الوصول إلى المصادر المناسبة بصورة أسرع.",

      accessibleBenefitTitle: "واجهة سهلة الوصول",
      accessibleBenefitDescription:
        "يساعد البناء الدلالي ودعم لوحة المفاتيح والتباين الواضح ومؤشرات التركيز على تحسين الوصول.",

      flexibleBenefitTitle: "تعلّم من أي مكان",
      flexibleBenefitDescription:
        "يعمل التصميم المتجاوب على الهواتف والأجهزة اللوحية وشاشات الحاسوب.",

      statisticsEyebrow: "نظرة عامة على المنصة",
      statisticsTitle: "فرص التعلّم بنظرة سريعة",
      statCategories: "فئات تعليمية",
      statResources: "مصادر أولية",
      statLanguages: "لغتان مدعومتان",
      statResponsive: "واجهة متجاوبة",

      newsletterEyebrow: "واصل التعلّم",
      newsletterTitle: "استقبل تحديثات التعلّم مستقبلاً",
      newsletterDescription:
        "انضم إلى القائمة البريدية التجريبية لتلقي إعلانات المصادر الجديدة بعد ربط هذه الميزة بخدمة حقيقية.",
      newsletterEmailLabel: "عنوان البريد الإلكتروني",
      newsletterPlaceholder: "أدخل عنوان بريدك الإلكتروني",
      subscribeButton: "اشتراك",
      newsletterNote:
        "هذا النموذج التجريبي لا يرسل بريدك الإلكتروني ولا يخزّنه حالياً.",

      whatsappEyebrow: "هل تحتاج إلى مساعدة؟",
      whatsappTitle:
        "استفسر عن المصادر التعليمية المتوفرة",
      whatsappDescription:
        "تواصل مع LearnBridge عبر واتساب للحصول على مساعدة في اختيار نقطة بداية مناسبة.",
      whatsappButton: "التواصل عبر واتساب"
    },

    categories: {
      webDevelopment: "تطوير الويب",
      webDevelopmentDescription:
        "تعلّم كيفية بناء المواقع الحديثة وتنسيقها وإضافة التفاعل إليها.",

      programming: "البرمجة",
      programmingDescription:
        "طوّر التفكير البرمجي وعزّز أساسيات حل المشكلات.",

      dataScience: "علم البيانات",
      dataScienceDescription:
        "استكشف تحليل البيانات وتصويرها والإحصاء ومبادئ تعلّم الآلة.",

      artificialIntelligence: "الذكاء الاصطناعي",
      artificialIntelligenceDescription:
        "افهم مفاهيم الذكاء الاصطناعي وأدواته وتطبيقاته واستخدامه المسؤول.",

      mathematics: "الرياضيات",
      mathematicsDescription:
        "حسّن فهمك للرياضيات من خلال شروحات واضحة وتمارين عملية.",

      careerDevelopment: "التطوير المهني",
      careerDevelopmentDescription:
        "طوّر معرض أعمالك وسيرتك الذاتية واستعدادك للمقابلات ومهاراتك المهنية."
    },

    resourceLabels: {
      beginner: "مبتدئ",
      intermediate: "متوسط",
      advanced: "متقدم",

      article: "مقال",
      video: "فيديو",
      tutorial: "درس تطبيقي",
      course: "دورة",
      documentation: "توثيق",
      exercise: "تمرين",

      english: "الإنجليزية",
      arabic: "العربية",
      bilingual: "الإنجليزية والعربية"
    },

    featured: {
      htmlTitle: "مقدمة في HTML",
      htmlDescription:
        "تعرّف إلى البنية الدلالية المستخدمة في بناء صفحات الويب الحديثة.",

      pythonTitle: "أساسيات البرمجة باستخدام Python",
      pythonDescription:
        "تعلّم المتغيرات والشروط والحلقات والدوال وأساسيات حل المشكلات.",

      aiTitle: "شرح مبسّط للذكاء الاصطناعي",
      aiDescription:
        "استكشف كيف تتعلّم أنظمة الذكاء الاصطناعي من البيانات وأين تُستخدم بمسؤولية.",

      duration45: "45 دقيقة",
      duration180: "3 ساعات",
      duration20: "20 دقيقة",

      languageEnglish: "الإنجليزية",
      languageBilingual: "الإنجليزية والعربية",
      languageArabic: "العربية"
    },

    resources: {
      eyebrow: "مكتبة المصادر",

      title:
        "اعثر على المصدر المناسب لهدفك التعليمي التالي",

      description:
        "ابحث عن المصادر التعليمية ونظّمها حسب المجال والمستوى والنوع واللغة ومدة التعلّم المقدّرة.",

      libraryEyebrow: "استكشف وحدّد النتائج",
      libraryTitle: "مكتبة المصادر التعليمية",

      libraryDescription:
        "استخدم أداة واحدة أو عدة أدوات معاً للوصول إلى المصادر التي تناسب احتياجاتك الحالية.",

      searchLabel: "البحث في المصادر",
      searchPlaceholder: "ابحث حسب العنوان أو الكلمة المفتاحية",

      categoryLabel: "المجال",
      allCategories: "جميع المجالات",

      difficultyLabel: "المستوى",
      allDifficulties: "جميع المستويات",

      typeLabel: "نوع المصدر",
      allTypes: "جميع الأنواع",

      languageLabel: "لغة المصدر",
      allLanguages: "جميع اللغات",

      sortLabel: "ترتيب المصادر",
      sortTitleAscending: "العنوان: تصاعدياً",
      sortTitleDescending: "العنوان: تنازلياً",
      sortDurationAscending: "الأقصر أولاً",
      sortDurationDescending: "الأطول أولاً",

      resetFilters: "إعادة ضبط عوامل التصفية",

      resultsCount: "تم العثور على {count} مصدراً",

      noResultsTitle: "لا توجد مصادر مطابقة",

      noResultsDescription:
        "جرّب عبارة بحث مختلفة أو أعد ضبط عامل واحد أو أكثر من عوامل التصفية.",

      categoryMeta: "المجال",
      difficultyMeta: "المستوى",
      languageMeta: "اللغة",
      durationMeta: "مدة التعلّم",

      durationValue: "{count} دقيقة",
      viewResource: "عرض المصدر",

      linkUnavailable:
        "لم تتم إضافة الرابط النهائي للمصدر «{title}» بعد."
    },

    about: {
      eyebrow: "عن المنصة",
      placeholderTitle:
        "يجب أن يكون التعلّم واضحاً وسهل الوصول",
      placeholderDescription:
        "ستتم إضافة الرسالة والرؤية وقصة المنصة والقيم وفلسفة التعلّم وفوائد المتعلمين وشرح دعم اللغتين في المرحلة 9.",
      contactButton: "تواصل مع LearnBridge"
    },

    contact: {
      eyebrow: "تواصل مع LearnBridge",
      placeholderTitle: "يسعدنا أن نتلقى رسالتك",
      placeholderDescription:
        "ستتم إضافة نموذج التواصل ثنائي اللغة ورسائل التحقق الخاصة بكل حقل في المرحلة 10.",

      formPlaceholderTitle: "منطقة نموذج التواصل",
      formPlaceholderDescription:
        "ستحتوي هذه المنطقة على حقول الاسم الكامل والبريد الإلكتروني والموضوع والرسالة وطريقة التواصل المفضّلة.",

      whatsappTitle: "التواصل عبر واتساب",
      whatsappPlaceholderDescription:
        "سيتم إنشاء رابط واتساب النهائي باللغتين باستخدام JavaScript بعد إعداد رقم الهاتف المؤقت."
    }
  }
};


/**
 * Returns true when a language is supported.
 *
 * @param {string} language
 * @returns {boolean}
 */
function isSupportedLanguage(language) {
  return Object.values(SUPPORTED_LANGUAGES).includes(
    language
  );
}


/**
 * Reads a nested value using a dotted key.
 *
 * Example:
 * getNestedValue(translations.en, "common.navHome")
 *
 * @param {object} source
 * @param {string} key
 * @returns {string | undefined}
 */
function getNestedValue(source, key) {
  return key
    .split(".")
    .reduce(function (currentValue, keyPart) {
      if (
        currentValue === undefined ||
        currentValue === null
      ) {
        return undefined;
      }

      return currentValue[keyPart];
    }, source);
}


/**
 * Reads the saved language safely.
 *
 * @returns {string | null}
 */
function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(
      LEARNBRIDGE_LANGUAGE_STORAGE_KEY
    );

    return isSupportedLanguage(savedLanguage)
      ? savedLanguage
      : null;
  } catch (error) {
    console.warn(
      "LearnBridge could not read the saved language.",
      error
    );

    return null;
  }
}


/**
 * Saves the selected language safely.
 *
 * @param {string} language
 */
function saveLanguage(language) {
  try {
    localStorage.setItem(
      LEARNBRIDGE_LANGUAGE_STORAGE_KEY,
      language
    );
  } catch (error) {
    console.warn(
      "LearnBridge could not save the language preference.",
      error
    );
  }
}


/**
 * Returns the currently active language.
 *
 * @returns {string}
 */
function getCurrentLanguage() {
  const documentLanguage =
    document.documentElement.lang;

  return isSupportedLanguage(documentLanguage)
    ? documentLanguage
    : SUPPORTED_LANGUAGES.ENGLISH;
}


/**
 * Returns a translation for the selected language.
 *
 * English is used as a fallback if an Arabic value
 * is missing.
 *
 * @param {string} key
 * @param {string} language
 * @returns {string}
 */
function translate(
  key,
  language = getCurrentLanguage()
) {
  const selectedTranslation = getNestedValue(
    translations[language],
    key
  );

  if (typeof selectedTranslation === "string") {
    return selectedTranslation;
  }

  const englishFallback = getNestedValue(
    translations.en,
    key
  );

  if (typeof englishFallback === "string") {
    console.warn(
      `Missing "${language}" translation for "${key}".`
    );

    return englishFallback;
  }

  console.warn(`Unknown translation key: "${key}".`);

  return key;
}


/**
 * Updates normal text content.
 *
 * @param {string} language
 */
function updateTextTranslations(language) {
  const translatedElements = document.querySelectorAll(
    "[data-i18n]"
  );

  translatedElements.forEach(function (element) {
    const key = element.dataset.i18n;

    element.textContent = translate(key, language);
  });
}


/**
 * Updates form placeholders.
 *
 * @param {string} language
 */
function updatePlaceholderTranslations(language) {
  const placeholderElements =
    document.querySelectorAll(
      "[data-i18n-placeholder]"
    );

  placeholderElements.forEach(function (element) {
    const key = element.dataset.i18nPlaceholder;

    element.setAttribute(
      "placeholder",
      translate(key, language)
    );
  });
}


/**
 * Updates accessible labels.
 *
 * @param {string} language
 */
function updateAriaLabelTranslations(language) {
  const labelledElements = document.querySelectorAll(
    "[data-i18n-aria-label]"
  );

  labelledElements.forEach(function (element) {
    const key = element.dataset.i18nAriaLabel;

    element.setAttribute(
      "aria-label",
      translate(key, language)
    );
  });
}


/**
 * Updates the browser-page title.
 *
 * @param {string} language
 */
function updatePageTitle(language) {
  const pageName = document.body.dataset.page;
  const titleKey = `pageTitles.${pageName}`;

  document.title = translate(titleKey, language);
}


/**
 * Updates the visible and accessible language button.
 *
 * @param {string} language
 */
function updateLanguageToggle(language) {
  const languageButton = document.querySelector(
    "[data-language-toggle]"
  );

  const languageLabel = document.querySelector(
    "[data-language-toggle-label]"
  );

  if (!languageButton || !languageLabel) {
    return;
  }

  const arabicIsActive =
    language === SUPPORTED_LANGUAGES.ARABIC;

  if (arabicIsActive) {
    languageLabel.textContent = "English";
    languageLabel.lang = "en";
    languageLabel.dir = "ltr";

    languageButton.setAttribute(
      "aria-label",
      translate(
        "common.switchToEnglish",
        language
      )
    );
  } else {
    languageLabel.textContent = "العربية";
    languageLabel.lang = "ar";
    languageLabel.dir = "rtl";

    languageButton.setAttribute(
      "aria-label",
      translate(
        "common.switchToArabic",
        language
      )
    );
  }
}


/**
 * Applies the selected language to the full document.
 *
 * @param {string} language
 */
function applyLanguage(language) {
  const safeLanguage = isSupportedLanguage(language)
    ? language
    : SUPPORTED_LANGUAGES.ENGLISH;

  const documentElement =
    document.documentElement;

  documentElement.lang = safeLanguage;
  documentElement.dir =
    safeLanguage === SUPPORTED_LANGUAGES.ARABIC
      ? "rtl"
      : "ltr";

  updateTextTranslations(safeLanguage);
  updatePlaceholderTranslations(safeLanguage);
  updateAriaLabelTranslations(safeLanguage);
  updatePageTitle(safeLanguage);
  updateLanguageToggle(safeLanguage);

  document.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: {
        language: safeLanguage
      }
    })
  );
}


/**
 * Selects and saves a language.
 *
 * @param {string} language
 */
function setLanguage(language) {
  if (!isSupportedLanguage(language)) {
    return;
  }

  saveLanguage(language);
  applyLanguage(language);
}


/**
 * Switches between English and Arabic.
 */
function toggleLanguage() {
  const currentLanguage = getCurrentLanguage();

  const nextLanguage =
    currentLanguage === SUPPORTED_LANGUAGES.ENGLISH
      ? SUPPORTED_LANGUAGES.ARABIC
      : SUPPORTED_LANGUAGES.ENGLISH;

  setLanguage(nextLanguage);
}


/**
 * Starts the language system.
 */
function initializeLanguageSystem() {
  const languageButton = document.querySelector(
    "[data-language-toggle]"
  );

  const initialLanguage =
    getSavedLanguage() ||
    getCurrentLanguage();

  applyLanguage(initialLanguage);

  if (languageButton) {
    languageButton.addEventListener(
      "click",
      toggleLanguage
    );
  }
}


/**
 * Makes selected translation features available
 * to other LearnBridge scripts.
 */
window.LearnBridgeI18n = Object.freeze({
  getCurrentLanguage,
  setLanguage,
  translate
});

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeLanguageSystem
  );
} else {
  initializeLanguageSystem();
}