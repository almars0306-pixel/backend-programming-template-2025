const gachaRepository = require('./gacha-repository');

async function playGacha(userId) {
  // Aturan 1: Cek limit 5 kali per hari
  const attempts = await gachaRepository.countDailyAttempts(userId);
  if (attempts >= 5) return { error: 'LIMIT_REACHED' };

  // Aturan 2: Ambil daftar hadiah yang kuotanya masih ada
  const availablePrizes = await gachaRepository.getAvailablePrizes();

  // Logika acak sederhana (misal: 20% peluang menang jika ada hadiah)
  const isWinningTurn = Math.random() < 0.2;

  if (isWinningTurn && availablePrizes.length > 0) {
    const wonPrize =
      availablePrizes[Math.floor(Math.random() * availablePrizes.length)];
    await gachaRepository.createGachaRecord(userId, wonPrize.prizeName, true);
    return { status: 'Win', prize: wonPrize.prizeName };
  }

  // Jika kalah atau hadiah habis
  await gachaRepository.createGachaRecord(userId, 'Zonk', false);
  return { status: 'Lose', prize: 'Maaf, coba lagi!' };
}

module.exports = { playGacha };
