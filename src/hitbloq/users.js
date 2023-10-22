async function scores(id, poolId, sort = "top", page = 0) {
    try {
        const res = await fetch(`https://hitbloq.com/api/user/${id}/scores?sort=${sort}&page=${page}&pool=${poolId}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function allScores(id, poolId, sort = "top") {
    try {
        const res = await fetch(`https://hitbloq.com/api/user/${id}/all_scores?sort=${sort}&pool=${poolId}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function badges(id) {
    try {
        const res = await fetch(`https://hitbloq.com/api/player_badges/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

exports.UsersHB = {
    scores,
    allScores,
    badges
}