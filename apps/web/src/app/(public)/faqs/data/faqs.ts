type FaqItem = {
  question: string
  answer: string
}

type FaqCategory = {
  id: string
  title: string
  faqs: FaqItem[]
}

export const faqData: FaqCategory[] = [
  {
    id: "general",
    title: "📌 General / Business-Oriented",
    faqs: [
      {
        question: "Can Edust scale with my growing organization?",
        answer:
          "Yes, Edust is built to support organizations of any size, from small coaching centers to large multi-branch institutions.",
      },
      {
        question: "Is Edust suitable for managing multiple branches or campuses?",
        answer:
          "Yes, you can create and manage separate organizational structures within one Edust account.",
      },
      {
        question: "Can we white-label Edust with our branding?",
        answer:
          "White-labeling is not yet available in the free version, but it’s planned for enterprise/custom plans.",
      },
      {
        question: "Does Edust support multiple languages?",
        answer: "Currently, English is supported. Multi-language support is in the roadmap.",
      },
      {
        question: "What is the pricing model for Edust?",
        answer: "Core features are free. Premium plans with advanced features will be offered in the future.",
      },
    ],
  },
  {
    id: "security",
    title: "🔐 Security & Privacy",
    faqs: [
      {
        question: "How does Edust protect our data?",
        answer:
          "We use HTTPS, secure authentication (JWT, OAuth), and RBAC to ensure your data is safe.",
      },
      {
        question: "Is our data encrypted?",
        answer: "Yes. All sensitive data is encrypted both in transit and at rest.",
      },
      {
        question: "Where is user data stored?",
        answer:
          "Data is stored securely in cloud databases hosted in trusted data centers (e.g., AWS, DigitalOcean).",
      },
      {
        question: "Can we request data deletion?",
        answer:
          "Yes, organization owners can request account and data deletion anytime.",
      },
      {
        question: "Does Edust comply with GDPR or other privacy laws?",
        answer:
          "We follow standard data protection principles and plan full GDPR compliance for future enterprise usage.",
      },
    ],
  },
  {
    id: "technical",
    title: "⚙️ Technical & Integration",
    faqs: [
      {
        question: "Does Edust have an API for integrations?",
        answer: "API access is in progress. Custom integration support is planned.",
      },
      {
        question: "Can Edust integrate with Google, Zoom, or other platforms?",
        answer:
          "OAuth-based login with Google is supported. More integrations are planned in upcoming versions.",
      },
      {
        question: "Is there mobile app support?",
        answer:
          "Not yet. A mobile-friendly web interface is available; native apps are planned.",
      },
      {
        question: "What is the uptime and reliability of Edust?",
        answer:
          "Edust is hosted on reliable cloud infrastructure with 99.9% uptime goals.",
      },
      {
        question: "Can we migrate from another platform to Edust?",
        answer:
          "Yes. You can import students, teachers, and data using CSV or API (in development).",
      },
    ],
  },
  {
    id: "features",
    title: "🧑‍🏫 Features & Usage",
    faqs: [
      {
        question: "Can we manage different roles like teacher, student, and admin?",
        answer:
          "Yes, Edust includes role-based access control (RBAC) for flexible user management.",
      },
      {
        question: "How are permissions and access controlled?",
        answer:
          "Roles are assigned to users, and permissions are managed per module (students, quizzes, etc.).",
      },
      {
        question: "Is there a reporting or analytics dashboard?",
        answer:
          "Basic insights are available. Full analytics dashboards are coming in future versions.",
      },
      {
        question: "Can we assign and evaluate quizzes?",
        answer:
          "Yes. Edust v0.4.0+ includes a quiz system with question creation, assignment, and evaluation.",
      },
      {
        question: "Does Edust support real-time chat or communication?",
        answer:
          "Yes. Real-time support and chat features are integrated via WebSocket (Socket.IO).",
      },
    ],
  },
]
