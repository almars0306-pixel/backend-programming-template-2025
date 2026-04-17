module.exports = (db) =>
  db.model(
    'Gacha',
    new db.Schema({
      userId: { type: String, required: true },
      prizeName: { type: String, default: 'Zonk' },
      isWinner: { type: Boolean, default: false },
      timestamp: { type: Date, default: Date.now },
    })
  );
