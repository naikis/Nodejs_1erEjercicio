const nodemailer = require('nodemailer');

const send = async({mail, asunto = 'Gracias por registrarte :D!!', cuerpo}) => {
    try{
    const transporter = nodemailer.createTransport({
        /*host: 'smtp.gmail.com',
        port: 587,
        secure: false 
        es lo mismo que le service gmail*/
        service : process.env.MAIL_SERVICE || 'gmail',
        auth : {
            user: process.env.MAIL_USER || 'mail',
            pass: process.env.MAIL_PASSWORD || 'pass'
        }
    });
    const info = {
        to: mail,
        subject: asunto,
        html: cuerpo
    };
    const {messageId} = await transporter.sendMail(info);
    return messageId;
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {send};