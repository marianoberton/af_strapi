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
      path: 'src/database', // Configura el directorio padre persistente
    },
  });
  