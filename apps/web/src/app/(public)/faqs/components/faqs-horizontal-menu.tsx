import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Tabs, TabsContent, TabsList, TabsTrigger } from "@edust/ui"

import { faqData } from "../data/faqs";
import { ChevronDown } from "lucide-react";

export const FaqsHorizontalMenu = () => {

    return(
        <div className="my-10 w-full">
           <Tabs defaultValue={faqData[0]?.id} className="mx-auto">
            <TabsList className="mx-auto mb-5 gap-4 !bg-transparent p-0 py-7 border-0 rounded-none border-b-1 !border-gray-600">
            {faqData.map((category) => (
                <TabsTrigger
                key={category.id}
                value={category.id}
                className="p-0 m-0 !bg-transparent border-none rounded-none text-sm font-medium text-foreground opacity-60 hover:opacity-80 cursor-pointer data-[state=active]:opacity-100"
                >
                {category.title}
                </TabsTrigger>
            ))}
            </TabsList>
            <div className="m-auto w-full max-w-2xl">
                {faqData?.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                    <Accordion type="single" collapsible className="text-left">
                        {category?.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-gray-600 !border-b-1 py-2">
                            <AccordionTrigger className="py-4 [&>svg:last-of-type]:hidden">
                                {faq.question}
                                <ChevronDown
                                    className="ml-auto h-4 w-4 transition-transform duration-200 cursor-pointer"
                                />
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col text-balance font-normal py-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                    </TabsContent>
                ))}
                </div>        
            </Tabs>
        </div>
    )
}