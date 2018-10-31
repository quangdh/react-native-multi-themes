import React from "react";
import PropTypes from "prop-types";

import {
  Provider as NativeProvider,
  getContextPropsFromState
} from "./Context";
import { isNilOrEmpty } from "./utils";

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this._changeTheme = this._changeTheme.bind(this);
    this.getContextPropsSelector = getContextPropsFromState(this._changeTheme);
    this.state = {
      activeTheme: props.config.activeTheme,
      defaultTheme: props.config.defaultTheme
    };
    this.Themes = props.config.THEMES;
  }

  _changeTheme(theme) {
    if (isNilOrEmpty(this.Themes[theme]))
      throw new Error("selection theme is not exist.");

    this.setState({
      activeTheme: theme
    });
  }

  render() {
    let value = this.getContextPropsSelector(this.state, this.Themes);
    return <NativeProvider value={value}>{this.props.children}</NativeProvider>;
  }
}

ThemeProvider.propTypes = {
  config: PropTypes.object.isRequired
};

export default ThemeProvider;
