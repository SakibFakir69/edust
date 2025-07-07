"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Typography } from "@edust/ui"
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, simply browse our course catalog, select a course, and click the 'Enroll Now' button. You may need to create an account if you haven't already.",
  },
  {
    question: "Are certificates provided after course completion?",
    answer:
      "Yes, you will receive a digital certificate once you complete all course modules and pass the final assessment.",
  },
  {
    question: "Can I access the course content after completion?",
    answer:
      "Absolutely! Once enrolled, you get lifetime access to all course materials, including future updates.",
  },
  {
    question: "How can I contact the instructor?",
    answer:
      "Each course has a dedicated Q&A section. You can also message the instructor directly through your dashboard.",
  },
]

export default function Faqs() {
  return (
    <div className="p-12">
      <title>Faqs</title>
      <Typography variant="h1" className="text-center mb-10 tracking-wide">Frequently Asked Questions</Typography>
      {faqs.map((faq, index) => (
            <Accordion key={`accordian-${index}`} type="single" collapsible className="mx-auto w-full max-w-2xl" defaultValue={`accordian-${index}`}>
              <AccordionItem value={`question-${index}`} className="border-gray-600 !border-b-1 py-2">
                <AccordionTrigger className="py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col text-balance py-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
  )
}
