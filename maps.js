// OWOP maps
// injector @ https://greasyfork.org/en/scripts/443271-owop-maps

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buildMap(x, y, map_array) {
    for(const cell of map_array) {
        await sleep(30);
        OWOP.world.setPixel(x + cell[0], y + cell[1], cell[2]);
    }
}

function createMap(x, y, w, h) {
    let found_map = []
    for(let i = y; i < y + h; i++) {
        for (let j = x; j < x + w; j++) {
            found_map.push([j + x, i + x, OWOP.world.getPixel(j, i)]);
        }
    }
    return found_map;
}
