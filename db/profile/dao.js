const model = require('./model');

const findProfile = () => model.find();

const updateProfile = (id, profile) => model.updateOne({_id: id}, {$set: profile});

module.exports = {
    findProfile, updateProfile
}