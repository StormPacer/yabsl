async function get() {
    try {
        const res = await fetch(`https://api.accsaber.com/players`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function id(id, type = "overall") {
    try {
        const res = await fetch(`https://api.accsaber.com/players/${id}/${type}`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.PlayersAS = {
    get,
    id
}