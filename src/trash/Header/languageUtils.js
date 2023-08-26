import RussiaSvg from "../assets/images/Languages/flag-en.png";
import KyrgyzstanSvg from "../assets/images/Languages/flag-en.png";
import ChinaSvg from "../assets/images/Languages/flag-en.png";
import EnglishSvg from "../assets/images/Languages/flag-en.png";

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
