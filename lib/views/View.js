import React, { PureComponent } from "react";
import { View as NativeView, Text } from "react-native";

import { theme } from "../Context";
import { createStyle } from "../themes";

class View extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { theme } = this.props;
    let styles = createStyle(_Styles, theme);
    return (
      <NativeView {...this.props} style={styles.container}>
        {this.props.children}
      </NativeView>
    );
  }
}

const _Styles = {
  container: {
    backgroundColor: "@primaryColor",
    flex: 1
  }
};

export default theme(View);
