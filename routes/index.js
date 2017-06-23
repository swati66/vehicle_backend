var express = require('express');
var router = express.Router();

var URL="mongodb://abmnukmr:123456789@ds131782.mlab.com:31782/abmnu"

const  db=require('monk')(URL)

const docs=db.get('abs')
/* GET home page. */
router.get('/welcom', function(req, res, next) {
 // res.render('index', { title: 'Express' });
    docs.find({}, function (err,docs) {
        if(err) console.log(err)
        else res.json(docs[0]);
    } )
});

router.get('/well', function (req, res, next) {

    docs.insert({"name": " ", "age": " "}, function (err, docs) {
        if(err)
            console.log("error");
        else
            res.send("successful");
    })
});


router.get('/wel', function(req, res, next) {
    res.send('asfhgsfdhafdh');
});

module.exports = router;
