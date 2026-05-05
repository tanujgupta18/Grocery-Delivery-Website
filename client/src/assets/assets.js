import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import menu_icon from "./menu_icon.svg";
import profile_icon from "./profile_icon.png";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import white_arrow_icon from "./white_arrow_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import organic_vegitable_image from "./organic_vegitable_image.png";
import fresh_fruits_image from "./fresh_fruits_image.png";
import bottles_image from "./bottles_image.png";
import maggi_image from "./maggi_image.png";
import dairy_product_image from "./dairy_product_image.png";
import bakery_image from "./bakery_image.png";
import grain_image from "./grain_image.png";

export const assets = {
  logo,
  search_icon,
  nav_cart_icon,
  menu_icon,
  profile_icon,
  main_banner_bg,
  main_banner_bg_sm,
  white_arrow_icon,
  black_arrow_icon,
};

export const categories = [
  {
    text: "Organic veggies",
    path: "Vegetables",
    image: organic_vegitable_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Fresh Fruits",
    path: "Fruits",
    image: fresh_fruits_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Cold Drinks",
    path: "Drinks",
    image: bottles_image,
    bgColor: "#F0F5DE",
  },
  {
    text: "Instant Food",
    path: "Instant",
    image: maggi_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Dairy Products",
    path: "Dairy",
    image: dairy_product_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Bakery & Breads",
    path: "Bakery",
    image: bakery_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Grains & Cereals",
    path: "Grains",
    image: grain_image,
    bgColor: "#F1E3F9",
  },
];
