module.exports = ({ env }) => {
  console.log('SendGrid API Key:', env('SENDGRID_API_KEY')); // Mostrar la clave API de SendGrid

  return {
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
          sizeLimit: 1000000000, // 1GB
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
        breakpoints: {
          large: 1000,
          medium: 750,
          small: 500,
          thumbnail: 64,
        },
      },
      path: 'src/database', // Configura el directorio padre persistente
    },

    // Configuración de SendGrid
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'marianoberton@hotmail.com',
          defaultReplyTo: 'consultasforchieri@gmail.com',
        },
      },
    },
  };
};
