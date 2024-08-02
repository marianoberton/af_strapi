module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6v67Jo0zddzrEsU4gaW6DA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'VHQqiRheSJqApKJa4ctelw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '6k9Soyv1YrvRnknZkTking=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
