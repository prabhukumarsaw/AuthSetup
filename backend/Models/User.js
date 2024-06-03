
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    }
)

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            role: this.role
        },
        "jwtseceretkey",
        { expiresIn: '1h' }
    )
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('User', userSchema);
module.exports = User;




