import chalk from "chalk";
import qr from "qrcode-terminal";


async function handle (err, result){
    
    if(err){
        console.log(chalk.red.italic("Erro on applicattion"))
        return;
    }
    const isSmall = result.type == 2;

    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QR Code geradocom sucesso:\n"));
        console.log(qrcode);
    })
}

export default handle;