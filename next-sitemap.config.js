/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_URL || 'https://pixelmindstudio.co',
	generateRobotsTxt: true, // (optional)
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				disallow: ['/admin', '/api', '/api/*'],
				allow: '/',
			},
		],
		additionalSitemaps: [
			`${process.env.NEXT_PUBLIC_URL}/sitemap.xml`, // static sitemap
			`${process.env.NEXT_PUBLIC_URL}/server-sitemap.xml`, // server generated sitemap
		],
	},
	exclude: ['/admin', '/api', '/api/*', '/server-sitemap.xml'],
}
