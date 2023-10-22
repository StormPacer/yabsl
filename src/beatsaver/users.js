async function id(id) {
    try {
        const res = await fetch(`https://beatsaver.com/api/users/id/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function name(name) {
    try {
        const res = await fetch(`https://beatsaver.com/api/users/name/${name}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.UsersBS = {
    id,
    name
}