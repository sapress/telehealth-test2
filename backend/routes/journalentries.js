const router = require('express').Router();
let JournalEntry = require('../models/journalentry.model');

router.route('/').get((req, res) => {
    JournalEntry.find()
        .then((journalentries) => res.json(journalentries))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const prompt = req.body.description;
    const essay = req.body.duration;
    const date = Date.parse(req.body.date);

    const newJournalEntry = new JournalEntry({
        username,
        prompt,
        essay,
        date,
    });

    newExercise
        .save()
        .then(() => res.json('Journal Entry added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
