const nodemailer = require('nodemailer');
const twilio = require('twilio');
const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fitlife.uem@gmail.com', 
    pass: 'knoa miit pydi rtoi' 
  }
});

exports.sendContactForm = (req, res) => {
    const { name, email, phone, countryCode, queryType, message } = req.body;
  
    let mailOptions = {
      from: 'fitlife.uem@gmail.com',
      to: 'fitlife.uem@gmail.com', // Correo electrónico del administrador
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${countryCode}${phone}        
        Tipo de consulta: ${queryType}
        Mensaje: ${message}
      `
    };
  
    let confirmationMailOptions = {
      from: 'fitlife.uem@gmail.com',
      to: email, // Correo electrónico del usuario
      subject: `Confirmación de recepción de mensaje`,
      text: `
        Hola ${name},
  
        Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
  
        Gracias por ponerte en contacto con nosotros.
  
        Saludos,
        El equipo de FitLife Gym
      `
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: 'Algo salió mal. Inténtalo de nuevo más tarde.'
        });
      } else {
        console.log('Email enviado: ' + info.response);
        transporter.sendMail(confirmationMailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Email de confirmación enviado: ' + info.response);
          }
        });
        res.send({
          success: true,
          message: 'Gracias por ponerte en contacto con nosotros. Nos pondremos en contacto contigo lo antes posible.'
        });
      }
    });

    client.messages.create({
      body: `
        Hola ${name},
    
        Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
    
        Gracias por ponerte en contacto con nosotros.
    
        Saludos,
        El equipo de FitLife Gym
      `,
      to: phone,  // Número de teléfono del usuario
      from: '++15513776949' // Tu número de teléfono de Twilio
    })
    .then((message) => console.log(message.sid));
  }