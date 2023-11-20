const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validRequestTypes = ["Holidays and Leave", "Medical Leave", "Falily Welfare"];

const requestSchema = new Schema(
    {
        requestType: {
            type: String,
            enum: validRequestTypes,
        },
        name: {
            type: String,
            trim: true,
            required: "Name is required"
        },
        tim: {
            type: String,
            trim: true,
            unique: true,
            required: "TIM is required",
        },
        rank: {
            type: String,
            trim: true,
            required: "Rank is required",
        },
        surname: {
            type: String,
            trim: true,
            required: "Surname is required"
        },
        telephone: {
            type: Number,
            trim: true,
            required: "Telephone is required",
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: "Email is required"
        },

        reasons: {
            type: String,
            validate: {
                validator: function (reasons) {
                    if (this.requestType === "Holidays and Leave") {
                        const validReasons = [
                            "Permiso Oficial", "Asuntos Propios",
                            "Descanso Obligatorio", "Dia Adicional", "Dia por preparacion"
                        ];
                        return validReasons.includes(reasons);
                    } else if (this.requestType === "Medical Leave") {
                        const validReasons = [
                            "Contingencia Comun", "Contingencia Profesional", "Continuidad de baja", "Dia de Recuperacion"
                        ];
                        return validReasons.includes(reasons);
                    } else if (this.requestType === "Falily Welfare") {
                        const validReasons = [
                            "Flexibilidad Horaria", "Hijo menor de 3 años", "Hijo menor de 8 años", "Hijo menor de 12 años"
                        ];
                        return validReasons.includes(reasons);
                    }
                    return true;
                },
                message: "Invalid reasons for the selected request type.",
            }
        },
        periodFrom: {
            type: Date,
        },
        periodTo: {
            type: Date,
        },

        status: {
            type: String,
            enum: ["Pending", "Approved", "Denied", "Cancelled"],
            default: "Pending",
        },
        comments: {
            type: String,
        },
    },

    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    }
)

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;