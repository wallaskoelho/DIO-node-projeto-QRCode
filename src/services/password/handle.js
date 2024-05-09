import permitterdCharacters from "./utils/permitterd-characters.js";

async function handle(){
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWROD_LENGTH;
    characters = await permitterdCharacters();
    

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characters.length);

        password += characters[index];
    }
    return password;
}

export default handle;