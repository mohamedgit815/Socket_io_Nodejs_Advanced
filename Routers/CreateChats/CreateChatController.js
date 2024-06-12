/// Model
const Model = require("../../Models/CreateChatModel");

// Packages
const asyncHandler = require('express-async-handler');

module.exports = {

    /*
        @Desc Add Product to Cart
        @Route /stripe/
        @Method Post
        @Access Private(Admin&User) 
    */
    createChat: asyncHandler(async (req, res) => {
        const model = Model({
            name: req.body.name , 
           // idGroup: "req.body._id"
        });

        console.log(req.ip);

        if(!model) {

            return res.status(404).json({
                message: "check your data"
            })

        } else {

            await model.save();
            
            return res.status(200).json({
               data: model
            });

        }
    }) ,




     /*
        @Desc Add Product to Cart
        @Route /stripe/
        @Method Post
        @Access Private(Admin&User) 
    */
    getChats: asyncHandler(async (req, res) => {
        const model = await Model.find()
        .sort({updatedAt: -1})
        .exec();
            //res.status(200).json({"msg": "Hellooooaaaaaaaaaaaaaaaaaaaaaa"});

        if(!model) {

            return res.status(404).json({
                message: "check your data"
            });

        } else {

            return res.status(200).json({
                data: model
            });

        }
    }) ,
}