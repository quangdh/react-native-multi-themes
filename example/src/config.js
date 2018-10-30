import MultiThemes from "../lib";
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