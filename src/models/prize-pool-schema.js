module.exports = (db) =>
  db.model(
    'PrizePool',
    new db.Schema({
      prizeName: String,
      totalQuota: Number,
      remainingQuota: Number,
    })
  );
