import MultiThemes from "react-native-multi-themes";
import light from "./themes/light";
import dark from "./themes/dark";

MultiThemes.init({
    fallbackTheme: "light",
    resources: [
        light,
        dark
    ]
}).useConfig({
    async: false,
    activeTheme: "light"
})

export default MultiThemes;