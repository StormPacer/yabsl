async function get(q = "", page = 0, options = {}) {
    try {
        let query = "";
        for (let key in options) {
            query += `&${key}=${options[key]}`;
        };
        query += `&search=${q}`;
        query += `&page=${page}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/leaderboards${encodeURI(query)}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function infoById(id) {
    try {
        const res = await fetch(`https://scoresaber.com/api/leaderboard/by-id/${id}/info`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function infoByHash(hash, difficulty, gamemode = "SoloStandard") {
    try {
        let query = "";

        query += `&difficulty=${difficulty}`;
        query += `&gamemode=${gamemode}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/leaderboard/by-hash/${hash}/info${query}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function scoresById(id, page = 0, options = {}) {
    try {
        let query = "";
        for (let key in options) {
            if (key == "countries") {
                query += `&${key}=${options[key].join(",")}`;
                continue;
            }
            query += `&${key}=${options[key]}`;
        };
        query += `&page=${page}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/leaderboard/by-id/${id}/scores${encodeURI(query)}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function scoresByHash(hash, difficulty, page = 0, options = {}) {
    try {
        let query = "";
        for (let key in options) {
            if (key == "countries") {
                query += `&${key}=${options[key].join(",")}`;
                continue;
            }
            query += `&${key}=${options[key]}`;
        };
        query += `&page=${page}`;
        query += `&difficulty=${difficulty}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/leaderboard/by-hash/${hash}/scores${encodeURI(query)}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function getDifficulties(hash) {
    try {
        const res = await fetch(`https://scoresaber.com/api/leaderboards/get-difficulties/${hash}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

exports.LeaderboardsSS = {
    get,
    infoById,
    infoByHash,
    scoresById,
    scoresByHash,
    getDifficulties
}