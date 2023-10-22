async function id(id) {
    try {
        const res = await fetch(`https://beatsaver.com/api/maps/id/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(`Failed to fetch map with id ${id}`);
    };
};

async function hash(hash) {
    try {
        const res = await fetch(`https://beatsaver.com/api/maps/hash/${hash}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(`Failed to fetch map with hash ${hash}`);
    };
};

async function multiple(ids) {
    try {
        const res = await fetch(`https://beatsaver.com/api/maps/ids/${ids.join(",")}`).then(res => res.json());
        if (res.error) return null;

        const array = [];

        for (let key in res) {
            const map = res[key];
            array.push(map);
        };

        return array;
    } catch (e) {
        throw new Error(e);
    }
}

async function uploader(id, page = 0) {
    try {
        const res = await fetch(`https://beatsaver.com/api/maps/uploader/${id}/${page}`).then(res => res.json());
        if (res.error) return null;
        const maps = res.docs;
        return maps;
    } catch (e) {
        throw new Error(e);
    }
}

async function collaborations(id, before = new Date().toISOString(), pageSize = 20) {
    try {
        const res = await fetch(`https://beatsaver.com/api/maps/collaborations/${id}?before=${before}&pageSize=${pageSize}`).then(res => res.json());
        if (res.error) return null;
        const maps = res.docs;
        return maps;
    } catch (e) {
        throw new Error(e);
    }
}

async function latest(sort = undefined, pageSize = 20, before = undefined, after = undefined, automapper = false) {
    try {
        let query = "";
        if (sort) query += `&sort=${sort}`;
        if (before) query += `&before=${before}`;
        if (after) query += `&after=${after}`;
        if (automapper) query += `&automapper=${automapper}`;

        query += `&pageSize=${pageSize}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://beatsaver.com/api/maps/latest?${encodeURI(query)}`).then(res => res.json());
        if (res.error) return null;
        const maps = res.docs;
        return maps;
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
        query += `&page=${sortOrder}`;
        query += `&q=${q}`;

        query = query.replace("&", "?");

        const res = await fetch(`https://beatsaver.com/api/search/text/${page}${encodeURI(query)}`).then(res => res.json());
        if (res.error) return null;
        const maps = res.docs;
        return maps;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Maps = {
    id,
    hash,
    multiple,
    uploader,
    collaborations,
    latest,
    search
};