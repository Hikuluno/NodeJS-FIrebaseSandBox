import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../creds.json");

const adminApp = initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore(adminApp);

export default db;
