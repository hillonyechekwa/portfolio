// const gsap = require('gsap')
// const scrollTrigger = require('gsap/ScrollTrigger')
// const barba = require('barba.js')
// const lenis = require('@studio-freight/lenis')
// const splitType = require('split-type')

module.exports = function(eleventyConfig) {

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