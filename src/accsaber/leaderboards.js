async function overallAcc() {
    try {
        const res = await fetch(`https://accsaber.com/api/leaderboards/overall`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function techAcc() {
    try {
        const res = await fetch(`https://accsaber.com/api/leaderboards/tech/standings`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function trueAcc() {
    try {
        const res = await fetch(`https://accsaber.com/api/leaderboards/true/standings`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function standardAcc() {
    try {
        const res = await fetch(`https://accsaber.com/api/leaderboards/standard/standings`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
} 

exports.LeaderboardsAS = {
    overallAcc,
    techAcc,
    trueAcc,
    standardAcc
}