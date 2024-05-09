import chalk from "chalk";
import prompt from "prompt";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QR CODE (1 - NORMAL ou (2 - TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha Apenas ente 1 e 2"),
        required: true,
    },
    
];

export default promptSchemaQRCode;