const gachaController = require('./gacha-controller');

module.exports = (app) => {
  // Path ini akan otomatis digabung dengan prefix /api menjadi /api/gacha
  app.post('/gacha', gachaController.handleGacha);
};
