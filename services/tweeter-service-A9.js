const dao = require('../db/tweets/tweet-dao')

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        return dao.findAllTweets()
            .then(tweets => res.json(tweets));
    }
    app.get('/rest/tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        return dao.createTweet(req.body).then(tweet => res.json(tweet))
    }
    app.post('/rest/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        return dao.deleteTweet(req.params.id)
            .then((status) => res.send(status))
    }
    app.delete('/rest/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const newTweet = req.body;
        if(newTweet.liked === true) {
            // newTweet.liked = false;
            newTweet.stats.likes--;
        } else {
            // newTweet.liked = true;
            newTweet.stats.likes++;
        }
        newTweet.liked = !newTweet.liked
        return dao.updateTweet(req.params.id, newTweet)
           .then((status)=> {
               res.send(status)
           })
    }
    app.put('/rest/tweets/:id/like', likeTweet);

};

