import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/contact-us.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import Button from "../components/Button";

const ContactUs = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <PageBanner backgroundImage={backgroundImg} title="Contact us" />
      <div className="container contact-page">
        <div className="text-container">
          <h2>
            Chat or call us - RingoTrade's customer care service is available
            24/7 and always ready to answer all your questions!
          </h2>

          <div className="networks">
            <div className="phone">
              <img src={phone} alt="phone icon" />
              <p>+ 996 500 202 404</p>
            </div>

            <div className="email">
              <img src={email} alt="email icon" />
              <p>admin@gmail.com</p>
            </div>

            <div className="social">
              <p>We are in social networks:</p>
              <div className="social-icons">
                <div className="instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_272_1111)">
                      <path
                        d="M12.4145 48.0001C10.5628 47.9794 8.35779 47.8162 6.6214 47.1725C5.35341 46.7038 4.25361 45.6588 3.31105 44.6897C2.33938 43.7491 1.29562 42.6485 0.828293 41.3794C0.18516 39.6431 0.0209743 37.4378 0.000706472 35.5863C-0.141508 32.5083 0.000706472 31.7994 0.000706472 24.0001C0.000706472 16.2008 -0.137284 15.4943 0.000706472 12.4139C0.0234338 10.5631 0.186629 8.3569 0.828293 6.62077C1.2979 5.35257 2.34247 4.2542 3.31105 3.31043C4.25245 2.33963 5.35231 1.29469 6.6214 0.827667C8.35779 0.184001 10.5628 0.0207456 12.4145 8.066e-05C15.4935 -0.140726 16.2057 8.066e-05 24.0007 8.066e-05C31.7958 8.066e-05 32.5065 -0.13791 35.5869 8.066e-05C37.4382 0.0226475 39.6434 0.185845 41.38 0.827667C42.6485 1.2953 43.7486 2.34045 44.6904 3.31043C45.6606 4.25253 46.7051 5.35191 47.1731 6.62077C47.8169 8.35713 47.9799 10.5621 48.0007 12.4139C48.1415 15.4943 48.0007 16.2032 48.0007 24.0001C48.0007 31.797 48.1415 32.5059 48.0007 35.5863C47.9784 37.4377 47.8155 39.6428 47.1731 41.3794C46.6872 42.6387 45.645 43.7354 44.6904 44.6897C43.7358 45.6441 42.6395 46.6869 41.38 47.1725C39.6437 47.8163 37.4387 47.9793 35.5869 48.0001C32.5093 48.1409 31.7976 48.0001 24.0007 48.0001C16.2038 48.0001 15.4921 48.1423 12.4145 48.0001Z"
                        fill="url(#paint0_radial_272_1111)"
                      />
                      <path
                        d="M12.4145 48.0001C10.5628 47.9794 8.35779 47.8162 6.6214 47.1725C5.35341 46.7038 4.25361 45.6588 3.31105 44.6897C2.33938 43.7491 1.29562 42.6485 0.828293 41.3794C0.18516 39.6431 0.0209743 37.4378 0.000706472 35.5863C-0.141508 32.5083 0.000706472 31.7994 0.000706472 24.0001C0.000706472 16.2008 -0.137284 15.4943 0.000706472 12.4139C0.0234338 10.5631 0.186629 8.3569 0.828293 6.62077C1.2979 5.35257 2.34247 4.2542 3.31105 3.31043C4.25245 2.33963 5.35231 1.29469 6.6214 0.827667C8.35779 0.184001 10.5628 0.0207456 12.4145 8.066e-05C15.4935 -0.140726 16.2057 8.066e-05 24.0007 8.066e-05C31.7958 8.066e-05 32.5065 -0.13791 35.5869 8.066e-05C37.4382 0.0226475 39.6434 0.185845 41.38 0.827667C42.6485 1.2953 43.7486 2.34045 44.6904 3.31043C45.6606 4.25253 46.7051 5.35191 47.1731 6.62077C47.8169 8.35713 47.9799 10.5621 48.0007 12.4139C48.1415 15.4943 48.0007 16.2032 48.0007 24.0001C48.0007 31.797 48.1415 32.5059 48.0007 35.5863C47.9784 37.4377 47.8155 39.6428 47.1731 41.3794C46.6872 42.6387 45.645 43.7354 44.6904 44.6897C43.7358 45.6441 42.6395 46.6869 41.38 47.1725C39.6437 47.8163 37.4387 47.9793 35.5869 48.0001C32.5093 48.1409 31.7976 48.0001 24.0007 48.0001C16.2038 48.0001 15.4921 48.1423 12.4145 48.0001Z"
                        fill="url(#paint1_radial_272_1111)"
                      />
                      <path
                        d="M18.2072 24.0001C18.2073 22.8296 19.212 22.4904 19.8623 21.5173C20.5127 20.5442 21.2637 19.4824 22.3451 19.0346C23.4266 18.5867 24.5075 17.9785 25.6555 18.207C26.8034 18.4354 28.1382 19.0344 28.9658 19.8621C29.7934 20.6899 30.3928 22.0245 30.621 23.1725C30.8492 24.3205 30.2415 25.4015 29.7934 26.4828C29.3453 27.5641 28.284 28.3155 27.3106 28.9656C26.3373 29.6157 25.1708 30.6209 24.0003 30.6208C22.4308 30.6205 20.972 30.0755 19.8623 28.9656C18.7527 27.8557 18.2071 25.5695 18.2072 24.0001ZM14.8968 24.0001C14.8968 25.8031 15.5502 28.294 16.552 29.7932C17.5538 31.2924 19.0241 32.4135 20.6899 33.1035C22.3558 33.7935 24.7146 33.4553 26.483 33.1035C28.2515 32.7518 29.346 31.8957 30.621 30.6208C31.896 29.3458 32.752 28.2512 33.1037 26.4828C33.4555 24.7144 33.7938 22.3555 33.1037 20.6897C32.4137 19.0239 31.2926 17.5535 29.7934 16.5518C28.2941 15.5501 25.8034 14.8966 24.0003 14.8966C22.803 14.8966 21.7961 15.2661 20.6899 15.7242C19.5838 16.1823 19.0538 17.3604 18.2072 18.207C17.3606 19.0535 16.1826 19.5837 15.7244 20.6897C15.2663 21.7958 14.8968 22.8029 14.8968 24.0001ZM31.4486 14.8966C31.4484 15.318 32.0422 15.3738 32.2761 15.7242C32.5101 16.0746 32.7145 16.3904 33.1037 16.5518C33.4929 16.7132 33.518 17.4614 33.9313 17.3794C34.3446 17.2974 35.2884 16.8496 35.5865 16.5518C35.8846 16.254 36.3317 16.1374 36.4141 15.7242C36.4965 15.311 35.7476 14.4584 35.5865 14.069C35.4254 13.6797 35.1091 13.4757 34.7589 13.2415C34.4087 13.0072 34.3527 12.4141 33.9313 12.4139C33.3665 12.4141 32.6756 12.8422 32.2761 13.2415C31.8767 13.6407 31.4491 14.3319 31.4486 14.8966ZM17.3796 38.8966C16.2538 38.8843 15.1252 38.4597 14.0692 38.069C13.3035 37.7739 12.1669 37.8216 11.5865 37.2414C11.006 36.6613 11.0544 35.5243 10.7589 34.7587C10.368 33.7028 9.9435 32.5741 9.93132 31.4483C9.84511 29.5771 9.93132 29.5686 9.93132 24.8277C9.93132 20.0868 9.84698 19.2525 9.93132 17.3794C9.94498 16.2537 10.3695 15.1253 10.7589 14.069C11.054 13.303 11.006 12.1667 11.5865 11.5863C12.167 11.0058 13.3032 11.0538 14.0692 10.7587C15.1251 10.3679 16.2537 9.9433 17.3796 9.93111C19.2509 9.8449 20.0886 9.93111 24.8279 9.93111C29.5671 9.93111 29.5753 9.84584 31.4486 9.93111C32.5743 9.94476 33.7026 10.3693 34.7589 10.7587C35.5249 11.0538 36.6612 11.0058 37.2417 11.5863C37.8221 12.1667 37.7741 13.3031 38.0692 14.069C38.4601 15.1249 38.8846 16.2536 38.8968 17.3794C38.983 19.2534 38.8968 20.0863 38.8968 24.8277C38.8968 29.569 38.9826 29.5752 38.8968 31.4483C38.8837 32.5741 38.4592 33.7026 38.0692 34.7587C37.7738 35.5243 37.8221 36.6613 37.2417 37.2414C36.6612 37.8216 35.5247 37.7739 34.7589 38.069C33.703 38.4599 32.5744 38.8844 31.4486 38.8966C29.5772 38.9828 29.5695 38.8966 24.8279 38.8966C20.0863 38.8966 19.2505 38.9824 17.3796 38.8966ZM17.3796 6.62076C15.9064 6.64972 13.7939 6.93155 12.4141 7.44835C11.2345 7.90439 10.8255 9.03692 9.93132 9.93111C9.03709 10.8253 7.90462 11.2344 7.44856 12.4139C6.9318 13.7936 6.65001 15.9063 6.62097 17.3794C6.53336 19.2722 6.62097 19.1786 6.62097 24.0001C6.62097 28.8216 6.53382 29.5551 6.62097 31.4483C6.65 32.9214 6.9318 35.0341 7.44856 36.4139C7.90464 37.5933 9.03709 38.0024 9.93132 38.8966C10.8255 39.7908 11.2346 40.9233 12.4141 41.3794C13.794 41.8959 15.9065 42.1778 17.3796 42.207C19.2734 42.2932 20.0062 42.207 24.8279 42.207C29.6496 42.207 29.5552 42.2941 31.4486 42.207C32.9217 42.1779 35.0342 41.8961 36.4141 41.3794C37.5936 40.9233 38.0026 39.7908 38.8968 38.8966C39.7911 38.0024 40.9235 37.5933 41.3796 36.4139C41.897 35.0343 42.1788 32.9215 42.2072 31.4483C42.2934 29.5541 42.2072 28.8216 42.2072 24.0001C42.2072 19.1786 42.2929 19.2727 42.2072 17.3794C42.1782 15.9063 41.8964 13.7936 41.3796 12.4139C40.9235 11.2346 39.7908 10.8253 38.8968 9.93111C38.0029 9.03694 37.5933 7.9047 36.4141 7.44835C35.0343 6.93121 32.9217 6.64938 31.4486 6.62076C29.5552 6.53409 29.6486 6.62076 24.8279 6.62076C20.0071 6.62076 19.2739 6.53362 17.3796 6.62076Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <radialGradient
                        id="paint0_radial_272_1111"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(3.05196 47.0088) scale(61.1012)"
                      >
                        <stop offset="0.09" stop-color="#FA8F21" />
                        <stop offset="0.78" stop-color="#D82D7E" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_272_1111"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(33.2723 45.4631) scale(53.7697)"
                      >
                        <stop
                          offset="0.64"
                          stop-color="#8C3AAA"
                          stop-opacity="0"
                        />
                        <stop offset="1" stop-color="#8C3AAA" />
                      </radialGradient>
                      <clipPath id="clip0_272_1111">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="telegram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_272_1115)">
                      <path
                        d="M40.5517 0H7.44828C3.47183 0 0 3.47183 0 7.44828V40.5517C0 44.5282 3.47183 48 7.44828 48H40.5517C44.5282 48 48 44.5282 48 40.5517V7.44828C48 3.47183 44.5282 0 40.5517 0Z"
                        fill="#37AEE2"
                      />
                      <path
                        d="M18.2063 38.0688C17.1659 38.0688 17.6624 37.3576 17.3787 36.4136L14.0684 26.4826L37.2408 13.2412"
                        fill="#C8DAEA"
                      />
                      <path
                        d="M19.0352 38.0688C19.6999 38.0688 20.2155 37.6307 20.6903 37.2412L24.8283 33.1033L19.8627 29.793"
                        fill="#A9C9DD"
                      />
                      <path
                        d="M19.0332 28.9658L31.447 39.7244C32.7495 40.5677 34.3851 39.7558 34.7573 38.0693L39.7228 13.2417C40.188 11.1804 38.6357 10.1031 37.2401 10.7589L7.44696 22.3451C5.49308 23.0947 5.03766 24.3594 6.61937 24.8279L14.8952 27.3107L32.2745 15.7244C33.1119 15.256 34.488 15.8962 33.9297 16.552"
                        fill="#F6FBFE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_272_1115">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="Linkedin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_272_1120)">
                      <path
                        d="M37.2433 0H10.7606C4.81036 0 0.00195312 4.80841 0.00195312 10.7586V37.2414C0.00195312 43.1916 4.81036 48 10.7606 48H37.2433C43.1935 48 48.002 43.1916 48.002 37.2414V10.7586C48.002 4.80841 43.1935 0 37.2433 0Z"
                        fill="#0B86CA"
                      />
                      <path
                        d="M13.2424 19.862H18.2079V35.5861H13.2424V19.862ZM16.5527 11.5861C17.1065 11.5862 16.9196 12.0986 17.3803 12.4137C17.841 12.7288 18.8228 12.7171 19.0355 13.2413C19.2481 13.7655 19.1423 14.3394 19.0355 14.8965C18.9286 15.4536 18.5984 16.149 18.2079 16.5517C17.8174 16.9543 17.0955 17.2665 16.5527 17.3792C16.0099 17.492 15.4101 17.5943 14.8975 17.3792C14.3849 17.1642 14.38 16.1946 14.0699 15.7241C13.7599 15.2536 13.2455 15.4642 13.2424 14.8965C13.2402 14.5177 13.1024 13.5919 13.2424 13.2413C13.3823 12.8907 13.8094 12.6824 14.0699 12.4137C14.3305 12.1451 14.5563 11.7316 14.8975 11.5861C15.2388 11.4407 16.1832 11.5861 16.5527 11.5861Z"
                        fill="white"
                      />
                      <path
                        d="M21.5195 19.8617H26.485V22.3445C26.971 21.5227 27.297 21.1467 28.1402 20.6893C28.9834 20.232 30.49 19.8245 31.4506 19.8617C36.4904 19.8617 37.2437 22.9656 37.2437 27.31V36.4135H32.2782V28.9652C32.2782 27.1009 32.4161 23.9997 29.7954 23.9997C27.1747 23.9997 26.485 26.0403 26.485 28.1376V36.4135H21.5195V19.8617Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_272_1120">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your Last Name"
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Your Email Address"
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <textarea
                    className="form-input"
                    placeholder="Message..."
                  />
                </label>
              </div>

              <Button
                onClick={handleButtonClick}
                children={"Send"}
                type={"secondary"}
                clicked={false}
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
