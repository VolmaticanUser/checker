import Showdown from "showdown";

const convert = new Showdown.Converter()


function mdToHTML(message) {
    console.log("🚀 ~ file: mdToHTML.js:8 ~ mdToHTML ~ message:", message)
    const str = convert.makeHtml(message);
    console.log("🚀 ~ file: mdToHTML.js:9 ~ mdToHTML ~ str:", str)
    return str
}


export default mdToHTML;