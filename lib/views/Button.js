import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { theme } from "../Context";
import { createStyle } from "../themes";

class Button extends PureComponent {
  render() {
    const { theme, style, light, dark } = this.props;
    let styles = makeStyle(theme);
    return (
      <TouchableOpacity
        {...this.props}
        style={[
          styles.normal,
          light ? styles.light : {},
          dark ? styles.dark : {},
          style
        ]}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  light: PropTypes.bool,
  dark: PropTypes.bool
};

Button.defaultProps = {
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

export default theme(Button);
