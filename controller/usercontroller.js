var user_model = require('../model/usermodel')

// var register_model = require('../model/registermodel');



exports.register_user = async (req, res) => { 

   for(let i=0; i<100;i++){  

     req.body.user_no = i;

     var data = await user_model.create(req.body)

}
     res.status(200).json({
          status:'success',
          data
     })
}

exports.select_data = async (req, res) => {
     
     // var data_user = (+req.query.page -1) * 10;
     // var data_user = (+req.query.page -1) * 5;
     var data_user = (+req.query.page -1) * 15;
     

     // var data = await user_model.find().skip(data_user).limit(10);
     // var data = await user_model.find().skip(data_user).limit(5);
     var data = await user_model.find().skip(data_user).limit(15);

     res.status(200).json({
          status:'success',
          data
     })
}

