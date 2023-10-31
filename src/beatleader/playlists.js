async function get() {
    try {
        const res = await fetch(`https://api.beatleader.xyz/playlists`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function id(id) {
    try {
        const res = await fetch(`https://api.beatleader.xyz/playlist/${id}`).then(res => res.json());
        if (res.error) return null;
        return res;
    } catch (e) {
        throw new Error(e);
    };
}

async function image(playlistId, download = false, name = "", location = "./") {
    try {
        const res = await fetch(`https://api.beatleader.xyz/playlist/image/${playlistId}`).then(res => res.arrayBuffer());

        if (!download) return Buffer.from(res);

        const fs = require("fs");

        let fileName = name;
        if (!name) {
            const playlist = await id(playlistId);
            fileName = playlist.playlistTitle;
        };

        fs.writeFileSync(`${location}/${fileName}.png`, Buffer.from(res));
    } catch (e) {
        throw new Error(e);
    };
}

exports.PlaylistsBL = {
    get,
    id,
    image
}