/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  priority: 0.8,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const defaultValue = (priority) => ({
      loc: path,
      changefreq: config.changefreq,
      priority: priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    });

    if (path === '/') {
      return defaultValue(1.0);
    }

    return defaultValue();
  },
};
