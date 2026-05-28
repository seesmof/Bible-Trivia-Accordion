import Accordion from "@/components/Accordion";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto w-full p-3 md:mt-5">
        <header className="mb-7">
          <h1 className="text-3xl md:text-5xl font-black">Bible Questions</h1>
          <p className="text-lg text-stone-700 mt-3 md:mt-5">
            Here are some cool Bible questions.
          </p>
        </header>
        <Accordion />
      </div>
    </div>
  );
};

export default Page;
