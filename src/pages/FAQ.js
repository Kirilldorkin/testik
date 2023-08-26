import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/faq.png";
import Accordion from "../components/Accordion";

const FAQ = () => {
  const accordionItems = [
    {
      title: "Item 1",
      content: "Content for Item 1",
    },
    {
      title: "Item 2",
      content: "Content for Item 2",
    },
    // You can add more items here
  ];
  return (
    <>
      <PageBanner
        backgroundImage={backgroundImg}
        title="Frequently Asked Questions"
      />
      <div className="container">
        <Accordion items={accordionItems} />
      </div>
    </>
  );
};

export default FAQ;
