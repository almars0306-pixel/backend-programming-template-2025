module.exports = (db) => {
  // Schema untuk riwayat gacha
  const gachaSchema = new db.Schema({
    userId: { type: String, required: true },
    prizeName: { type: String, default: 'Zonk' },
    isWinner: { type: Boolean, default: false },
    timestamp: { type: Date, default: Date.now },
  });

  // Schema untuk stok hadiah (Prize Pool)
  const prizePoolSchema = new db.Schema({
    prizeName: String,
    totalQuota: Number,
    remainingQuota: Number,
  });

  return {
    Gacha: db.model('Gacha', gachaSchema),
    PrizePool: db.model('PrizePool', prizePoolSchema),
  };
};
