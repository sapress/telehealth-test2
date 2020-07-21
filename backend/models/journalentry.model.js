const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalentrySchema = new Schema(
    {
        username: { type: String, required: true },
        prompt: { type: String, required: true },
        essay: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    {
        timestamps: true,
    }
);

const JournalEntry = mongoose.model('JournalEntry', journalentrySchema);

module.exports = JournalEntry;
