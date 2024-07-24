import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  const accordionItems = [
    {
      id: 1,
      accordionTitle: "How easy is to setup Pets?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 2,
      accordionTitle: "Can i integrate Pets with other platforms?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 3,
      accordionTitle: "How often do you add new content?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 4,
      accordionTitle: "What your refund policy?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 5,
      accordionTitle: "Do you have corporate plans?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
    {
      id: 6,
      accordionTitle: "Can i upgrade my plan?",
      accordionContent:
        "Alguma explicação sobre o título acima vai ser colocada aqui.",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {accordionItems.map((accordion, index) => (
        <Accordion
          type="single"
          key={index}
          collapsible
          className="w-full justify-stretch flex"
        >
          <AccordionItem value="item-1" className="flex flex-col justify-center">
            <AccordionTrigger className=" gap-5 font-bold xl:text-xl">
              {accordion.accordionTitle}
            </AccordionTrigger>
            <AccordionContent className="font-semibold text-base xl:text-lg">
              {accordion.accordionContent}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
