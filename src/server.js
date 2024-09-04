const express = require('express');
const SitemapGenerator = require('sitemap-generator');

const app = express();
const port = 3001;

// Set up routes

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(__dirname + '/public/sitemap.xml');
});

// Generate sitemap dynamically
const generator = SitemapGenerator('https://janusooh.com', {
  filepath: __dirname + '/public/sitemap.xml',
  lastMod: true,  // Enable if you want to include last modification date
});

generator.on('done', () => {
  console.log('Sitemap generated successfully!');
});

generator.start();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
