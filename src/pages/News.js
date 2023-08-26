import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/news.png";

const News = () => {
  return (
    <>
      <PageBanner backgroundImage={backgroundImg} title="News" />
      <div className="container news-page">
      <div className="text-container">
          <p>
            Congratulations on the holy holiday of Kurban Ait! <br />{" "}
            <span>28.06.2023</span>
          </p>
          <p>
            Important! Fraudulent actions when withdrawing funds from the Unipay
            terminal. <br /> <span>28.06.2023</span>
          </p>
          <p>
            Congratulations on the Great Victory Day! <br />{" "}
            <span>28.06.2023</span>
          </p>
          <p>
            Happy Labor Day!
            <br /> <span>28.06.2023</span>
          </p>
          <p>
            Congratulations on Nooruz holiday! <br /> <span>28.06.2023</span>
          </p>

          <p>
            Verification <br /> <span>28.06.2023</span>
          </p>

          <p>
            Prevention of fraudulent activities. <br /> <span>28.06.2023</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default News;
