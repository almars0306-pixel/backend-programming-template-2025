const gachaService = require('./gacha-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function handleGacha(request, response, next) {
  try {
    const { userId } = request.body;
    const result = await gachaService.playGacha(userId);

    if (result.error === 'LIMIT_REACHED') {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Maksimal gacha 5 kali sehari!'
      );
    }

    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

module.exports = { handleGacha };
