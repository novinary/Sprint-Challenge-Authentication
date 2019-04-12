const db = require('./dbConfig');

module.exports = {
    add,
    find
};

function find() {
    return db('users').select('id', 'username', 'password');
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}