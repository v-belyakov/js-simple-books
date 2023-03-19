import css from "rollup-plugin-import-css";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/app.js",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
		postcss({
      extract: "app.css",
    }),
    css(),
    nodeResolve(),
  ],
};
