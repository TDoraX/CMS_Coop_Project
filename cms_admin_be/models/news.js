const NewsMd = require('../database/news')


module.exports = {


    getnews(req, res) {
        if (req.query.newsid) {
            var query = {
                newsid: req.query.newsid
            }
            var q = req.query.newsid.split('_')
            NewsMd.paginate({newsid: {$in: q}}, {
                page: +req.query.page,
                limit: +req.query.rows
            }, function (err, result) {
                result.rows = result.docs;
                delete result.docs;
                res.json(result);

            });
            return
        }
        NewsMd.paginate({}, {page: +req.query.page, limit: +req.query.rows}, function (err, result) {
            result.rows = result.docs;
            delete result.docs;
            res.json(result);

        });


    },
    addnews(req, res) {
        if (req.body._id.length > 0) {

            NewsMd.findByIdAndUpdate(req.body._id, req.body).then((result) => {
                res.json(result)
            })
            return
        }
        delete req.body._id
        var newsMd = new NewsMd(req.body)

        newsMd.save((err, result) => {

            err ? console.log(err) : res.json(result)
        })
    },
    deletenews(req, res) {
        var query = {
            newsid: req.params._id
        }
        if (req.body.news) {
            query = {
                _id: req.params._id
            }
            NewsMd.deleteMany(query, (err, result) => {

                err ? console.log(err) : res.json(result)
            })
            return
        } else if (req.params._id) {
            var params = req.params._id;

            var aryp = params.split(',');
            NewsMd.deleteMany({newsid: {$in: aryp}}, (err, result) => {

                err ? console.log(err) : res.json(result)
            })
            return
        }
    },
    listnews(req, res) {

        NewsMd.find(req.params, (err, result) => {

            err ? console.log(err) : res.json(result)

        })
    }
}





