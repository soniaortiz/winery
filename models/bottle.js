import mongoose, {Schema} from "mongoose";


const BottleSchema = new Schema({
    wineBottleType: String,
    wineBottleName: String,
    selectedGrapes: {type: [String], require: true}
    // country: {type: Schema.Types.ObjectId, ref: 'country'}
});

export const  bottle = models.Bottle || mongoose.model('Bottle', BottleSchema);