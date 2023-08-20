import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import path from "path";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    resolve(),
    commonjs(),
    postcss({
      extract: path.resolve("dist/my-custom-file-name.css"),
      modules: true,
      minimize: true,
    }),
    terser(),
  ],
  external: ["react", "react-dom"],
};
