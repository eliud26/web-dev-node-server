const model = require('./model')

const findAllWhoToFollowList = () =>
    model.find();

module.exports = {
    findAllWhoToFollowList
}