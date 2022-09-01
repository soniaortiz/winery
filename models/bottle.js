import mongoose, {Schema, models} from "mongoose";


const BottleSchema = new Schema({
    wineBottleType: String,
    wineBottleName: String,
    selectedGrapes: {type: [String], require: true}
    // country: {type: Schema.Types.ObjectId, ref: 'country'}
});

module.exports = models.bottle || mongoose.model('bottle', BottleSchema);