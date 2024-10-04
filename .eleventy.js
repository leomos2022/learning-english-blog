const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addFilter("postDate", (dataObject) =>{
        return DateTime.fromJSDate(dataObject).
        toLocaleString(DateTime.DATE_MED);
});



    return {
        dir: {
            input: "src",
            output: "public"
        }
    };

}