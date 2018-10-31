import { createStyle } from "../themes";

export const makeViewStyles = createStyle({
  normal: {
    backgroundColor: "@primaryColor"
  },
  light: {
    backgroundColor: "@accentColor"
  },
  dark: {
    backgroundColor: "@colorPrimaryDark"
  }
});

export const makeTextStyles = createStyle({
  normal: {
    color: "@textPrimaryColor"
  },
  light: {
    color: "@textAccentColor"
  },
  dark: {
    color: "@textColorPrimaryDark"
  }
});

export const getTextStyle = (
  theme,
  light = false,
  dark = false,
  style = {}
) => {
  let styles = makeTextStyles(theme);
  return [
    styles.normal,
    light ? styles.light : {},
    dark ? styles.dark : {},
    style
  ];
};

export const getViewStyle = (
  theme,
  light = false,
  dark = false,
  style = {}
) => {
  let styles = makeViewStyles(theme);
  return [
    styles.normal,
    light ? styles.light : {},
    dark ? styles.dark : {},
    style
  ];
};

export default {
  makeViewStyles,
  getViewStyle,
  makeTextStyles,
  getTextStyle
};
