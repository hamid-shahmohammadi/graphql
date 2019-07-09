import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';


// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/friends',
 {useNewUrlParser: true},
 function(error){
    console.log(error);
});


const friendSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    language: String,
    email: String,
    contacts: Array
});

const Friends = mongoose.model('friends', friendSchema);



export { Friends };
