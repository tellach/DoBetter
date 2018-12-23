import jwt from "jsonwebtoken";
const JWT_SIGN_SECRET='0sf2df4d5f4sd53f45qfq5fqs5fqs5f5q3f4q';

function generateTokenForUser(userData){

    return jwt.sign({
            userId:userData.id,
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        }
    )

}
 export {generateTokenForUser}
