async function latest(sort = "CREATED", before = undefined, after = undefined) {
    try {
        let query = `&sort=${sort}`;
        if (before) query += `&before=${before}`;
        if (after) query += `&after=${after}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://beatsaver.com/api/maps/latest?${query}`).then(res => res.json());
        if (res.error) return null;
        const playlists = res.docs;
        return playlists;
    } catch (e) {
        throw new Error(e);
    }
}

async function search(sortOrder = "Latest", q = "", page = 0, options = {}) {
    try {
        let query = "";
        for (let key in options) {
            query += `&${key}=${options[key]}`;
        };
        query += `&sortOrder=${sortOrder}`
        query += `&q=${q}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://beatsaver.com/api/playlists/search/${page}${encodeURI(query)}`).then(res => res.json());
        if (res.error) return null;
        const playlists = res.docs;
        return playlists;
    } catch (e) {
        throw new Error(e);
    }
}

async function id(id, page = 0) {
    try {
        const res = await fetch(`https://beatsaver.com/api/playlists/id/${id}/${page}`).then(res => res.json());
        if (res.error) return null;
        const playlists = res.docs;
        return playlists;
    } catch (e) {
        throw new Error(e);
    }
}

async function user(id, page = 0) {
    try {
        const res = await fetch(`https://beatsaver.com/api/playlists/user/${id}/${page}`).then(res => res.json());
        if (res.error) return null;
        const playlists = res.docs;
        return playlists;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Playlists = {
    latest,
    search,
    id,
    user
}