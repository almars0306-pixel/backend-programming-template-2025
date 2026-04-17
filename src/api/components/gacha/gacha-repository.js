const { Gacha, PrizePool } = require('../../../models');

async function countDailyAttempts(userId) {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  return Gacha.countDocuments({
    userId,
    timestamp: { $gte: startOfDay },
  });
}

async function getAvailablePrizes() {
  return PrizePool.find({ remainingQuota: { $gt: 0 } });
}

async function createGachaRecord(userId, prizeName, isWinner) {
  if (isWinner) {
    await PrizePool.updateOne({ prizeName }, { $inc: { remainingQuota: -1 } });
  }
  return Gacha.create({ userId, prizeName, isWinner });
}

module.exports = { countDailyAttempts, getAvailablePrizes, createGachaRecord };
