const NodeCache = require('node-cache');

const cache = new NodeCache({
    TTL: 20, // Cache standard time-to-live 
    checkperiod: 5, // Periodic check for expired keys
})

const getCache = (key) => cache.get(key);
const setCache = (key, value) => cache.set(key, value);

module.exports = {
    getCache,
    setCache
}