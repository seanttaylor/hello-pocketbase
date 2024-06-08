import PocketBase from 'pocketbase';

const url = process.env.POCKETBASE_URL;
const client = new PocketBase(url);

const records = await client.collection('users').getFullList({
    sort: '-created',
});

console.log(records);