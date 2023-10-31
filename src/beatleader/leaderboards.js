async function id(id, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/leaderboard/${id}${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function clanRanking(leaderboardId, clanId, page = 1, count = 5) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/leaderboard/clanRankings/${leaderboardId}/${clanId}?page=${page}&count=${count}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function clanRankingGlobal(clanId, page = 1, count = 5) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/leaderboard/clanRankings/${clanId}?page=${page}&count=${count}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function hash(hash) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/leaderboards/hash/${hash}`).then(res => res.json());
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

        const res = await fetch(`https://api.beatleader.xyz/leaderboards${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function getGrouped(options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/leaderboards/grouped${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function ranking(id) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/leaderboard/ranking/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function statistic(id) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/leaderboard/statistic/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.LeaderboardsBL = {
    id,
    clanRanking,
    clanRankingGlobal,
    hash,
    get,
    getGrouped,
    ranking,
    statistic
}