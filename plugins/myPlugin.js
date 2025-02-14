const ArticleContent = require('../src/components/Chain/config/ChainKnowledgeBaseConfig');

export default function myPlugin() {
  return {
    name: 'dynamic-routes-plugin',
    async loadContent() {
      // Simulated content for dynamic routes
      return ArticleContent?.knowledgeBaseArticleContent;
    },
    async contentLoaded({ content, actions }) {
      const { addRoute, createData } = actions;

      // Add dynamic routes for knowledge pages
      await Promise.all(
        content.map(async (item, index) => {
          const metadata = await createData(
            `knowledge-metadata-${index}.json`,
            JSON.stringify(item)
          );

          addRoute({
            path: process.env.GITHUB_ACTIONS
              ? `${process.env.REACT_APP_BASE_URL}/knowledge/${item.slug}`
              : `/knowledge/${item.slug}`,
            exact: true,
            component: '@site/src/pages/knowledge/[slug].tsx',
            modules: { metadata },
          });
        })
      );
    },
  };
}
