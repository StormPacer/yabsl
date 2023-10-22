async function id(id) {
    try {
        const res = await fetch(`https://scoresaber.com/api/ranking/request/${id}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function leaderboardId(id) {
    try {
        const res = await fetch(`https://scoresaber.com/api/ranking/request/by-id/${id}`).then(res => res.json());
        if (res.errorMessage) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

exports.Rankings = {
    id,
    leaderboardId
}