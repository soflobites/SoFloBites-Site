const fs = require('fs');
const path = require('path');

// Mock browser globals to safely load app.js in a Node environment
global.document = {
    getElementById: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }),
    querySelector: () => ({ setAttribute: () => {} }),
    querySelectorAll: () => ({
        forEach: (cb) => cb({
            classList: { add: () => {}, remove: () => {} },
            querySelector: () => null
        })
    }),
    addEventListener: () => {}
};
global.window = {
    location: { hash: '', pathname: '/' },
    scrollTo: () => {},
    addEventListener: () => {},
    STATE: {}
};
global.navigator = { userAgent: '' };
global.Event = class {};

// Load app.js to access database arrays
const appJsPath = path.join(__dirname, 'app.js');
let appJsCode = fs.readFileSync(appJsPath, 'utf-8');

// Replace const declarations with global assignments to bypass ES6 eval block-scoping rules
appJsCode = appJsCode.replace('const RESTAURANT_DATA =', 'global.RESTAURANT_DATA =');
appJsCode = appJsCode.replace('const BEST_OF_CATEGORIES =', 'global.BEST_OF_CATEGORIES =');
appJsCode = appJsCode.replace('const BEST_OF_NEIGHBORHOODS =', 'global.BEST_OF_NEIGHBORHOODS =');
appJsCode = appJsCode.replace('const ARTICLES_DATA =', 'global.ARTICLES_DATA =');

try {
    eval(appJsCode);
    
    const restaurants = global.RESTAURANT_DATA;
    const categories = global.BEST_OF_CATEGORIES;
    const neighborhoods = global.BEST_OF_NEIGHBORHOODS;
    const articles = global.ARTICLES_DATA;

    if (!restaurants || !categories || !neighborhoods || !articles) {
        console.error("Failed to load database arrays from app.js!");
        process.exit(1);
    }

    const domain = "https://www.soflobites.com";

    const urls = [
        `${domain}/`,
        `${domain}/about`,
        `${domain}/privacy-terms`,
        `${domain}/best-of`,
        `${domain}/editorials`
    ];

    // Add restaurants
    restaurants.forEach(rest => {
        urls.push(`${domain}/restaurants/${rest.id}`);
    });

    // Add Best Of categories (Group 1 & 2)
    categories.forEach(cat => {
        urls.push(`${domain}/best-of/${cat.id}`);
    });
    neighborhoods.forEach(cat => {
        urls.push(`${domain}/best-of/${cat.id}`);
    });

    // Add Articles
    articles.forEach(art => {
        urls.push(`${domain}/article/${art.id}`);
    });

    // Generate XML sitemap
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`).join('\n')}
</urlset>
`;

    const sitemapPath = path.join(__dirname, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');

    console.log(`Successfully generated sitemap.xml with ${urls.length} URLs!`);

} catch (err) {
    console.error("Error evaluating app.js database lists:", err);
    process.exit(1);
}
