
    var express = require("express");
    require('http');
    var app = express();


    app.get('/',  function(req, res) {

           res.send([{name:'wine1get'}, {name:'wine2get'}]);
    });

    app.put('/',  function(req, res) {

           res.send([{name:'wine1put'}, {name:'wine2put'}]);
    });


    var server = app.listen(8080, function () {

      var host = server.address().address
      var port = server.address().port
      console.log("Example app lis  tening at http://%s:%s", host, port)

    })
