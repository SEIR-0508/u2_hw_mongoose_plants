const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)
const Plants = mongoose.model('plants', plantSchema)

module.exports = Plants