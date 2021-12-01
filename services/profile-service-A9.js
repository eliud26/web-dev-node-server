const dao = require('../db/profile/dao')

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        return dao.findProfile()
            .then(profile => res.json(profile[0]));
    }
    app.get('/rest/profile', getCurrentProfile)

    const updateCurrentProfile = (req, res) => {
        let profile = {
            ...req.body
        }
        return dao.updateProfile(req.params.id, profile)
            .then((status) => res.send(status))
    }
    app.put('/rest/profile/:id', updateCurrentProfile)
};