const bcrypt = require('bcrypt');

const saltRounds = process.env.SALT_ROUNDS;

exports.hashPassword = async(password)=>{
    try{
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;
    }
    catch(error){
        console.log(error);
    }
}

exports.comparePassword = async(password, hash)=>{
    try{
        const valid = await bcrypt.compare(password,hash)
        return valid;
    }
    catch(error){
        console.log(error);
    }
}