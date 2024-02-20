
const Image = require('@11ty/eleventy-img');
const sharp = require('sharp');

module.exports = function(eleventyConfig) {


    eleventyConfig.addNunjucksAsyncShortcode('Image', async(src, alt) => {
        if(!alt){
            throw new Error(`Missing \`alt\` on from ${src}`)
        }


        let stats = await Image(src, {
            widths: [25, 320, 640, 960, 1200, 1800, 2400],
            formats: ['jpeg', 'webp', 'svg', 'png'],
            urlPath: '/assets/',
            outputDir: '/dist/assets/'
        });

        let lowestSrc = stats['jpeg'][0]

        const placeholder = await sharp(lowestSrc.outputPath)
            .resize({ fit: sharp.fit.inside })
            .blur()
            .toBuffer();

            const base64Placeholder = `data:image/png;base64,${placeholder.toString(
            'base64',
            )}`;

        const srcSet = Object.keys(stats).reduce(
            (acc, format) => ({
                ...acc,
                [format]: stats[format].reduce(
                    (_acc, curr) => `${_acc} ${curr.srcset},`,
                    '',
                ),
            }),
            {},
        )


        const source = `<source type="image/webp" data-srcset="${srcSet['webp']}" >`

        const img = `<img
                    loading="lazy"
                    alt="${alt}"
                    src="${base64Placeholder}"
                    data-src="${lowestSrc.url}"
                    data-sizes="(min-width: 1024px), 1024px, 100vw"
                    data-srcset="${srcset['jpeg']}"
                    width="${lowestSrc.width}"
                    height="${lowestSrc.height}">`;


        return `<div class="image-wrapper"><picture> ${source} ${img} </picture></div>`
    });

	eleventyConfig.addPassthroughCopy("./src/fonts/Gotham-Light.woff2");
	eleventyConfig.addPassthroughCopy("./src/fonts/GopherText-Regular.woff2");
	eleventyConfig.addPassthroughCopy("./src/fonts/GopherText-Bold.woff2");
	eleventyConfig.addPassthroughCopy("./src/fonts/leaguegothic-regular-webfont.woff2");
    eleventyConfig.addPassthroughCopy("./src/favicons");
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/_includes/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/resume/");
    eleventyConfig.addPassthroughCopy("./src/scripts");
    eleventyConfig.addPassthroughCopy({ "./src/favicons": "/" });
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}