const ProductMd = require('../database/product')


module.exports = {


    getproduct(req, res) {
        if (req.query.productid) {
            const query = {
                productid: req.query.productid
            }
            var q = req.query.productid.split('_')
            ProductMd.paginate({productid: {$in: q}}, {
                page: +req.query.page,
                limit: +req.query.rows
            }, function (err, result) {
                result.rows = result.docs;
                delete result.docs;
                res.json(result);

            });
            return
        }
        ProductMd.paginate({}, {page: +req.query.page, limit: +req.query.rows}, function (err, result) {
            result.rows = result.docs;
            delete result.docs;
            res.json(result);

        });


    },
    addproduct(req, res) {
        if (req.body._id.length > 0) {

            ProductMd.findByIdAndUpdate(req.body._id, req.body).then((result) => {
                res.json(result)
            })
            return
        }
        delete req.body._id
        var productMd = new ProductMd(req.body)

        productMd.save((err, result) => {

            err ? console.log(err) : res.json(result)
        })
    },
    deleteproduct(req, res) {
        var query = {
            productid: req.params._id
        }
        if (req.body.product) {
            query = {
                _id: req.params._id
            }
            ProductMd.deleteMany(query, (err, result) => {

                err ? console.log(err) : res.json(result)
            })
            return
        } else if (req.params._id) {
            var params = req.params._id;

            var aryp = params.split(',');
            console.log(aryp);
            ProductMd.deleteMany({productid: {$in: aryp}}, (err, result) => {

                err ? console.log(err) : res.json(result)
            })
            return
        }
    },
    listproduct(req, res) {

        ProductMd.find(req.params, (err, result) => {

            err ? console.log(err) : res.json(result)

        })
    }
}





