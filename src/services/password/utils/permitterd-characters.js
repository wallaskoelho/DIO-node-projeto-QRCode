
async function permitterdCharacters(){
    let permitterd = [];

    if(process.env.UPPERCASE_LETTERS === "true"){
        permitterd.push(..."ABCDEFGHIJKLMNOPQRSTUVXZWY")
    } 
    

    if(process.env.LOWERCASE_LETTERS === "true"){
        permitterd.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS === "true"){
         permitterd.push(..."0123456789")
    }

    if(process.env.SPECIAL_CHARACTERS === "true"){
         permitterd.push(..."!@#$%&*")
    }

    return permitterd;
}

export default permitterdCharacters;