async function get(q = "", page = 0, countries = [], withMetadata = true) {
    try {
        let query = "";
        if (countries.length > 0) query += `&countries=${countries.join(",")}`;
        query += `&search=${q}`;
        query += `&page=${page}`;
        query += `&withMetadata=${withMetadata}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/players${encodeURI(query)}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function count(q = "", countries = []) {
    try {
        let query = "";
        if (countries.length > 0) query += `&countries=${countries.join(",")}`;
        query += `&search=${q}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/players/count${encodeURI(query)}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function basic(id) {
    try {
        const res = await fetch(`https://scoresaber.com/api/player/${id}/basic`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function full(id) {
    try {
        const res = await fetch(`https://scoresaber.com/api/player/${id}/full`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function scores(id, sort = "top", page = 0, limit = 15, withMetadata = true) {
    try {
        let query = "";
        query += `&sort=${sort}`;
        query += `&page=${page}`;
        query += `&limit=${limit}`;
        query += `&withMetadata=${withMetadata}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://scoresaber.com/api/player/${id}/scores${query}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Players = {
    get,
    count,
    basic, 
    full,
    scores
}