import antfu from "@antfu/eslint-config";
import * as reactCompiler from "eslint-plugin-react-compiler";

export default antfu(
  {
    stylistic: false,
    react: true,
    typescript: {
      tsconfigPath: "tsconfig.json",
    },
  },
  reactCompiler.configs.recommended,
);
