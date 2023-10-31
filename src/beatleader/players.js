async function id(id, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/player/${id}${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function discord(id) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/player/discord/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function beatsaver(id) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/player/beatsaver/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function get(options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/players${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function event(id, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/player/event/${id}${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.PlayersBL = {
    id,
    discord,
    beatsaver,
    get,
    event
}