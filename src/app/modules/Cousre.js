const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema

const Course = new Schema({
    _id: { type: 'number', },
    name: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },



}, {
    _id: false,
    timestamps: true
})

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
})
module.exports = mongoose.model('Course', Course)