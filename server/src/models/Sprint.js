import { Schema } from "mongoose";

export const SprintSchema = new Schema({

    name: { type: String, required: true },
    projectId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    isOpen: { type: Boolean, default: false }
},
    {
        timestamps: true, toJSON: { virtuals: true }
    })

SprintSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})
