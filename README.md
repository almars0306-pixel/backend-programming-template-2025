# Backend Programming Template (2025)

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

# Gacha System API - Backend Programming Quiz

## Fitur Utama

1. Sistem Gacha Otomatis: User dapat melakukan percobaan gacha untuk mendapatkan hadiah dari koleksi Prize Pool secara acak.
2. Pembatasan Harian (Daily Limit): Setiap User ID dibatasi hanya dapat melakukan gacha maksimal 5 kali dalam sehari.
3. Stok Hadiah: Sistem secara otomatis mengurangi remainingQuota pada koleksi Prize Pool di MongoDB Atlas setiap kali ada user yang menang (status "Win").
4. Riwayat Gacha: Setiap percobaan gacha dicatat ke dalam database, baik user menang maupun kalah.

### sistemnya Jalankan Gacha

- URL: `/api/gacha`
- Method: `POST`
- Request Body (JSON) (bagian raw):
  {
  "userId": "string"
  }
