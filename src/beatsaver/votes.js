async function get(since = new Date().toISOString()) {
    try {
        const res = await fetch(`https://beatsaver.com/api/vote?since=${since}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Votes = {
    get
}