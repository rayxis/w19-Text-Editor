import {openDB} from 'idb';

let db;

// Function to initialize database
const initdb = async () =>
	db = await openDB('jate', 1, {
		// If the database doesn't exist or the version is upgraded, this upgrade function will run
		upgrade(db) {
			// If the object store already exists, skip creating it
			if (db.objectStoreNames.contains('jate')) {
				console.log('jate database already exists');
				return;
			}
			// Create object store "jate" in the database
			db.createObjectStore('jate', {keyPath: 'id', autoIncrement: true});
			console.log('jate database created');
		}
	});

// Function to write to the database
export const putDb = async (content) => {
	// Initialize database if not yet done
	if (!db) await initdb();
	// Write to the 'jate' object store
	await db.put('jate', content);
};

// Function to read from the database
export const getDb = async () => {
	// Initialize database if not yet done
	if (!db) await initdb();
	// Read from the 'jate' object store
	return await db.getAll('jate');
};

// Initialize when the script is loaded
initdb();