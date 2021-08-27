import { App } from "vue";
const requireComponent = require.context("./pages", true, /\.vue$/);
export default {
  install: (app: App) => {
    // For each matching file name...
    requireComponent.keys().forEach((fileName) => {
      // Get the component config
      const componentConfig = requireComponent(fileName);
      const componentName = fileName
        .replace(/^.*[\\/]/, "") // Remove path
        .replace(/\.\w+$/, ""); // Remove extension

      app.component(componentName, componentConfig.default || componentConfig);
    });
  },
};
