import React from "react";
import AccordionItem from "./AccordionItem";
import InnerAccordionItem from "./InnerAccordionItem";

const Accordion = () => {
  return (
    <div className="accordion">
      <AccordionItem title="Trading Platform">
        <InnerAccordionItem text="Should I install software?">
          No, RingoTrade is a web-based trading platform, meaning you can login
          to your account and trade on any device that has an internet
          connection.
        </InnerAccordionItem>
        <InnerAccordionItem text="Where can I view my transaction history?">
          You can view your transaction history in the "Transaction History"
          section of your account. All your past trades and operations will be
          displayed there.
        </InnerAccordionItem>
        <InnerAccordionItem text="What is the time shown on this site?">
          The time shown on the site corresponds to the server time of the
          platform. It might differ from your local time depending on the time
          zone.
        </InnerAccordionItem>
        <InnerAccordionItem text="What is an Underlying Asset?">
          An Underlying Asset is the asset on which a derivative (e.g., an
          option or a contract for difference) is based. For example, in
          financial instruments, stocks can be underlying assets for options.
        </InnerAccordionItem>
      </AccordionItem>

      <AccordionItem title="Deposits and Funds Withdrawal">
        <InnerAccordionItem text="How do I deposit funds?">
          You can deposit funds by using the available payment methods in the
          "Deposits" section. This usually includes credit cards, e-wallets, and
          bank transfers.
        </InnerAccordionItem>
        <InnerAccordionItem text="What is the minimum deposit amount?">
          The minimum deposit amount is specified in the "Deposits" section. It
          can vary depending on the chosen payment method.
        </InnerAccordionItem>
        <InnerAccordionItem text="How long does a withdrawal take?">
          The processing time for withdrawals depends on the chosen withdrawal
          method and internal platform procedures. Typically, it takes from a
          few hours to a few days.
        </InnerAccordionItem>
        <InnerAccordionItem text="Are there any withdrawal fees?">
          Information about withdrawal fees can be found in the "Withdrawal
          Fees" section on the platform's website.
        </InnerAccordionItem>
      </AccordionItem>

      <AccordionItem title="Trading">
        <InnerAccordionItem text="How do I place a trade?">
          To place a trade, go to the "Trading" section, select an asset,
          determine the trade volume, and choose the order type (e.g., market or
          limit). After confirmation, the trade will be executed.
        </InnerAccordionItem>
        <InnerAccordionItem text="What are the available trade types?">
          The platform supports various order types, such as market orders
          (trading at the current price) and limit orders (trading at a specific
          price).
        </InnerAccordionItem>
        <InnerAccordionItem text="How can I set a stop-loss or take-profit level?">
          You can set stop-loss (loss-limiting) and take-profit (profit-booking)
          levels when placing an order. These levels will automatically close
          the trade when the specified price values are reached.
        </InnerAccordionItem>
        <InnerAccordionItem text="Can I trade on weekends?">
          The ability to trade on weekends depends on the type of assets and
          market operating hours. Information about weekend trading availability
          can be found on the platform's website.
        </InnerAccordionItem>
      </AccordionItem>

      <AccordionItem title="Support">
        <InnerAccordionItem text="How can I contact customer support?">
          You can reach out to customer support through the "Customer Support"
          section on the website. Available contact methods include email,
          online chat, or phone.
        </InnerAccordionItem>
        <InnerAccordionItem text="What information should I provide when seeking support?">
          When contacting support, provide your personal details and a detailed
          description of the issue or question. The more information you
          provide, the quicker they can assist you.
        </InnerAccordionItem>
        <InnerAccordionItem text="Is customer support available 24/7?">
          Support availability varies and is typically indicated on the
          platform's website. Some platforms offer 24/7 support, while others
          may have specific working hours.
        </InnerAccordionItem>
        <InnerAccordionItem text="Can I get assistance with technical issues?">
          Yes, customer support can help you with technical issues related to
          account access, platform usage, and trading tools.
        </InnerAccordionItem>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
