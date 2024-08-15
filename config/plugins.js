// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        // Configuración para Cloudinary
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        // Configuración para local
        sizeLimit: 1000000000, // 1GB para el proveedor local
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
});
