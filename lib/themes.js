import { StyleSheet } from "react-native";
import { createSelector } from "reselect";
import { anyPass, isNil, isEmpty, keys, pipe, forEach, reduce } from "ramda";

const isNilOrEmpty = anyPass([isNil, isEmpty]);
export const createTheme = (name, type = "default", themeObjects) => {
  if (isNilOrEmpty(name)) throw new Error("valid Name are required");
  if (isNilOrEmpty(themeObjects))
    throw new Error("valid themeObjects are required");
  if (isNilOrEmpty(themeObjects["primaryColor"]))
    throw new Error("valid primaryColor are required");
  if (isNilOrEmpty(themeObjects["colorPrimaryDark"]))
    throw new Error("valid colorPrimaryDark are required");
  if (isNilOrEmpty(themeObjects["accentColor"]))
    throw new Error("valid accentColor are required");
  if (isNilOrEmpty(themeObjects["textPrimaryColor"]))
    throw new Error("valid textPrimaryColor are required");
  if (isNilOrEmpty(themeObjects["textColorPrimaryDark"]))
    throw new Error("valid textColorPrimaryDark are required");
  if (isNilOrEmpty(themeObjects["textAccentColor"]))
    throw new Error("valid textAccentColor are required");
  return {
    ...themeObjects,
    NAME: name,
    TYPE: type
  };
};

const theme = theme => theme;
export const createStyle = stylesObject => {
  return createSelector(theme, theme => {
    var themedStyles = {};
    pipe(
      keys,
      forEach(key => {
        const style = stylesObject[key];
        if (detectTheming(style)) {
          themedStyles[key] = theme[getKey(style)];
        } else {
          themedStyles[key] = reduce(
            (acc, elm) => {
              if (detectTheming(style[elm])) {
                acc[elm] = theme[getKey(style[elm])];
              }
              return acc;
            },
            { ...style },
            keys(style)
          );
        }
      })
    )(stylesObject);
    return StyleSheet.create(themedStyles);
  });
};

function getKey(value) {
  if (value[0] === "@") return value.substr(1);
  return value.replace(/@([\w_-]+)/gm, (match, key) => key);
}

function detectTheming(value) {
  return (
    typeof value === "string" && (value[0] === "@" || value.indexOf("@") >= 0)
  );
}
