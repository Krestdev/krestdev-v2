import Reveal from "@/components/reveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface Item {
    trigger: string;
    content: string;
}

interface ItemsProps {
    items: Item[];
}

export function AccordionComp({ items }: ItemsProps) {
    return (
        <Accordion type="single" collapsible className="max-w-7xl px-7 w-full flex flex-col gap-9 items-center justify-center">
            {
                items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="max-w-5xl w-full">
                        <AccordionTrigger className="w-full text-[20px] sm:text-[24px] h-[90px]">{item.trigger}</AccordionTrigger>
                        <AccordionContent className="w-full text-[18px]">{item.content}</AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
