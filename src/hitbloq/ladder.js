async function get(id, page = 0) {
    try {
        const res = await fetch(`https://hitbloq.com/api/ladder/${id}/players/${page}`).then(res => res.json());
        return {
            players: res.ladder,
            last: res.length < 10 ? true : false,
            next: page + 1
        }
    } catch (e) {
        throw new Error(e);
    }
}

async function near(id, playerId) {
    try {
        const res = await fetch(`https://hitbloq.com/api/ladder/${id}/nearby_players/${playerId}`).then(res => res.json());
        return res.ladder;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Ladders = {
    get,
    near
}