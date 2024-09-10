'use strict';

module.exports = {
  async send(ctx) {
    const { nombre, correo, mensaje, categoria } = ctx.request.body;

    try {
      // Enviar el correo usando el plugin de email (SendGrid)
      await strapi.plugins['email'].services.email.send({
        to: 'consultasforchieri@gmail.com', // Cambia esto al correo donde quieres recibir los mensajes
        from: 'consultasforchieri@gmail.com', // El remitente que configuraste
        subject: `Nuevo mensaje de contacto: ${categoria}`,
        text: `
          Nombre: ${nombre}
          Correo: ${correo}
          Mensaje: ${mensaje}
          Categoría: ${categoria}
        `,
      });

      // Responder con éxito
      ctx.send({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      // Manejar errores
      console.error('Error al enviar el correo:', error);
      ctx.badRequest(null, { error: 'Error al enviar el correo' });
    }
  },
};
