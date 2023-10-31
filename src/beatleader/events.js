async function get(options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/events${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function id(id) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/event/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.Events = {
    get,
    id
}