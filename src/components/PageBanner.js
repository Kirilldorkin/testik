const PageBanner = ({ backgroundImage, title }) => {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url(${backgroundImage})`, marginTop: "18vh" }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
