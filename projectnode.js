
    var express = require("express");
    require('http');
    var app = express();
    const PORT = process.env.PORT || 5000;

    app.get('/',  function(req, res) {

           res.send([{name:'wine1get'}, {name:'wine2get'}]);
    });

    app.put('/',  function(req, res) {

           res.send([{name:'wine1put'}, {name:'wine2put'}]);
    });


    var server = app.listen(PORT, function () {

      var host = server.address().address
      //var port = server.address().port
      console.log("Example app listening at http://%s:%s", host)

    })
