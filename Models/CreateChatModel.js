const {Schema , model} = require('mongoose');

const schema = new Schema({

    idGroup: { /// This to make Automatic ID
        type: Schema.Types.ObjectId ,
        index: true,
        required: true,
        auto: true,
    },

    name: {
        type: String ,
        required: true
    },

}, {timestamps: true});


schema.virtual('id').get(function(){
    return this._id.toHexString();
});

schema.set('toJSON',{
    virtuals: true
});

module.exports = model('Groups', schema);