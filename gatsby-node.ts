import { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  loaders,
  actions,
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-router-dom/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};