async function get() {
    try {
        const res = await fetch(`https://hitbloq.com/api/map_pools`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function detailed() {
    try {
        const res = await fetch(`https://hitbloq.com/api/map_pools_detailed`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function popular() {
    try {
        const res = await fetch(`https://hitbloq.com/api/popular_pools`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Pools = {
    get,
    detailed,
    popular
}