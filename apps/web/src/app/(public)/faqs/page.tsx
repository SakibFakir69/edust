"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Typography,
} from "@edust/ui"
import { ChevronDown } from "lucide-react"

import { FaqsHorizontalMenu } from "./components/faqs-horizontal-menu"

const faqs = [
  {
    question: "What is Edust?",
    answer:
      "Edust is an all-in-one education system platform for students, teachers, organization and much more.",
  },
  {
    question: "Who can use Edust?",
    answer:
      "Any type of users for learning not only student, teacher or organization. But also Schools, coaching centers, online educators, and training organizations of any size.",
  },
  {
    question: "Why do you use Edust?",
    answer:
      "To simplify student management, enable online collaboration, and manage educational activities in one place.",
  },
  {
    question: "What are the benefits of using Edust?",
    answer:
      "Time-saving tools, management system, quiz system, flexible role control, and a clean interface for managing everything.",
  },
  {
    question: "What makes Edust different from other education platforms?",
    answer:
      "Edust focuses on organization-based management, built-in role permissions, in future real-time support, and easy onboarding.",
  },
  {
    question: "Do I need technical skills to use Edust?",
    answer:
      "No. It’s designed to be user-friendly and works out-of-the-box for non-technical users.",
  },
  {
    question: "Can Edust help me manage both students and teachers?",
    answer:
      "Yes. You can create roles, assign permissions, and manage both students and teachers efficiently.",
  },
  {
    question: "Is Edust suitable for small institutions or coaching centers?",
    answer:
      "Yes. It’s lightweight, scalable, and perfect for small teams or growing educational businesses.",
  },
  {
    question: "Can I track student progress with Edust?",
    answer:
      "Yes. Edust includes quiz tracking, role activity, and will include analytics in future updates.",
  },
  {
    question: "Is there a demo or trial version available?",
    answer:
      "You can use all core features for free after logging in. A full demo setup is also available on request.",
  },
  {
    question: "How fast can I set up my organization on Edust?",
    answer:
      "You can create your organization and add users within minutes after logging in.",
  },
  {
    question: "Can I customize Edust to meet my specific needs?",
    answer:
      "Yes. You can customize roles, content, and more — enterprise-level customizations are also planned.",
  },
  {
    question: "Is Edust safe and reliable for storing educational data?",
    answer:
      "Yes. We use secure authentication, HTTPS, and encrypted storage to keep your data protected.",
  },
]

const midIndex = Math.ceil(faqs.length / 2)
const leftColumn = faqs.slice(0, midIndex)
const rightColumn = faqs.slice(midIndex)

export default function Faqs() {
  return (
    <div className="p-12">
      <title>Faqs</title>
      <Typography variant="h1" className="mb-10 pb-5 text-center tracking-wide">
        Frequently Asked Questions
      </Typography>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {[leftColumn, rightColumn].map((columnFaqs, colIdx) => (
          <Accordion
            key={`accordion-column-${colIdx}`}
            type="single"
            collapsible
            className="mx-auto w-full max-w-2xl"
          >
            {columnFaqs.map((faq, index) => (
              <AccordionItem
                key={`question-${colIdx}-${index}`}
                value={`question-${colIdx}-${index}`}
                className="!border-b-1 border-gray-600 py-2"
              >
                <AccordionTrigger className="py-4 [&>svg:last-of-type]:hidden">
                  {faq.question}
                  <ChevronDown className="ml-auto h-4 w-4 cursor-pointer transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-balance py-4 font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
      <FaqsHorizontalMenu />
    </div>
  )
}
