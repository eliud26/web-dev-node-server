const dao = require('../db/profile/dao')

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        return dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));
    }
    app.get('/rest/profile/:id', getCurrentProfile)

    const updateCurrentProfile = (req, res) => {
        let profile = {
            ...req.body
        }
        return dao.updateProfile(req.params.id, profile)
            .then((status) => res.send(status))
    }
    app.put('/rest/profile/:id', updateCurrentProfile)
};