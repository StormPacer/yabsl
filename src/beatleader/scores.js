async function get(id, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/player/${id}/scores${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function getCompact(id, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/player/${id}/scores/compact${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function getValue(id, hash, difficulty, mode) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/player/${id}/scoreValue/${hash}/${difficulty}/${mode}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function histogram(id, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/player/${id}/histogram${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function accGraph(id, leaderboardContext = 64) {
    try {
        let query = "";
        if (leaderboardContext !== 64) query = `?leaderboardContext=${leaderboardContext}`;

        const res = await fetch(`https://api.beatleader.xyz/player/${id}/accgraph${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function history(id, count = 50, leaderboardContext = 64) {
    try {
        let query = `?count=${count}`;
        if (leaderboardContext !== 64) query = `&leaderboardContext=${leaderboardContext}`;

        const res = await fetch(`https://api.beatleader.xyz/player/${id}/history${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function getPinnedScores(id, leaderboardContext = 64) {
    try {
        let query = "";
        if (leaderboardContext !== 64) query = `?leaderboardContext=${leaderboardContext}`;

        const res = await fetch(`https://api.beatleader.xyz/player/${id}/pinnedScores${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.ScoresBL = {
    get,
    getCompact,
    getValue,
    histogram,
    accGraph,
    history,
    getPinnedScores
}