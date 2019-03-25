



const UserMd =require('../database/users')


    module.exports = {


        register(req,res){

            delete req.body._id
            
            userMd = new UserMd(req.body)

            userMd.save((err,result) => {
                // post /users/register => return u need date
                err?console.log(err):res.json({
                    state:'200',
                    data:{
                        username:req.body.username,
                        gender:req.body.gender,
                        name:req.body.name,
                        access:req.body.access,
                        job:req.body.job,
                        level:req.body.level,
                        avatar:req.body.avatar
                    }
                })
            })
        },

        login(req,res){

            
            
            UserMd.findOne(req.body,(err,result) => {
                // post /users/login => return u need date
                
                if(result == null){

                    res.json({
                        state:'200',
                        data:'null'
                    })
                    return
                }
                err?console.log(err):res.json({
                    state:'200',
                    data:{
                        username:result.username,
                        gender:result.gender,
                        name:result.name,
                        access:result.access,
                        job:result.job,
                        level:result.level,
                        avatar:result.avatar
                    }
                })
            })



        },
        getUsers(req,res){

            if(req.query.name){

                var query = {
                    "name": new RegExp(req.query.name,'i')
                  }
                  UserMd.paginate(query, { page: +req.query.page, limit: +req.query.rows}, function(err, result) {
                    result.rows = result.docs;
                    delete result.docs;
                    res.json(result);
                });

                return
            }
            UserMd.paginate({}, { page: +req.query.page, limit: +req.query.rows }, function(err, result) {
                result.rows = result.docs;
                    delete result.docs;
                    res.json(result);
            });
        },
        deleteUser(req,res){
                    var query={
                            _id:req.params.id
                        }
            UserMd.remove(query,(err,result) => {
                err?console.log(err):res.json(result)
            })
        },
        getUser(req,res){
            var query={
                _id:req.params.id
            }
            UserMd.findOne(query,(err,result) => {
                err?console.log(err):res.json(result)
            })
        },
        updata(req,res){
            UserMd.findOneAndUpdate({_id:req.body._id},req.body,(err,result) => {
                res.json(result)
            })
        }
    }






