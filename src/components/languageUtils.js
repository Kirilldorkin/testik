import RussiaSvg from "../assets/svg/Languages/Russia.svg";
import KyrgyzstanSvg from "../assets/svg/Languages/Kyrgyzstan.svg";
import ChinaSvg from "../assets/svg/Languages/China.svg";
import EnglishSvg from "../assets/svg/Languages/English.svg";

export const getFlagSvg = (language) => {
  switch (language) {
    case "en":
      return EnglishSvg;
    case "ru":
      return RussiaSvg;
    case "kg":
      return KyrgyzstanSvg;
    case "zh":
      return ChinaSvg;
    default:
      return EnglishSvg;
  }
};

export const getLanguageName = (language) => {
  switch (language) {
    case "en":
      return "English";
    case "ru":
      return "Русский";
    case "kg":
      return "Кыргызча";
    case "zh":
      return "中國人";
    default:
      return "English";
  }
};
