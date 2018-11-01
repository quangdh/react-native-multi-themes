import { anyPass, isNil, isEmpty, reduce } from "ramda";

const isNilOrEmpty = anyPass([isNil, isEmpty]);

class MultiThemes {
  constructor() {
    this.THEMES = {};
    this.defaultTheme = "default";
    this.activeTheme = "default";
  }

  init(options) {
    if (isNilOrEmpty(options)) throw new Error("valid options are required");
    if (isNilOrEmpty(options["fallbackTheme"]))
      throw new Error("valid fallbackTheme are required");
    if (isNilOrEmpty(options["resources"]))
      throw new Error("valid resources are required");
    /// init THEMES
    this.THEMES = reduce(
      (acc, item) => {
        acc[item.NAME] = item;
        return acc;
      },
      {},
      options["resources"]
    );
    if (isNilOrEmpty(this.THEMES[options["fallbackTheme"]]))
      throw new Error(`theme ${options["fallbackTheme"]} are required`);
    this.defaultTheme = options["fallbackTheme"];
    return this;
  }

  async useConfig(config) {
    if (isNilOrEmpty(config)) throw new Error("valid config are required");
    if (config["async"] && config["detect"]) {
      await config.detect(activeTheme => {
        if (isNilOrEmpty(activeTheme))
          throw new Error("valid activeTheme are required");
        if (isNilOrEmpty(this.THEMES[activeTheme]))
          throw new Error("activeTheme is not exist.");
        this.activeTheme = activeTheme;
      });
    } else {
      if (isNilOrEmpty(config["activeTheme"]))
        throw new Error("valid activeTheme are required");
      if (isNilOrEmpty(this.THEMES[config["activeTheme"]]))
        throw new Error("activeTheme is not exist.");
      this.activeTheme = config["activeTheme"];
    }
    return this;
  }
}

export default new MultiThemes();
