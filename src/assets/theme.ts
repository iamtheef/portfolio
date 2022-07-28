import CSS from "csstype";

export interface IThemeProp {
  bgColor: CSS.ColorProperty;
  fontColor: CSS.ColorProperty;
  bgNumsOpacity: CSS.OpacityProperty;
  navButtonColor: CSS.ColorProperty;
  navButtonHoverColor: CSS.ColorProperty;
}

export interface ITheme {
  light: IThemeProp;
  dark: IThemeProp;
}

export const theme: ITheme = {
  light: {
    bgColor: "white",
    fontColor: "black",
    bgNumsOpacity: "0.1",
    navButtonColor: "black",
    navButtonHoverColor: "rgb(170, 170, 182)",
  },

  dark: {
    bgColor: "#727272",
    fontColor: "white",
    bgNumsOpacity: "1",
    navButtonColor: "white",
    navButtonHoverColor: "red",
  },
};
