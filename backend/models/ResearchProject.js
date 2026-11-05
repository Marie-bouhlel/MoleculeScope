
import mongoose from "mongoose";

const researchProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: ""
        },

        status: {
            type: String,
            enum: ["planning", "in-progress", "completed"],
            default: "planning"
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        proteins: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Protein"
            }
        ]
    },
    { timestamps: true }
);

const ResearchProject = mongoose.model(
    "ResearchProject",
    researchProjectSchema
);

export default ResearchProject;
