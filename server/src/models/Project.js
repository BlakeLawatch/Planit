
import { Schema } from "mongoose";

export const ProjectSchema = new Schema({

    name: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }
},
    {
        timestamps: true, toJSON: { virtuals: true }
    })

ProjectSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})