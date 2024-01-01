var usermodel = require("../model/usermodel");

exports.insert = async(req,res) =>{
    var data = await usermodel.create(req.body);

    var s1 = Number(req.body.s1);
    var s2 = Number(req.body.s2);
    var s3 = Number(req.body.s3);
    var s4 = Number(req.body.s4);
    var s5 = Number(req.body.s5);


    var total = s1+s2+s3+s4+s5 ;
    var rol_no = req.body.rollno ;

    var data2 = await usermodel.findOneAndUpdate( {rollno : rol_no}, {total : total});

    res.status(200).json({
        status:"success",
        data,
        data2,total
    });
}
exports.select = async(req,res) =>{
    var data = await usermodel.find();

    res.status(200).json({
        status:"success",
        data
    });
}
exports.delete = async(req,res) =>{
    var data = await usermodel.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status:"Data deleted successfully"   
    });
}       
   
exports.update = async(req,res) =>{
    var data = await usermodel.findByIdAndUpdate(req.params.id,req.body);

    var s1 = Number(req.body.s1);
    var s2 = Number(req.body.s2);
    var s3 = Number(req.body.s3);
    var s4 = Number(req.body.s4);
    var s5 = Number(req.body.s5);


    var total = s1+s2+s3+s4+s5 ;
    var rol_no = req.body.rollno ;

    var data2 = await usermodel.findOneAndUpdate( {rollno : rol_no}, {total : total});

    res.status(200).json({
        status:"Data updated successfully",
        data,
        data2,
        total
    });
}       

exports.five = async(req,res) =>{
    var data = await usermodel.find().limit(5).sort({total:1});

    res.status(200).json({
        status :"Top 5 Data find successfully",
        data
    });
}       
exports.ten = async(req,res) =>{
    var data = await usermodel.find().limit(10).sort({total:1});

    res.status(200).json({
        status:"Top 10 Data find successfully",
        data
    });
}    