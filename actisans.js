const mongoose = require ("mongoose")
const actisanSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    Phonenumber: {
        type: Number,
        required: true
    },
    Occupation: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    }
},{
timestamps: true
})

const Actisans = mongoose.model('Actisans', actisanSchema)

// export default Actisans;
module.exports = Actisans;