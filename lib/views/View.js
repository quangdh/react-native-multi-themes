import React, { PureComponent } from "react";
import { View as NativeView } from "react-native";
import PropTypes from "prop-types";

import { theme } from "../Context";
import { createStyle } from "../themes";

class View extends PureComponent {
  render() {
    const { theme, style, light, dark } = this.props;
    let styles = makeStyle(theme);
    return (
      <NativeView
        {...this.props}
        style={[
          styles.normal,
          light ? styles.light : {},
          dark ? styles.dark : {},
          style
        ]}
      >
        {this.props.children}
      </NativeView>
    );
  }
}

View.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool
};

View.defaultProps = {
  light: false,
  dark: false
};

const makeStyle = createStyle({
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

export default theme(View);
