let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let db = require('../utils/db');

let userSchema = new Schema({
    title:
        {
            type:   String
        },
    completed:
        {
            type: Boolean,
            default: false
        },
    created:
        {
            type: Date,
            default: Date.now
        }
});
module.export = db.model('todo', userSchema);