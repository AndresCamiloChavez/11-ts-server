import jsonwebtoken from 'jsonwebtoken';


const generarToken = (id: number | string) =>{

    const token = jsonwebtoken.sign({id}, process.env.PRIVATE_KEY_JSON ?? 'DAF342423fadfa');
    return token;

}

export default generarToken;