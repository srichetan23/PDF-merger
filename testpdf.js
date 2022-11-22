const PDFmerger=require('pdf-merger-js')

var merger=new PDFmerger()

const mergePdfs=async(p1,p2)=>{
    await merger.add(p1);
    await merger.add(p2);
    // let d=new Data().getTime();
    // return d;
    await merger.save(`public/$merged.pdf`);
}

module.exports={mergePdfs}