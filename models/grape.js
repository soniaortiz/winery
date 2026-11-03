import mongoose, {Schema}  from 'mongoose';

const GrapeSchema = new Schema ({
    grapeName: {type: String, required: true, index: {unique: true}},
    grapeDescription: {type: String, required: true},
    grapeType: {type: Number, required: true}
})
export const Grape = mongoose.models.Grape || mongoose.model('Grape', GrapeSchema);

