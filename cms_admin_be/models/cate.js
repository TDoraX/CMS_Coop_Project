const CateMd = require('../database/cate')


module.exports = {


    getcate(req, res) {
        CateMd.find(req.params, (err, result) => {

            if (err) {
                console.log(err)
            } else {

                function reverseTree(data, pid) {
                    // console.log(data,pid)
                    var result = [], temp;
                    // data的对象是什么对象？model数据模型的对象
                    // 数据模型的对象转成字符串，再转成对象，而这时候的对象变成了JsonObject
                    var data = JSON.parse(JSON.stringify(data));
                    for (var i in data) {

                        if (data[i].parentid == pid) { // 如果查询到的对象内容的parentId和传递过来的pid是相同的
                            // console.log(data[i].parentid,pid)
                            result.push(data[i]);
                            temp = reverseTree(data, data[i]._id);
                            if (temp.length > 0) {
                                data[i].children = temp;
                            }
                        }
                    }
                    return result;
                }
                res.json(reverseTree(result, null))
            }
        })
    },
    addcate(req, res) {
        // console.log(req.body)
        delete req.body._id;
        const cateMd = new CateMd(req.body);

        cateMd.save((err, result) => {
            err ? console.log(err) : res.json(result)
        })
    },
    deletecate(req, res) {
        const q = req.params._id.split(',');
        CateMd.deleteMany({_id: {$in: q}}, (err, result) => {
            err ? console.log(err) : res.json(result)
        })
    }
};






