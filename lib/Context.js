import React from "react";
import { createSelector } from "reselect";
import { anyPass, isNil, isEmpty } from "ramda";

const isNilOrEmpty = anyPass([isNil, isEmpty]);
const { Provider, Consumer } = React.createContext({});

export { Provider };

export const theme = Component => {
  return props => (
    <Consumer>
      {value => (
        <Component
          {...props}
          theme={value["theme"]}
          changeTheme={value["changeTheme"]}
        />
      )}
    </Consumer>
  );
};

const activeTheme = state => state.activeTheme;
const defaultTheme = state => state.defaultTheme;
const Themes = (state, themes) => themes;
export const getContextPropsFromState = changeTheme => {
  return createSelector(
    [Themes, activeTheme, defaultTheme],
    (Themes, activeTheme, defaultTheme) => {
      // currentTheme = activeTheme;
      let _defaultTheme = Themes[defaultTheme];
      let _activeTheme = Themes[activeTheme];
      if (isNilOrEmpty(_defaultTheme))
        throw new Error("valid defaultTheme are required");
      if (isNilOrEmpty(_activeTheme))
        throw new Error("valid activeTheme are required");

      let theme = {
        ..._defaultTheme,
        ..._activeTheme
      };
      return {
        theme,
        changeTheme
      };
    }
  );
};

export default {
  Provider,
  Consumer,
  getContextPropsFromState,
  theme
};
