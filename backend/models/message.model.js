const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderId : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiverId : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text : {
        type : String
    },
    image : {
        type : String
    }, 
}, { timestamps: true });

const Message = mongoose.model ('Message', messageSchema);

module.exports = Message;