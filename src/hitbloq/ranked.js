async function id(id) {
    try {
        const res = await fetch(`https://hitbloq.com/api/ranked_list/${id}`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function maps(id, page = 0) {
    try {
        const res = await fetch(`https://hitbloq.com/api/ranked_list_detailed/${id}/${page}`).then(res => res.json());
        return {
            maps: res,
            last: res.length < 30 ? true : false,
            next: page + 1
        }
    } catch(e) {
        throw new Error(e);
    }
}

exports.Ranked = {
    get,
    id,
    maps,
}