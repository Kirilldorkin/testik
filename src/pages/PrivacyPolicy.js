import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/privacy-policy.png";

const PrivacyPolicy = () => {
  return (
    <>
      <PageBanner backgroundImage={backgroundImg} title="Privacy Policy" />

      <div className="container policy-page">
        <div className="text-container">
          <p className="medium-text">
            Regardless of whether you are our current or former customer, or
            just a visitor of this site, the privacy of all our users is our
            main concern.
          </p>
          <p>
            1 . Providing to the company your personal data, such as full name,
            postal address, passport or driver's license number, etc., you fully
            agree that the company can collect, use, store and protect the
            information presented in the order described below.
            <br />
            <br />
            The Company will collect personal information from customers in the
            following circumstances:
            <br />
            2.1 When opening a fully functional trading account or its demo
            version (when filling out electronic registration forms) on the
            Company's website.
            <br />
            2.2 When depositing your personal trading account.
            <br />
            2.3 When withdrawing funds from personal trading account.
            <br />
            3. Personal data that can be collected includes:
            <br />
            3.1 Personal information, for example, full name, address, date of
            birth, ID number and occupation.
            <br />
            3.2 Financial information, for example, data on assets, experience
            in investment and monthly income, in order to assess your progress
            in trade.
            <br />
            3.3 Deposit to your account or withdrawing funds from it, we can
            request documents, such as a digital copy of identification
            document, copy of utility bill, copy of the card with the last 4
            figures and extract from the bank account.
            <br />
            4. Customers voluntary provide to the company personal information
            collected by one of the following ways, in the following cases:
            <br />
            4.1 When filling out electronic registration forms on the Company's
            website or on the Company's mini-website(s).
            <br />
            4.2 When making deposits to the trading account or withdrawing funds
            from the account, customers voluntary provide necessary documents.
            <br />
            4.3 When trading with the use of the Company’s system.
            <br />
            4.4 When contacting the company or responding to advertisement.
            <br />
            5. There is certain information that the Company indirectly
            collects, such as IP addresses, information about the operating
            system used, software configuration and the use of cookies.
            <br />
            6. The Company will use information received from customers for the
            following purposes:
            <br />
            6.1 To identify the customer.
            <br />
            6.2 For setting up, maintaining and managing trading accounts of
            customers.
            <br />
            6.3 To process deposits and withdrawals in the customer's personal
            trading account.
            <br />
            6.4 To keep customers informed on news, updates and new promotions.
            <br />
            6.5 To analyze customer activity in order to improve and provide the
            best products and services for customers.
            <br />
            6.6 To provide customers with the best quality support.
            <br />7 . The Company does not transfer any information of the
            customer to any affiliated persons or third parties. Only under the
            following circumstances personal information of the customer can be
            transferred:
            <br />
            7.1 In order to open, maintain and manage your personal trading
            account, the Company may exchange information with service providers
            such as lawyers, accountants, auditors, and other financial
            professionals.
            <br />
            7.2 In order to prevent fraud, money laundering, unauthorized
            transactions, as well as material claims.
            <br />
            7.3 The Company may exchange information with affiliated persons and
            brokers, mainly with a view to calculating compensation due to these
            parties.
            <br />8 . References
            <br />
            8.1 Links to other (external) websites can be found on the Company's
            website. The Company is not responsible for content of external
            websites and advises all customers to read the privacy policy of
            external websites before sending any personal information.
            <br />
            8.2 The Company's privacy policy applies only to information
            collected by the Company.
          </p>
          <p className="medium-text">Anti-Money Laundering</p>
          <p>
            The Company and the Customer are obliged to follow anti-money
            laundering laws and regulations applicable worldwide, as well as
            local regulations. The customer should know and confirm that: Use of
            the website and services of the Company by the Customer is possible
            only in compliance with applicable law and is not intended for any
            criminal activity.
            <br />
            All transfers of money to/from the Customer should comply with
            anti-money laundering laws and regulations. The origin of funds that
            the customer transfers to the company should not be related to any
            criminal or any other illegal activity. The customer should provide
            true and up-to-date information about himself/herself so that the
            company can identify the Customer at receipt and transfer of funds
            to/from the Customer.
            <br />
            All payments by the Company to the Customer are processed in the
            same currency and to the same bank account / credit card from which
            these funds were initially transferred, unless the Company decides,
            at its discretion, to transfer these funds to another account of the
            Customer.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
