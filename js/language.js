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

      languageChangedToEnglish:
        "Language changed to English.",

      languageChangedToArabic:
        "Language changed to Arabic.",

      darkMode: "Dark mode",
      lightMode: "Light mode",

      switchToDarkMode: "Switch to dark mode",
      switchToLightMode: "Switch to light mode",

      whatsappPrefilledMessage:
        "Hello, I would like to ask about the educational resources available on LearnBridge.",

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
      newsletterInvalid:
        "Please enter a valid email address.",
      newsletterSuccess:
        "Your email is valid. This is a demonstration, so it was not subscribed or stored.",

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
        "A final link has not been added for “{title}” yet.",

      bookmarkFilterLabel: "Bookmarks",
      bookmarkedOnly: "Show bookmarked only",
      bookmark: "Save",
      bookmarked: "Saved",

      addBookmarkLabel:
        "Save “{title}” to bookmarks",
      removeBookmarkLabel:
        "Remove “{title}” from bookmarks",
      bookmarkAdded:
        "“{title}” was saved to your bookmarks.",
      bookmarkRemoved:
        "“{title}” was removed from your bookmarks.",

      noBookmarksTitle:
        "No bookmarked resources yet",
      noBookmarksDescription:
        "Save a resource using its bookmark button and it will appear here."
    },

    about: {
      eyebrow: "About LearnBridge",

      title:
        "Making educational resources easier to discover and understand",

      description:
        "LearnBridge is designed to help learners explore useful educational resources through a clear, organized, bilingual, and accessible experience.",

      exploreResourcesButton: "Explore resources",
      contactButton: "Contact LearnBridge",

      storyEyebrow: "Our story",

      storyTitle:
        "Learning resources are everywhere. Finding the right one should not be difficult.",

      storyParagraphOne:
        "Learners often move between websites, videos, tutorials, and courses while trying to decide which resource matches their level and goals.",

      storyParagraphTwo:
        "LearnBridge was planned as a simple educational platform that organizes resources by subject, level, format, language, and learning time so learners can make clearer choices.",

      purposeTitle:
        "What LearnBridge is designed to do",

      purposeDiscover:
        "Help learners discover relevant resources.",

      purposeOrganize:
        "Organize learning choices without unnecessary complexity.",

      purposeBilingual:
        "Support both English and Arabic learning experiences.",

      directionEyebrow: "Our direction",
      directionTitle: "Mission and vision",

      directionDescription:
        "LearnBridge focuses on clarity, accessibility, organization, and practical learning.",

      missionTitle: "Mission",

      missionDescription:
        "Help learners find understandable and relevant educational resources through an organized, responsive, and bilingual platform.",

      visionTitle: "Vision",

      visionDescription:
        "Create a learning experience where language, device, and information overload are less likely to become barriers to education.",

      audienceEyebrow: "Who it is for",

      audienceTitle:
        "LearnBridge is designed for different kinds of learners",

      audienceDescription:
        "The platform is intended for learners who want a clearer way to find useful educational material.",

      audienceStudentsTitle: "Students",

      audienceStudentsDescription:
        "Learners building academic and technical foundations alongside their studies.",

      audienceSelfLearnersTitle:
        "Self-directed learners",

      audienceSelfLearnersDescription:
        "People learning independently through online resources and practical exercises.",

      audienceBeginnersTitle:
        "Beginners and career changers",

      audienceBeginnersDescription:
        "Learners who need clear starting points before moving into more advanced material.",

      audienceBilingualTitle:
        "English and Arabic learners",

      audienceBilingualDescription:
        "Learners who benefit from navigating educational content in either English or Arabic.",

      valuesEyebrow: "What guides the platform",
      valuesTitle: "Core values",

      valuesDescription:
        "These principles guide how LearnBridge content and interfaces are organized.",

      valueClarityTitle: "Clarity",

      valueClarityDescription:
        "Information should be understandable, organized, and easy to scan.",

      valueAccessibilityTitle: "Accessibility",

      valueAccessibilityDescription:
        "Learning interfaces should work for different devices, interaction methods, and language directions.",

      valuePracticalityTitle: "Practicality",

      valuePracticalityDescription:
        "Resources should help learners take useful next steps rather than only consume information.",

      valueRespectTitle:
        "Respect for the learner",

      valueRespectDescription:
        "The interface should reduce unnecessary complexity and allow learners to make their own informed choices.",

      philosophyEyebrow: "Learning philosophy",

      philosophyTitle:
        "Good learning starts with the right next step",

      philosophyDescription:
        "LearnBridge does not try to overwhelm learners with every possible resource. The goal is to help them identify useful material, understand what it offers, and continue learning deliberately.",

      philosophyDiscoverTitle: "Discover",

      philosophyDiscoverDescription:
        "Find a subject or resource relevant to your goal.",

      philosophyChooseTitle: "Choose",

      philosophyChooseDescription:
        "Compare level, type, language, and learning time.",

      philosophyContinueTitle: "Continue",

      philosophyContinueDescription:
        "Save useful material and return when you are ready.",

      bilingualEyebrow: "English and Arabic",

      bilingualTitle:
        "Why LearnBridge supports two languages",

      bilingualParagraphOne:
        "Many technical and educational resources are available in English, while some learners understand difficult concepts more comfortably in Arabic.",

      bilingualParagraphTwo:
        "LearnBridge therefore treats bilingual support as part of the interface architecture rather than as an automatic translation added after the website is finished.",

      bilingualBenefitTranslation:
        "Human-written English and Arabic interface text.",

      bilingualBenefitDirection:
        "Correct LTR and RTL document direction.",

      bilingualBenefitPersistence:
        "Saved language preference across pages.",

      benefitsEyebrow: "Benefits for learners",

      benefitsTitle:
        "A learning library designed to reduce friction",

      benefitDiscoveryTitle: "Easier discovery",

      benefitDiscoveryDescription:
        "Search and filters narrow a large collection into more useful choices.",

      benefitDecisionTitle: "Better decisions",

      benefitDecisionDescription:
        "Difficulty, format, language, and learning-time information help learners compare resources.",

      benefitBookmarksTitle: "Saved learning",

      benefitBookmarksDescription:
        "Bookmarks let learners keep useful resources available for later.",

      benefitResponsiveTitle: "Flexible access",

      benefitResponsiveDescription:
        "Responsive layouts make the platform usable across phones, tablets, laptops, and desktops.",

      ctaEyebrow: "Start exploring",

      ctaTitle:
        "Find a useful resource for your next learning goal",

      ctaDescription:
        "Browse the resource library or contact LearnBridge if you need help finding a suitable starting point.",

      ctaResourcesButton: "Browse resources",

      ctaWhatsAppButton:
        "Contact through WhatsApp"
    },

    contact: {
      eyebrow: "Contact LearnBridge",

      title:
        "Have a question about the learning resources?",

      description:
        "Send a message using the form or review the available contact options below.",

      infoEyebrow: "Before you send a message",
      infoTitle: "How LearnBridge can help",

      infoDescription:
        "Contact LearnBridge for general questions about the platform, educational-resource categories, or where to begin.",

      questionTitle: "Resource questions",

      questionDescription:
        "Ask about available categories, levels, and types of learning resources.",

      languageHelpTitle: "Language support",

      languageHelpDescription:
        "Ask about using LearnBridge in English or Arabic.",

      startingPointTitle: "Finding a starting point",

      startingPointDescription:
        "Explain what you want to learn and ask where to begin.",

      demoNoticeTitle: "Portfolio demonstration",

      demoNoticeDescription:
        "This version demonstrates front-end form validation. Messages are not transmitted to a server or email address.",

      formEyebrow: "Send a message",
      formTitle: "Contact form",

      formDescription:
        "Complete the fields below. Required fields are marked with an asterisk.",

      nameLabel: "Full name",
      namePlaceholder: "Enter your full name",

      emailLabel: "Email address",
      emailPlaceholder: "Enter your email address",

      subjectLabel: "Subject",

      subjectPlaceholder:
        "What would you like to ask about?",

      messageLabel: "Message",
      messagePlaceholder: "Write your message",

      messageNote:
        "Please provide at least 10 characters.",

      preferredMethodLabel:
        "Preferred contact method",

      methodEmail: "Email",
      methodWhatsApp: "WhatsApp",

      submitButton: "Send message",
      clearButton: "Clear form",

      whatsappEyebrow: "WhatsApp contact",
      whatsappTitle: "Prefer WhatsApp?",

      whatsappDescription:
        "LearnBridge will support a language-specific WhatsApp click-to-chat message. The final phone number will be configured before publication.",

      whatsappNumberLabel:
        "Placeholder WhatsApp number",

      whatsappNumberNote:
        "Placeholder only — no real number is connected yet.",

      technicalTitle:
        "Why does this form not send real email yet?",

      technicalDescription:
        "HTML, CSS, and browser JavaScript can validate this form, but safely sending email requires a backend, serverless function, form service, or external API. LearnBridge v1 intentionally remains a front-end-only project.",

      errors: {
        nameRequired:
          "Please enter your name.",

        nameTooShort:
          "Your name must contain at least 2 characters.",

        emailRequired:
          "Please enter your email address.",

        emailInvalid:
          "Please enter a valid email address.",

        subjectRequired:
          "Please enter a subject.",

        subjectTooShort:
          "The subject must contain at least 4 characters.",

        messageRequired:
          "Please enter your message.",

        messageTooShort:
          "Your message must contain at least 10 characters.",

        preferredContactRequired:
          "Please select a preferred contact method."
      },

      successMessage:
        "Your form is valid. This is a front-end demonstration, so no message was actually sent."
    },
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

      languageChangedToEnglish:
        "تم تغيير اللغة إلى الإنجليزية.",

      languageChangedToArabic:
        "تم تغيير اللغة إلى العربية.",

      darkMode: "الوضع الداكن",
      lightMode: "الوضع الفاتح",

      switchToDarkMode: "التبديل إلى الوضع الداكن",
      switchToLightMode: "التبديل إلى الوضع الفاتح",

whatsappPrefilledMessage:
  "مرحباً، أود الاستفسار عن المصادر التعليمية المتوفرة على منصة LearnBridge.",

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
      newsletterInvalid:
        "يرجى إدخال بريد إلكتروني صالح.",
      newsletterSuccess:
        "البريد الإلكتروني صالح. هذا نموذج تجريبي، لذلك لم يتم الاشتراك أو حفظ البريد.",

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
        "لم تتم إضافة الرابط النهائي للمصدر «{title}» بعد.",

        bookmarkFilterLabel: "الإشارات المرجعية",
        bookmarkedOnly: "عرض المصادر المحفوظة فقط",
        bookmark: "حفظ",
        bookmarked: "محفوظ",

        addBookmarkLabel:
          "حفظ «{title}» في الإشارات المرجعية",
        removeBookmarkLabel:
          "إزالة «{title}» من الإشارات المرجعية",
        bookmarkAdded:
          "تم حفظ «{title}» في الإشارات المرجعية.",
        bookmarkRemoved:
          "تمت إزالة «{title}» من الإشارات المرجعية.",

        noBookmarksTitle:
          "لا توجد مصادر محفوظة بعد",
        noBookmarksDescription:
          "احفظ أحد المصادر باستخدام زر الإشارة المرجعية وسيظهر هنا."
    },

    about: {
      eyebrow: "عن LearnBridge",

      title:
        "تسهيل اكتشاف المصادر التعليمية وفهمها",

      description:
        "صُممت LearnBridge لمساعدة المتعلمين على استكشاف مصادر تعليمية مفيدة من خلال تجربة واضحة ومنظمة وثنائية اللغة وسهلة الوصول.",

      exploreResourcesButton: "استكشف المصادر",
      contactButton: "تواصل مع LearnBridge",

      storyEyebrow: "قصتنا",

      storyTitle:
        "المصادر التعليمية موجودة في كل مكان، لكن العثور على المصدر المناسب لا يجب أن يكون صعباً.",

      storyParagraphOne:
        "غالباً ما يتنقل المتعلمون بين المواقع والفيديوهات والدروس والدورات أثناء محاولتهم تحديد المصدر الذي يتناسب مع مستواهم وأهدافهم.",

      storyParagraphTwo:
        "خُططت LearnBridge كمنصة تعليمية بسيطة تنظّم المصادر حسب المجال والمستوى والنوع واللغة ومدة التعلّم، لتساعد المتعلمين على اتخاذ خيارات أكثر وضوحاً.",

      purposeTitle:
        "ما الذي صُممت LearnBridge لتحقيقه؟",

      purposeDiscover:
        "مساعدة المتعلمين على اكتشاف المصادر المناسبة.",

      purposeOrganize:
        "تنظيم خيارات التعلّم من دون تعقيد غير ضروري.",

      purposeBilingual:
        "دعم تجربة تعلّم باللغتين الإنجليزية والعربية.",

      directionEyebrow: "توجهنا",
      directionTitle: "الرسالة والرؤية",

      directionDescription:
        "تركّز LearnBridge على الوضوح وسهولة الوصول والتنظيم والتعلّم العملي.",

      missionTitle: "الرسالة",

      missionDescription:
        "مساعدة المتعلمين على العثور على مصادر تعليمية واضحة وملائمة من خلال منصة منظمة ومتجاوبة وثنائية اللغة.",

      visionTitle: "الرؤية",

      visionDescription:
        "إنشاء تجربة تعلّم تقل فيها احتمالية أن تصبح اللغة أو نوع الجهاز أو كثرة المعلومات عائقاً أمام التعليم.",

      audienceEyebrow: "لمن صُممت المنصة؟",

      audienceTitle:
        "LearnBridge مصممة لأنواع مختلفة من المتعلمين",

      audienceDescription:
        "تستهدف المنصة المتعلمين الذين يريدون طريقة أكثر وضوحاً للوصول إلى مواد تعليمية مفيدة.",

      audienceStudentsTitle: "الطلاب",

      audienceStudentsDescription:
        "المتعلمون الذين يبنون أسساً أكاديمية وتقنية إلى جانب دراستهم.",

      audienceSelfLearnersTitle:
        "المتعلمون بشكل ذاتي",

      audienceSelfLearnersDescription:
        "الأشخاص الذين يتعلمون بصورة مستقلة من خلال المصادر الإلكترونية والتمارين العملية.",

      audienceBeginnersTitle:
        "المبتدئون ومن يغيّرون مسارهم المهني",

      audienceBeginnersDescription:
        "المتعلمون الذين يحتاجون إلى نقاط بداية واضحة قبل الانتقال إلى محتوى أكثر تقدماً.",

      audienceBilingualTitle:
        "المتعلمون بالإنجليزية والعربية",

      audienceBilingualDescription:
        "المتعلمون الذين يستفيدون من تصفح المحتوى التعليمي باللغة الإنجليزية أو العربية.",

      valuesEyebrow: "ما الذي يوجّه المنصة؟",
      valuesTitle: "القيم الأساسية",

      valuesDescription:
        "توجّه هذه المبادئ طريقة تنظيم محتوى LearnBridge وواجهاتها.",

      valueClarityTitle: "الوضوح",

      valueClarityDescription:
        "يجب أن تكون المعلومات مفهومة ومنظمة وسهلة التصفح.",

      valueAccessibilityTitle: "سهولة الوصول",

      valueAccessibilityDescription:
        "يجب أن تعمل واجهات التعلّم عبر الأجهزة المختلفة وطرق التفاعل واتجاهات اللغة المختلفة.",

      valuePracticalityTitle: "العملية",

      valuePracticalityDescription:
        "يجب أن تساعد المصادر المتعلم على اتخاذ خطوات مفيدة، لا أن تقتصر على استهلاك المعلومات.",

      valueRespectTitle: "احترام المتعلم",

      valueRespectDescription:
        "يجب أن تقلل الواجهة من التعقيد غير الضروري وتمنح المتعلمين القدرة على اتخاذ خياراتهم بوعي.",

      philosophyEyebrow: "فلسفة التعلّم",

      philosophyTitle:
        "التعلّم الجيد يبدأ بالخطوة التالية المناسبة",

      philosophyDescription:
        "لا تحاول LearnBridge إغراق المتعلم بكل المصادر الممكنة. الهدف هو مساعدته على تحديد المواد المفيدة وفهم ما تقدمه ومتابعة التعلّم بصورة واعية.",

      philosophyDiscoverTitle: "اكتشف",

      philosophyDiscoverDescription:
        "اعثر على مجال أو مصدر مرتبط بهدفك.",

      philosophyChooseTitle: "اختر",

      philosophyChooseDescription:
        "قارن المستوى والنوع واللغة ومدة التعلّم.",

      philosophyContinueTitle: "تابع",

      philosophyContinueDescription:
        "احفظ المصادر المفيدة وعد إليها عندما تكون مستعداً.",

      bilingualEyebrow: "الإنجليزية والعربية",

      bilingualTitle:
        "لماذا تدعم LearnBridge لغتين؟",

      bilingualParagraphOne:
        "تتوفر الكثير من المصادر التقنية والتعليمية باللغة الإنجليزية، بينما يجد بعض المتعلمين أن فهم المفاهيم الصعبة يكون أسهل باللغة العربية.",

      bilingualParagraphTwo:
        "لذلك تتعامل LearnBridge مع دعم اللغتين كجزء من بنية الواجهة، وليس كترجمة آلية تضاف بعد الانتهاء من الموقع.",

      bilingualBenefitTranslation:
        "نصوص واجهة مكتوبة مباشرة بالإنجليزية والعربية.",

      bilingualBenefitDirection:
        "دعم صحيح لاتجاهي LTR وRTL.",

      bilingualBenefitPersistence:
        "حفظ اللغة المختارة أثناء التنقل بين الصفحات.",

      benefitsEyebrow: "فوائد للمتعلمين",

      benefitsTitle:
        "مكتبة تعليمية مصممة لتقليل العوائق",

      benefitDiscoveryTitle: "اكتشاف أسهل",

      benefitDiscoveryDescription:
        "يساعد البحث والتصفية على تحويل مجموعة كبيرة من المصادر إلى خيارات أكثر فائدة.",

      benefitDecisionTitle: "قرارات أفضل",

      benefitDecisionDescription:
        "تساعد معلومات المستوى والنوع واللغة ومدة التعلّم على مقارنة المصادر.",

      benefitBookmarksTitle: "حفظ المصادر",

      benefitBookmarksDescription:
        "تتيح الإشارات المرجعية الاحتفاظ بالمصادر المفيدة للعودة إليها لاحقاً.",

      benefitResponsiveTitle: "وصول مرن",

      benefitResponsiveDescription:
        "تجعل التخطيطات المتجاوبة المنصة قابلة للاستخدام على الهواتف والأجهزة اللوحية والحواسيب.",

      ctaEyebrow: "ابدأ الاستكشاف",

      ctaTitle:
        "اعثر على مصدر مفيد لهدفك التعليمي التالي",

      ctaDescription:
        "تصفّح مكتبة المصادر أو تواصل مع LearnBridge إذا كنت تحتاج إلى المساعدة في اختيار نقطة بداية مناسبة.",

      ctaResourcesButton: "تصفّح المصادر",

      ctaWhatsAppButton:
        "التواصل عبر واتساب"
    },

    contact: {
      eyebrow: "تواصل مع LearnBridge",

      title:
        "هل لديك سؤال حول المصادر التعليمية؟",

      description:
        "أرسل رسالة باستخدام النموذج أو اطّلع على خيارات التواصل المتاحة أدناه.",

      infoEyebrow: "قبل إرسال رسالتك",
      infoTitle: "كيف يمكن لـ LearnBridge مساعدتك؟",

      infoDescription:
        "تواصل مع LearnBridge للاستفسارات العامة حول المنصة أو فئات المصادر التعليمية أو نقطة البداية المناسبة.",

      questionTitle: "أسئلة حول المصادر",

      questionDescription:
        "اسأل عن المجالات والمستويات وأنواع المصادر التعليمية المتوفرة.",

      languageHelpTitle: "دعم اللغة",

      languageHelpDescription:
        "استفسر عن استخدام LearnBridge باللغة الإنجليزية أو العربية.",

      startingPointTitle: "اختيار نقطة البداية",

      startingPointDescription:
        "اشرح ما تريد تعلّمه واسأل عن نقطة البداية المناسبة.",

      demoNoticeTitle: "نموذج تجريبي للمشروع",

      demoNoticeDescription:
        "يعرض هذا الإصدار التحقق من النموذج على الواجهة الأمامية فقط، ولا يتم إرسال الرسائل إلى خادم أو بريد إلكتروني.",

      formEyebrow: "أرسل رسالة",
      formTitle: "نموذج التواصل",

      formDescription:
        "أكمل الحقول أدناه. الحقول المطلوبة مميزة بعلامة النجمة.",

      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك الكامل",

      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",

      subjectLabel: "الموضوع",

      subjectPlaceholder:
        "ما الموضوع الذي تريد الاستفسار عنه؟",

      messageLabel: "الرسالة",
      messagePlaceholder: "اكتب رسالتك",

      messageNote:
        "يرجى كتابة 10 أحرف على الأقل.",

      preferredMethodLabel:
        "طريقة التواصل المفضلة",

      methodEmail: "البريد الإلكتروني",
      methodWhatsApp: "واتساب",

      submitButton: "إرسال الرسالة",
      clearButton: "مسح النموذج",

      whatsappEyebrow: "التواصل عبر واتساب",
      whatsappTitle: "هل تفضّل واتساب؟",

      whatsappDescription:
        "ستدعم LearnBridge رسالة واتساب جاهزة تتغير حسب اللغة. سيتم إعداد رقم الهاتف النهائي قبل نشر المشروع.",

      whatsappNumberLabel:
        "رقم واتساب تجريبي",

      whatsappNumberNote:
        "رقم تجريبي فقط — لم يتم ربط رقم حقيقي بعد.",

      technicalTitle:
        "لماذا لا يرسل هذا النموذج بريداً إلكترونياً حقيقياً بعد؟",

      technicalDescription:
        "يمكن لـ HTML وCSS وJavaScript في المتصفح التحقق من النموذج، لكن إرسال البريد الإلكتروني بأمان يحتاج إلى خادم أو دالة Serverless أو خدمة نماذج أو API خارجي. يبقى الإصدار الأول من LearnBridge مشروع واجهة أمامية فقط.",

      errors: {
        nameRequired:
          "يرجى إدخال اسمك.",

        nameTooShort:
          "يجب أن يحتوي الاسم على حرفين على الأقل.",

        emailRequired:
          "يرجى إدخال بريدك الإلكتروني.",

        emailInvalid:
          "يرجى إدخال بريد إلكتروني صالح.",

        subjectRequired:
          "يرجى إدخال موضوع الرسالة.",

        subjectTooShort:
          "يجب أن يحتوي الموضوع على 4 أحرف على الأقل.",

        messageRequired:
          "يرجى كتابة رسالتك.",

        messageTooShort:
          "يجب أن تحتوي الرسالة على 10 أحرف على الأقل.",

        preferredContactRequired:
          "يرجى اختيار طريقة التواصل المفضلة."
      },

      successMessage:
        "النموذج صالح. هذا نموذج تجريبي للواجهة الأمامية، لذلك لم يتم إرسال أي رسالة فعلياً."
    },
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
 * Returns the hidden live region used to announce
 * user-initiated language changes.
 *
 * @returns {HTMLElement}
 */
function getLanguageStatusRegion() {
  let statusRegion =
    document.querySelector(
      "[data-language-status]"
    );

  if (statusRegion) {
    return statusRegion;
  }

  statusRegion =
    document.createElement("div");

  statusRegion.className =
    "visually-hidden";

  statusRegion.dataset.languageStatus = "";

  statusRegion.setAttribute(
    "role",
    "status"
  );

  statusRegion.setAttribute(
    "aria-live",
    "polite"
  );

  statusRegion.setAttribute(
    "aria-atomic",
    "true"
  );

  document.body.append(statusRegion);

  return statusRegion;
}


/**
 * Announces a user-initiated language switch.
 *
 * @param {string} language
 */
function announceLanguageChange(language) {
  const statusRegion =
    getLanguageStatusRegion();

  const translationKey =
    language ===
    SUPPORTED_LANGUAGES.ARABIC
      ? "common.languageChangedToArabic"
      : "common.languageChangedToEnglish";

  statusRegion.textContent = "";

  window.setTimeout(
    function () {
      statusRegion.textContent =
        translate(
          translationKey,
          language
        );
    },
    0
  );
}


/**
 * Switches between English and Arabic.
 */
function toggleLanguage() {
  const currentLanguage =
    getCurrentLanguage();

  const nextLanguage =
    currentLanguage ===
    SUPPORTED_LANGUAGES.ENGLISH
      ? SUPPORTED_LANGUAGES.ARABIC
      : SUPPORTED_LANGUAGES.ENGLISH;

  setLanguage(nextLanguage);

  announceLanguageChange(
    nextLanguage
  );
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