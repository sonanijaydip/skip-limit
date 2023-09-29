var user_model = require('../model/usermodel')

// var register_model = require('../model/registermodel');



exports.register_user = async (req, res) => { 

   for(let i=1; i<100;i++){  

     req.body.user_no = i;

     var data = await user_model.create(req.body)


}
     res.status(200).json({
          status:'success',
          data
     })

}

