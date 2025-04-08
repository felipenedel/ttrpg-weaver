// This is a WIP

import * as admin from 'firebase-admin';
import * as fs from 'fs/promises';
import * as path from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
import {db} from '@firestore/firestoreClient';

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const MIGRATIONS_DIR = path.join(__dirname, 'migrations');
const MIGRATION_LOG = db.collection('_migrations');

async function runMigrations() {
  const files = (await fs.readdir(MIGRATIONS_DIR))
    .filter(f => f.endsWith('.ts') || f.endsWith('.js'))
    .sort();

  for (const file of files) {
    const id = path.basename(file);
    const alreadyRan = await MIGRATION_LOG.doc(id).get();
    if (alreadyRan.exists) {
      console.log(`⏩ Skipping ${id}, already applied`);
      continue;
    }

    const fullPath = path.join(MIGRATIONS_DIR, file);
    const fullUrl = pathToFileURL(fullPath).href;
    console.log(`⚙️ Running ${id}...`);

    try {
      await import(fullUrl);
      await MIGRATION_LOG.doc(id).set({runAt: new Date().toISOString()});
      console.log(`✅ Finished ${id}`);
    } catch (err) {
      console.error(`❌ Error in ${id}:`, err);
      break;
    }
  }

  console.log('🎉 All migrations complete');
  process.exit();
}

runMigrations();
