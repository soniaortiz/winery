import mongoose, {Schema, models}  from 'mongoose';

const GrapeSchema = new Schema ({
    grapeName: {type: String, required: true, index: {unique: true}},
    grapeDescription: {type: String, required: true}
})

module.exports = mongoose.models.Grape || mongoose.model('Grape', GrapeSchema);