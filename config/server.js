module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'GPUNCKqg79YAt+MDPNFW/A==',
      'fiDKbfe4tQNB2P9au6aM+w==',
      'nmRsqaDJsvw3LUGt4oYw5Q==',
      'OlKhDEDx9sfA+Y43dO2T+w=='
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
