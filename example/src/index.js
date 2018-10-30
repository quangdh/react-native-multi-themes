import React, { Component } from 'react';
import { ThemeProvider, View } from "../lib";
import themeConfig from "./config";

class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider config={themeConfig}>
                <View>

                </View>
            </ThemeProvider>
        );
    }
}

export default Root;
