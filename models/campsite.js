const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('mongoose-currency').loadType(mongoose)
const Currency = mongoose.Types.Currency

const commentSchema = new Schema(
    {
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const campsiteSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true, // no 2 documents can have the same name
        },
        description: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        elevation: {
            type: Number,
            required: false,
        },
        cost: {
            type: Currency,
            required: false,
            min: 0,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        comments: [commentSchema],
    },
    {
        timestamps: true, // adds createdAt and updatedAt fields
    }
)

const Campsite = mongoose.model('Campsite', campsiteSchema)

module.exports = Campsite
