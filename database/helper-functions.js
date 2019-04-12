const db = require('./dbConfig');

module.exports = {
    add,
    find,
    findBy
};

function find() {
    return db('users').select('id', 'username', 'password');
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findBy(filter) {
    return db('users').where(filter);
}