const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcryptjs = require("bcryptjs");
const WORK_FACTOR = 10;

const EMAIL_DOMAIN = /@et\.mde\.es$/;

const userSchema = new Schema(
    {
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
            enum: [
                "Soldado", 
                "Cabo", 
                "Cabo Primero",
                 "Sargento",
                 "Sargento Primero",
                 "Brigada",
                 "Subteniente",
                 "Teniente",
                 "Capitan",
                 "Comandante",
                 "Teniente Coronel"
                ],
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
            required: "Email is required",
            match: [EMAIL_DOMAIN, "The e-mail must have the domain @et.mde.es"]
        },
        role: {
            type: String,
            enum: ["Authority", "Manager", "Command", "Users"],
            default: "Users"
        },
        avatar: {
            type: String,
        },
        password: {
            type: String,
            required: "User password is required",
            minlength: [8, "User password neeeds al least 8 chars"],
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                delete ret.password;
                return ret;
            },
        },
    }
);
//PASSWORD //
userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        bcryptjs
            .hash(this.password, WORK_FACTOR)
            .then((hash) => {
                this.password = hash;
                next();
            });
    } else {
        next();
    }
});

userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcryptjs.compare(passwordToCheck, this.password);
};

//Asignar roles basados en rangos//

userSchema.pre("save", function (next) {
    if (this.isModified("rank")) {
        if (["Comandante", "Teniente Coronel"].includes(this.rank)) {
            this.role = "Authority";
        } else if (["Cabo Primero","Sargento","Sargento Primero", "Brigada"].includes(this.rank)) {
            this.role = "Manager";
        } else if (["Subteniente", "Teniente", "Capitan"].includes(this.rank)) {
            this.role = "Command";
        } else {
            this.role = "User";
        }
    }
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;