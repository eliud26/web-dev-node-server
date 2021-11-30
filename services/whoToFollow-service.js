const dao = require ('../db/WhoToFollowList/dao')

module.exports = (app) => {
    const findWhoToFollowList = (req, res) => {
        return dao.findAllWhoToFollowList()
            .then(who => res.json(who));
    }
    app.get('/api/followList', findWhoToFollowList)
}