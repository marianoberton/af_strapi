// config/plugins.js
module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 1000000000, // 1GB
        },
        breakpoints: {
          large: 1000,
          medium: 750,
          small: 500,
          thumbnail: 64,
        },
      },
      // Ajusta la ruta aquí al directorio de tu carpeta uploads en tu disco persistente
      path: 'src/database/uploads',
    },
  });
  