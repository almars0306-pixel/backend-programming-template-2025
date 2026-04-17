const gachaController = require('./gacha-controller');

module.exports = (app) => {
  app.post('/gacha', gachaController.handleGacha);
  // Tambahkan route bonus di sini nanti
};
