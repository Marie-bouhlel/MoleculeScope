
import mongoose from "mongoose";

const proteinSchema = new mongoose.Schema(
    {
        accession: {
            type: String,
            required: [true, "Protein accession is required"],
            unique: true,
            trim: true
        },

        name: {
            type: String,
            required: [true, "Protein name is required"],
            trim: true
        },

        organism: {
            type: String,
            required: [true, "Organism is required"],
            trim: true
        },

        sequence: {
            type: String,
            required: [true, "Protein sequence is required"],
            uppercase: true,
            trim: true
        },

        function: {
            type: String,
            default: "Not specified",
            trim: true
        },

        source: {
            type: String,
            default: "Manual"
        }
    },
    {
        timestamps: true
    }
);

const Protein = mongoose.model("Protein", proteinSchema);

export default Protein;
