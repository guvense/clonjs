

var fs=require('fs')
var express=require('express');
var request=require('request');
var app=express();

var clon=function() {

};

clon.prototype.connect=function(fileName, port,direction) {

    var readF=fs.readFile(fileName,function(err,data) {

        if(err){ return callback(err)}
        else{
            app.get(direction,function(req,res) {

                console.log('server active')
                console.log(req.connection.remoteAddress+direction);
                res.end(data.toString());
            });
            app.listen(port);

        }
    })

}

clon.prototype.getPdfFromLink=function(url,setFileName,callback){

        var wstream=fs.createWriteStream(setFileName)
        request.get(url).
        on('response',function (response) {
            console.log("response status code"+response.statusCode);

        }).pipe(wstream);
        
        wstream.on('finish',function() {
            console.log('stream done');
        })

    

}



module.exports=new clon();
