"use client";

import { useState } from "react";

interface ItemProps {
  title: string;
  description: string;
}

const AccordionItem = ({ title, description }: ItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="p-3 outline outline-stone-300 rounded-md cursor-pointer flex flex-col gap-3"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <div className="flex flex-row justify-between w-full">
          <p>{title}</p>
          <span>{isOpen ? "/\\" : "\\/"}</span>
        </div>
        {isOpen && <div className="ml-5">{description}</div>}
      </div>
    </>
  );
};

const items: ItemProps[] = [
  { title: "Who was swallowed up by a giant fish?", description: "Jonah" },
  { title: "Who killed people with donkey's jaw?", description: "Samson" },
  { title: "Who split the sea?", description: "Moses" },
  {
    title: "Who raised up Lazarus from the dead?",
    description: "The Lord Jesus Christ",
  },
  { title: "Who was a 'weeping prophet'?", description: "Jeremiah" },
];

const Accordion = () => {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
