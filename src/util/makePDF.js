import htmlToPdfmake from "html-to-pdfmake";
import pdfmake from 'pdfmake/build/pdfmake';
import pdfFont from 'pdfmake/build/vfs_fonts'


function makePDF(html) {
    const value = htmlToPdfmake(html);
    pdfmake.vfs = pdfFont.pdfMake.vfs;
    var dd = { content: value };
    pdfmake.createPdf(dd).download();
}


export default makePDF;