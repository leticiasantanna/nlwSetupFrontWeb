import { DefaultTheme } from "styled-components";

const themeDefault: DefaultTheme = {
  title: "default",

  colors: {
    primary: "#F54600",
    secondary: "#1C1A1C",
    secondaryInverted: "#fff",

    space: "#4D4D4D",

    background: "#09090a",
    secondaryBackground: "#000",

    inactive: "rgba(0, 0, 0, 0.1)",

    skeleton1: "#f4efef",
    skeleton2: "#efeaea",

    text: {
      primary: "#fff",
      primaryInverted: "#000",
      secondary: "#1C1A1C",
    },

    error: "#e74c3c",
    yellow: "#fff374",
    yellowMedium: "#FFA329",
    yellowDark: "#ffc926",
    green: "#27C500",
    greenDark: "#006400",
    red: "#FA8072",
    redConquer: "#EF113D",
    mercury: "#E5E5E5",
    black: "#000000",
    gray: "#D9D9D9",
    white: "#FFFF",
    grayDark: "#484848",
  },
  font: {
    family: {
      Ubuntu: "Ubuntu Sans, sans-serif",
    },
  },
};

export default themeDefault;
