async function get(options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/clans${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(`${e}`);
    };
}

async function tag(tag, options = {}) {
    try {
        let query = "";
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                query += `&${key}=${options[key]}`;
            }
        }

        query = query.replace("&", "?");

        const res = await fetch(`https://api.beatleader.xyz/clans/${tag}${query}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(`${e}`);
    };
}

exports.Clans = {
    get,
    tag
}