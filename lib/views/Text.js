import React, { PureComponent } from "react";
import { Text as TextNative } from "react-native";
import PropTypes from "prop-types";
import { theme } from "../Context";
import { createStyle } from "../themes";

class Text extends PureComponent {
  render() {
    const { theme, style, light, dark } = this.props;
    let styles = makeStyle(theme);
    return (
      <TextNative
        style={[
          styles.normal,
          light ? styles.light : {},
          dark ? styles.dark : {},
          style
        ]}
        {...this.props}
      >
        {this.props.children}
      </TextNative>
    );
  }
}

Text.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool
};

Text.defaultProps = {
  light: false,
  dark: false
};

const makeStyle = createStyle({
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

export default theme(Text);
