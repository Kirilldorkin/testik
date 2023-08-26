import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/client-agreement.png";
import AccordionItem from "../components/AccordionItem";

const ClientAgreement = () => {
  const accordionItems = [
    {
      title: "Item 1",
    },
    {
      title: "Item 2",
    },
    // You can add more items here
  ];

  return (
    <>
      <PageBanner backgroundImage={backgroundImg} title="Client agreement" />

      <div className="container agreement-page">
        <div className="text-container">
          <p>
            This Agreement is signed by and between InterTrade Systems Ltd, the
            company registered under the laws of Saint Vincent and the
            Grenadines with registration number 24686, registered at Saint
            Vincent and the Grenadines, Kingstown, Beachmont, Suite 305,
            Griffith Corporate Centre, hereinafter referred to as – “Company”
            and the individual / legal entity that has applied for opening a
            trading account on the Company's trading platform for trading
            Options (Appendix No. 1), hereinafter referred to as the “Client”,
            in accordance with the terms and conditions specified in this
            agreement.
            <br /> <br />
            This Agreement is a public offer, and joining it, the Client
            confirms that:
            <br />
            a) He has become acquainted with all the information, terms and
            conditions set forth in this Agreement, as well as on the website
            ringotrade.com (hereinafter referred to as the “Site”), including
            important legal information.
            <br />
            b) By accepting this Agreement, he unconditionally accepts all the
            conditions set forth in this Agreement, the annexes and (or)
            additions to it, as well as other documentation / information
            published on the Site. The Client accepts and accedes this Agreement
            at the time of registration of the trading account on the Site. By
            accepting this Agreement, the Client enters into a legally binding
            contract with the Company.
            <br />
            c) Each operation of the Client on the Trading Platform is subject
            to the terms of this Agreement and other documentation / information
            on the Site.
            <br />
            d) He may receive information, including amendments to this
            Agreement, by e-mail or through the Site, and the registration data
            specified by him when opening a trading account on the Site is
            reliable.By entering into this Agreement, the Parties confirm that:
            <br />
            e) this Agreement is not entered into force under duress, and does
            not prejudice the right of the parties with respect to the right to
            freedom to enter into an agreement;
            <br />
            f) the place of the execution of this Agreement is Saint Vincent and
            the Grenadines, and all the provisions of this Agreement shall be
            governed by and construed in accordance with Section 9 of this
            Agreement.
            <br />
            g) the services provided to the Client by the Company, as well as
            its agents in accordance with this Agreement, are not considered (i)
            to be the activities of the payment system or payment agent and (or)
            (ii) gambling or betting operations; in accordance with the above,
            due to the possible risks of financial losses during trading, all
            invested funds are not subject to return to the Client.
          </p>

          <div>
            <AccordionItem
              title={
                "1. Terms and definitions used in this Agreement.“Agreement”"
              }
            >
              - this agreement and its Annexes No. 1, 2, 3 and 4 which are its
              integral parts. “Account” - a unique personal profile registered
              in the name of the Client, which contains information about
              transactions / operations of the Client on the Trading Platform
              (in accordance with the definition of this term below) of the
              Company. “Ask” is a higher price in a price rate. The price at
              which the financial instrument is offered for purchase. “Bid” is a
              lower price in a price rate. The price at which the financial
              instrument is offered for sale. “Execution” - the execution of
              Options (orders) concluded (submitted) by the Customer through the
              Company's Trading Platform, Market Maker in accordance with the
              terms of this Agreement and the actual price parameters at the
              time of such execution. “Market maker” is a licensed organization
              that the Company represents as a broker for the purpose of
              fulfilling the Options (orders) of the Client, and with which the
              Company has entered into an agreement on the provision of
              liquidity services and maintaining price rates. “Operations” - any
              actions performed on the Client's Account after placing an order
              by the Client, including, but not limited to, crediting funds,
              refunding, opening and closing of trade transactions / positions
              and (or) other actions with financial instruments. “Order” - the
              Client's request to purchase an Option entered by the Client
              through the Trading Platform from his Account. “Prices” - the
              prices that are offered to the Client under each transaction are
              based on market price rates (on-line) provided by the Market
              Maker. Prices are transmitted through the Company's Trading
              Platform and are changed without any prior notice based on market
              price rates of financial instruments and / or their underlying
              assets.“Services” means the services described in section 3 of
              this Agreement. “Trading platform” - an electronic system on the
              Internet, consisting of all programs and technologies that display
              price rates in real time, allow you to place / modify / delete
              orders and calculate all mutual obligations of the Client and the
              Company.
            </AccordionItem>
            <AccordionItem title={"2. Subject of the Agreement."}>
              This Agreement constitutes a legally binding document that
              outlines the scope and nature of the relationship between the
              Client and the Company. The primary purpose of this Agreement is
              to establish the terms and conditions under which the Company will
              provide financial services to the Client. These services are
              specifically related to the trading of various financial
              instruments on the Company's designated Trading Platform. Both
              parties acknowledge that this Agreement encompasses the entire
              arrangement between them and supersedes any prior understandings
              or agreements, whether oral or written.
            </AccordionItem>
            <AccordionItem title={"3. Company Services and Limitations."}>
              The Company undertakes to provide the Client with access to its
              proprietary Trading Platform, along with a range of associated
              services. These services encompass real-time price information,
              order placement, execution of trades, and transaction history
              records. It's important for the Client to be aware that while the
              Company is committed to delivering these services diligently,
              there may be certain limitations, constraints, or restrictions
              imposed by the Company to ensure the stability, security, and
              integrity of the Trading Platform. These limitations may relate to
              factors such as trading volume, order frequency, or specific
              trading hours.
            </AccordionItem>
            <AccordionItem
              title={"4. Trading Procedures, Risks, and Failures."}
            >
              The Client must familiarize themselves with the Trading Procedures
              established by the Company, which govern the process of trading
              financial instruments on the Trading Platform. The Client
              acknowledges that trading involves inherent risks, including but
              not limited to market volatility, price fluctuations, and the
              potential for financial loss. Furthermore, the Client acknowledges
              the possibility of technological failures, system outages, or
              disruptions in the Trading Platform's functionality. While the
              Company will make reasonable efforts to ensure the stability and
              reliability of the Trading Platform, it cannot guarantee
              uninterrupted access or flawless performance.
            </AccordionItem>
            <AccordionItem
              title={
                "5. Rights, Obligations, Guarantees, and Liability of the Parties."
              }
            >
              This section delineates the rights and obligations of both the
              Client and the Company. The Client holds the right to execute
              trades, access their account information, and utilize the services
              provided by the Company in accordance with the terms of this
              Agreement. In return, the Client is obligated to adhere to the
              rules of the Trading Platform, provide accurate information, and
              safeguard their account credentials. The Company commits to
              maintaining the security of the Client's data, executing trades
              promptly, and offering a reliable Trading Platform. However, the
              Client acknowledges that trading involves financial risk, and any
              losses incurred as a result of trading activities are the
              responsibility of the Client.
            </AccordionItem>
            <AccordionItem title={"6. Personal Data."}>
              Both parties acknowledge that during the course of their
              engagement, certain personal data will be collected, processed,
              and stored. The Client agrees to provide accurate and current
              information and grants the Company the right to use this data for
              operational purposes as outlined in the Company's privacy policy.
              The Company undertakes to handle personal data in compliance with
              relevant data protection laws and regulations, ensuring its
              security and confidentiality.
            </AccordionItem>
            <AccordionItem
              title={
                "7. Special Conditions for Trading in Financial Instruments."
              }
            >
              Depending on the specific financial instruments being traded,
              additional terms, conditions, or requirements may apply. These
              special conditions will be communicated to the Client in
              conjunction with this Agreement. It's essential for the Client to
              review and acknowledge these conditions before engaging in trading
              activities involving those particular instruments.
            </AccordionItem>
            <AccordionItem
              title={
                "8. Account Replenishment, Fund Withdrawal, Commissions, Fees, and Settlements."
              }
            >
              This section details the processes associated with account
              funding, fund withdrawals, as well as any commissions or fees
              applicable to trading operations. The Company reserves the right
              to establish and modify the fee structure for its services, and
              such changes will be communicated to the Client in a timely
              manner. Additionally, the process of settling trades, including
              the timeline for settling trades and any associated procedures, is
              outlined here.
            </AccordionItem>
            <AccordionItem title={"9. Governing Law."}>
              This Agreement is governed by the laws of the jurisdiction
              specified within the Agreement. Any disputes arising from or
              related to this Agreement will be subject to resolution in
              accordance with the laws of that jurisdiction. Both parties agree
              to submit to the jurisdiction of the competent courts within that
              jurisdiction for the purposes of dispute resolution.
            </AccordionItem>
            <AccordionItem
              title={"10. Duration and Termination of the Agreement."}
            >
              The Agreement takes effect upon the Client's acceptance of its
              terms and conditions and continues until terminated by either
              party. Termination may occur due to various reasons, including
              breach of terms, mutual agreement, or other circumstances. In the
              event of termination, both parties agree to fulfill their
              obligations under this Agreement until the termination date.
              Termination does not relieve the parties of their obligations
              related to trade settlements, fees, or other outstanding matters.
            </AccordionItem>
          </div>

          <div>
            <h3>Annex No. 1</h3>
            <p className="medium-text">
              The specification of the financial instrument “Option”.
            </p>
            <table>
              <tr>
                <td>Financial instrument:</td>
                <td>
                  An option is a financial instrument based on the deviation
                  (positive or negative) of the value of its underlying asset at
                  the time of the acquisition of the option from its price at
                  the time the option is closed. An option, depending on the
                  fulfillment of the conditions stipulated in it (positive or
                  negative deviation of the price of the underlying asset),
                  either provides a fixed amount of income (return) to its
                  owner, or does not provide anything. The seller of the Option
                  is the Investment Company, and the buyer can be any person
                  registered as its Client. An option does not imply a physical
                  delivery of its underlying asset, but involves receiving a
                  return by the Buyer or Seller in KG soms in the amount fixed
                  before the purchase of the option. The seller of the Option is
                  the Market Maker, and the buyer is the Company's Clients.
                </td>
              </tr>

              <tr>
                <td>
                  Underlying asset of a financial instrument and pricing of an
                  underlying asset
                </td>
                <td>
                  The underlying asset is the change in the prices for which the
                  Option is based on: securities, currency pairs, mixed pairs
                  (product / currency), stock indices. Pricing for underlying
                  assets - official price rates of the underlying asset, which
                  are formed on stock exchanges and trading planforms. Exchange
                  rates are provided by the Market Maker, and are consolidated
                  on the Company's server in order to provide them to the
                  Clients. The price of the underlying asset is taken to the
                  fourth decimal place. This is the so-called "tick", which is
                  equal to 0.0001
                </td>
              </tr>

              <tr>
                <td>Types of Options</td>
                <td>
                  Put option: The terms and conditions of this option provide
                  that at the time of its execution, the Buyer receives a Return
                  if the price of the underlying asset of such an option is
                  lower than the price at the time of the acquisition of this
                  option. Otherwise, the price paid by the Buyer for the option
                  is counted against the Return received by the Option Seller.
                  If both prices are equal, then the Parties to the transaction
                  are brought into position before the transaction, that is, the
                  price that the Buyer paid for the option is returned to his
                  account. Call option: The terms and conditions of this option
                  provide that at the time of its execution, the Buyer receives
                  a Return if the price of the underlying asset of such an
                  option is higher than the price at the time of the acquisition
                  of this option. Otherwise, the price paid by the Buyer for the
                  option is counted against the Return received by the Option
                  Seller. If both prices are equal, then the Parties to the
                  transaction are brought into position before the transaction,
                  that is, the price that the Buyer paid for the option is
                  returned to his account. Boundary option: The terms and
                  conditions of this option stipulate that at the time of its
                  execution, the Buyer receives a Return if the price of the
                  underlying asset of such an option is within the price
                  boundary - above and below a certain rate. The task of the
                  trader is to determine whether the price will remain inside
                  the limited price space until the option is exercised or not.
                </td>
              </tr>

              <tr>
                <td>Option return</td>
                <td>
                  The size of the Option return, which is paid to the Buyer
                  under the terms and conditions of the Option, is calculated as
                  the cost of the Option plus a return, the amount of which is
                  established by the seller of the Option and is known to the
                  buyer before the transaction. The size of the Option return,
                  which is paid to the Seller under the terms and conditions of
                  the Option, is determined in the amount of the cost of the
                  Option paid by the Buyer upon its purchase.
                </td>
              </tr>

              <tr>
                <td>Currency of acquisition of option and underlying asset</td>
                <td>
                  The currency of the transactions for the purchase of Options
                  and payment of returns is Kyrgyz soms. The currency, the
                  pricing for the underlying asset of the Option takes place in,
                  may be different, for each Option it will depend on the type
                  of underlying asset. For example, if the underlying asset is
                  the gold / US dollar currency pair, then the currency is the
                  US dollar, and if the underlying asset is
                </td>
              </tr>
            </table>
          </div>

          <div>
            <h3>Annex No. 2.</h3>
            <p className="medium-text">Order Execution Policy.</p>
            <p>
              1. Trading Options is carried out only online through the Trading
              Platform of the Company, and the Company does not accept telephone
              or personal orders, as trading is fully automated.
              <br /> <br />
              2. The company automatically registers all orders and distributes
              them in a sequential order, ensuring their proper and quick
              execution.
              <br /> <br />
              3. On its Trading Platform, the Company publishes current prices
              from the Market Maker at which Options are offered.
              <br /> <br />
              4. All information relating to closed (executed) transactions
              becomes immediately available on the Client's account in the
              Trading Platform, and your profit or loss from each closed
              transaction is reflected in the account balance.
              <br /> <br />
              5. Prices for any of the Options presented are calculated taking
              into account the BID and ASK prices of the corresponding
              underlying financial instrument and are indicated on the trading
              platform of the Company.
              <br /> <br />
              6. Prices are obtained from reputable third-party price providers
              and provided by the Market Maker. Prices are updated as often as
              technology and communication lines allow.
              <br /> <br />
              7. Despite taking reasonable measures to achieve the best possible
              results for Clients, the Company cannot guarantee that prices will
              be more favorable than prices offered in other places.
              <br /> <br />
              8. The Company does not charge any commissions or fees for trading
              Options, but the Company reserves the right to charge such
              commissions in the future, having previously notified the Client
              about this. Such notice may be sent personally to the Client and /
              or posted on the Site. If the Company at any time decided not to
              charge any fees, this will not be construed as a waiver of its
              rights to them in the future.
              <br /> <br />
              9. The Company does not execute orders of the Client as an
              executor and is not the Subject of execution of orders of the
              Client. The Company agrees on the execution of Customer orders
              with the Market Maker. At the same time, the Company always
              strives to ensure high execution speed, however, under certain
              circumstances, for example, at low Internet speed or market
              volatility, the selected price rate may differ from the actual
              market price, as a result of which the Client will place his order
              with a delay and this order may be executed at higher or lower
              price offered by the Company.
              <br /> <br />
              10. The Company undertakes to regularly monitor the usefulness of
              this Policy and the quality of the execution of the procedures
              described in this Policy, as well as to amend it, if necessary,
              and to ensure its compliance with all applicable regulatory
              requirements.
              <br /> <br />
              11. It is believed that the Client gave his consent to the Order
              Execution Policy in the current version by accepting the
              Agreement.
            </p>
          </div>

          <div>
            <h3>Annex No. 3.</h3>
            <p className="medium-text">Technical regulations.</p>
            <p className="medium-text">
              1. Processing requests and trade orders.
            </p>
            <p>
              А. The process of processing a client’s requests and (or) order:
              <br /> <br />
              1. After filing a request / order, such an application / order is
              checked for correctness on the Trading Platform. 2. Next, the
              request / order is sent from the Trading platform to the server.
              3. The request / order is being checked for correctness on the
              server. 4. The server sends the verification results to the
              Trading Platform. 5. If the connection between the trading
              platform and the server is working, the trading platform will
              receive the results of processing the request or order of the
              Client by the Company.
            </p>
            <p>
              B. The duration of the process may vary and depends on the quality
              of communication between the Trading Platform and the server of
              the Company, as well as on market conditions. Under normal market
              conditions, the process usually takes 0-4 seconds. In market
              conditions other than normal, the processing time of the Client’s
              requests / order increases.
              <br /> <br />
              C. When using the trading platform, it is allowed to have only one
              browser tab open. In the case of using multiple tabs, trading
              results may be adjusted and / or canceled.
            </p>
            <p>2. Price rates</p>
            <p>
              2.1. The client acknowledges that the main reliable source of
              information on the flow of price rates is the main server for
              client requests. Price rates on the Trading Platform cannot serve
              as a reliable source of information about the flow of real price
              rates, because due to the unstable connection between the Trading
              Platform and the server, some of the price rates from the stream
              may not reach the Trading Platform.
              <br /> <br />
              2.2. Charts presented on the Trading Platform show indicative
              value. Thus, the Company does not guarantee that the transaction
              will be closed at the prices indicated on the charts of the
              Trading platform during the filing of other client transactions.
              2.3. The prices displayed on the Trading platform are made
              according to the formula (Bid + Ask) / 2.
            </p>
            <p>3. Processing of the Client’s orders for open positions</p>
            <p>
              3.1. If there are enough funds to open a position, the position
              will be opened.
              <br />
              3.2. If there are not enough funds to open a position, the
              position will not be opened.
              <br />
              3.3. The Client’s order to open a position will be processed, and
              the position will be opened only after the data has been entered
              into the server log file. Each new position is assigned a serial
              number.
            </p>
            <p>4. Processing Client orders to close a position</p>
            <p>
              1. Closing a trading position occurs at the current price on the
              trading server, valid at the time of closing the trading
              operation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientAgreement;
