import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();

const serviceAccount: ServiceAccount = require(process.env.FIRESTORE_SERVICEKEY || '../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();

if (process.env.FIRESTORE_EMULATOR_HOST) {
  console.log('Connecting to Firestore Emulator at:', process.env.FIRESTORE_EMULATOR_HOST);
  db.settings({
    host: process.env.FIRESTORE_EMULATOR_HOST,
    ssl: false,
  });
}