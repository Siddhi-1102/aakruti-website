import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/gallery", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const stream = new SitemapStream({ hostname: "https://yourwebsite.netlify.app" });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  import("fs").then((fs) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString());
    console.log("✅ Sitemap generated successfully!");
  });
});
