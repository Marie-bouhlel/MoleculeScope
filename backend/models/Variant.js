
import mongoose from "mongoose";

const variantSchema = new mongoose.Schema(
    {
        protein: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Protein",
            required: true
        },

        position: {
            type: Number,
            required: true,
            min: 1
        },

        originalAA: {
            type: String,
            required: true,
            uppercase: true,
            minlength: 1,
            maxlength: 1
        },

        alteredAA: {
            type: String,
            required: true,
            uppercase: true,
            minlength: 1,
            maxlength: 1
        },

        description: {
            type: String,
            default: ""
        },

        evidence: {
            type: String,
            default: "Not specified"
        },

        source: {
            type: String,
            default: "Manual"
        }
    },
    { timestamps: true }
);

const Variant = mongoose.model("Variant", variantSchema);

export default Variant;
