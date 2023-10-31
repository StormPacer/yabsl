async function get() {
    try {
        const res = await fetch(`https://api.accsaber.com/ranked-maps`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function id(leaderboardId) {
    try {
        const res = await fetch(`https://api.accsaber.com/ranked-maps/${leaderboardId}`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function category(category) {
    try {
        const res = await fetch(`https://api.accsaber.com/ranked-maps/category/${category}`).then(res => res.json());
        return res;
    } catch (e) {
        throw new Error(e);
    }
}

async function playlist(download = false, name = "", location = "./") {
    try {
        if (!download) return await fetch(`https://api.accsaber.com/ranked-maps/playlist`).then(res => res.json());
        const res = await fetch(`https://api.accsaber.com/ranked-maps/playlist`).then(res => res.json());

        const fs = require("fs");

        let fileName = name;
        if (!name) {
            fileName = "RankedMaps";
        };

        fs.writeFileSync(`${location}/${fileName}.bplist`, JSON.stringify(res, null, 2));

        return res;
    } catch (e) {
        throw new Error(e);
    }
}

exports.MapsAS = {
    get,
    id,
    category,
    playlist
}