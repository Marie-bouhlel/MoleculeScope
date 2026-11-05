
import mongoose from "mongoose";

const analysisReportSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ResearchProject",
            required: true
        },

        protein: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Protein",
            required: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true
        },

        findings: {
            type: String,
            required: true
        },

        analysisType: {
            type: String,
            enum: ["sequence", "variant", "structure", "other"],
            default: "other"
        }
    },
    { timestamps: true }
);

const AnalysisReport = mongoose.model(
    "AnalysisReport",
    analysisReportSchema
);

export default AnalysisReport;
