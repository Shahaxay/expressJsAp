const path=require('path');

const rootDir=require('../util/path');

exports.showContactUsPage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
};

exports.showSuccessPage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};

exports.showPageNotFoundPage=(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","page-not-found.html"));
};


