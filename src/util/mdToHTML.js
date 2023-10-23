import Showdown from "showdown";

const convert = new Showdown.Converter()


function mdToHTML(message) {
    const str = convert.makeHtml(message);
    return str
}


export default mdToHTML;