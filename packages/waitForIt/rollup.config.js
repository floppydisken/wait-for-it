import typescript from "@rollup/plugin-typescript";
import ts from "rollup-plugin-ts";

export default {
    input: "src/index.ts",
    output: { 
        file: "./dist/index.js",
        format: "cjs",
    },
    plugins: [typescript({ declaration: true, outDir: "dist/" })]
}