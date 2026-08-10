"use strict";

window.learnBridgeResources = Object.freeze([
  {
    id: 1,
    title: {
      en: "Introduction to HTML",
      ar: "مقدمة في HTML"
    },
    description: {
      en: "Learn how semantic HTML elements create the structure of modern web pages.",
      ar: "تعلّم كيف تنشئ عناصر HTML الدلالية بنية صفحات الويب الحديثة."
    },
    keywords: {
      en: ["html", "semantic", "web page", "elements", "structure"],
      ar: ["html", "دلالي", "صفحة ويب", "عناصر", "بنية"]
    },
    category: "web-development",
    difficulty: "beginner",
    type: "tutorial",
    language: "en",
    duration: 45,
    icon: "HTML",
    url: ""
  },
  {
    id: 2,
    title: {
      en: "CSS Flexbox and Grid Layouts",
      ar: "تخطيطات CSS باستخدام Flexbox وGrid"
    },
    description: {
      en: "Understand when to use Flexbox and CSS Grid to build responsive layouts.",
      ar: "افهم متى تستخدم Flexbox وCSS Grid لبناء تخطيطات متجاوبة."
    },
    keywords: {
      en: ["css", "flexbox", "grid", "layout", "responsive"],
      ar: ["css", "فليكس بوكس", "غريد", "تخطيط", "متجاوب"]
    },
    category: "web-development",
    difficulty: "intermediate",
    type: "documentation",
    language: "bilingual",
    duration: 90,
    icon: "CSS",
    url: ""
  },
  {
    id: 3,
    title: {
      en: "JavaScript DOM Fundamentals",
      ar: "أساسيات DOM باستخدام JavaScript"
    },
    description: {
      en: "Select page elements, update content, and respond to browser events.",
      ar: "حدّد عناصر الصفحة وحدّث المحتوى واستجب لأحداث المتصفح."
    },
    keywords: {
      en: ["javascript", "dom", "events", "selectors", "browser"],
      ar: ["جافاسكريبت", "dom", "أحداث", "محددات", "متصفح"]
    },
    category: "programming",
    difficulty: "beginner",
    type: "tutorial",
    language: "en",
    duration: 80,
    icon: "JS",
    url: ""
  },
  {
    id: 4,
    title: {
      en: "Algorithmic Problem-Solving Practice",
      ar: "تدريبات على حل المشكلات الخوارزمية"
    },
    description: {
      en: "Practice breaking programming problems into smaller logical steps.",
      ar: "تدرّب على تقسيم المشكلات البرمجية إلى خطوات منطقية أصغر."
    },
    keywords: {
      en: ["algorithm", "logic", "problem solving", "practice", "coding"],
      ar: ["خوارزمية", "منطق", "حل المشكلات", "تدريب", "برمجة"]
    },
    category: "programming",
    difficulty: "intermediate",
    type: "exercise",
    language: "bilingual",
    duration: 75,
    icon: "{ }",
    url: ""
  },
  {
    id: 5,
    title: {
      en: "Data Analysis with Pandas",
      ar: "تحليل البيانات باستخدام Pandas"
    },
    description: {
      en: "Clean, transform, summarize, and inspect tabular data with Python.",
      ar: "نظّف البيانات الجدولية وحوّلها ولخّصها وافحصها باستخدام Python."
    },
    keywords: {
      en: ["pandas", "python", "data analysis", "dataframe", "cleaning"],
      ar: ["pandas", "بايثون", "تحليل البيانات", "إطار البيانات", "تنظيف"]
    },
    category: "data-science",
    difficulty: "intermediate",
    type: "course",
    language: "en",
    duration: 150,
    icon: "PD",
    url: ""
  },
  {
    id: 6,
    title: {
      en: "Data Visualization Principles",
      ar: "مبادئ تصوير البيانات"
    },
    description: {
      en: "Learn how to choose clear charts and communicate data accurately.",
      ar: "تعلّم كيفية اختيار الرسوم الواضحة وعرض البيانات بدقة."
    },
    keywords: {
      en: ["visualization", "charts", "graphs", "data", "communication"],
      ar: ["تصوير البيانات", "رسوم بيانية", "مخططات", "بيانات", "تواصل"]
    },
    category: "data-science",
    difficulty: "beginner",
    type: "video",
    language: "ar",
    duration: 35,
    icon: "DV",
    url: ""
  },
  {
    id: 7,
    title: {
      en: "Evaluating Machine-Learning Models",
      ar: "تقييم نماذج تعلّم الآلة"
    },
    description: {
      en: "Compare models using suitable metrics and avoid misleading conclusions.",
      ar: "قارن النماذج باستخدام مقاييس مناسبة وتجنّب الاستنتاجات المضللة."
    },
    keywords: {
      en: ["machine learning", "evaluation", "metrics", "accuracy", "model"],
      ar: ["تعلّم الآلة", "تقييم", "مقاييس", "دقة", "نموذج"]
    },
    category: "artificial-intelligence",
    difficulty: "advanced",
    type: "tutorial",
    language: "en",
    duration: 110,
    icon: "ML",
    url: ""
  },
  {
    id: 8,
    title: {
      en: "Responsible AI and Algorithmic Bias",
      ar: "الذكاء الاصطناعي المسؤول والتحيّز الخوارزمي"
    },
    description: {
      en: "Explore fairness, transparency, privacy, and bias in AI systems.",
      ar: "استكشف العدالة والشفافية والخصوصية والتحيّز في أنظمة الذكاء الاصطناعي."
    },
    keywords: {
      en: ["responsible ai", "bias", "fairness", "ethics", "privacy"],
      ar: ["ذكاء اصطناعي مسؤول", "تحيز", "عدالة", "أخلاقيات", "خصوصية"]
    },
    category: "artificial-intelligence",
    difficulty: "intermediate",
    type: "article",
    language: "bilingual",
    duration: 30,
    icon: "AI",
    url: ""
  },
  {
    id: 9,
    title: {
      en: "Algebra Refresher for Learners",
      ar: "مراجعة الجبر للمتعلمين"
    },
    description: {
      en: "Review equations, functions, variables, and essential algebraic reasoning.",
      ar: "راجع المعادلات والدوال والمتغيرات وأساسيات التفكير الجبري."
    },
    keywords: {
      en: ["algebra", "equations", "functions", "variables", "mathematics"],
      ar: ["جبر", "معادلات", "دوال", "متغيرات", "رياضيات"]
    },
    category: "mathematics",
    difficulty: "beginner",
    type: "course",
    language: "ar",
    duration: 140,
    icon: "X",
    url: ""
  },
  {
    id: 10,
    title: {
      en: "Probability and Statistics Exercises",
      ar: "تمارين الاحتمالات والإحصاء"
    },
    description: {
      en: "Practice probability, distributions, averages, and interpreting statistical results.",
      ar: "تدرّب على الاحتمالات والتوزيعات والمتوسطات وتفسير النتائج الإحصائية."
    },
    keywords: {
      en: ["probability", "statistics", "distribution", "average", "exercise"],
      ar: ["احتمالات", "إحصاء", "توزيع", "متوسط", "تمارين"]
    },
    category: "mathematics",
    difficulty: "advanced",
    type: "exercise",
    language: "bilingual",
    duration: 60,
    icon: "∑",
    url: ""
  },
  {
    id: 11,
    title: {
      en: "Build a Technical Portfolio",
      ar: "ابنِ معرض أعمال تقنياً"
    },
    description: {
      en: "Present projects, skills, technical decisions, and measurable outcomes professionally.",
      ar: "اعرض المشاريع والمهارات والقرارات التقنية والنتائج القابلة للقياس بصورة مهنية."
    },
    keywords: {
      en: ["portfolio", "github", "projects", "career", "recruiter"],
      ar: ["معرض أعمال", "غيت هب", "مشاريع", "مسار مهني", "توظيف"]
    },
    category: "career-development",
    difficulty: "beginner",
    type: "article",
    language: "en",
    duration: 50,
    icon: "CV",
    url: ""
  },
  {
    id: 12,
    title: {
      en: "Junior Developer Interview Practice",
      ar: "التدرّب على مقابلات المطورين المبتدئين"
    },
    description: {
      en: "Prepare concise explanations for projects, coding decisions, and common interview questions.",
      ar: "حضّر شروحات موجزة للمشاريع والقرارات البرمجية وأسئلة المقابلات الشائعة."
    },
    keywords: {
      en: ["interview", "developer", "questions", "career", "communication"],
      ar: ["مقابلة", "مطور", "أسئلة", "مسار مهني", "تواصل"]
    },
    category: "career-development",
    difficulty: "intermediate",
    type: "video",
    language: "bilingual",
    duration: 40,
    icon: "INT",
    url: ""
  }
]);