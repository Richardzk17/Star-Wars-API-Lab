const baseUrl = 'https://swapi.dev/api/starships'

export async function getAllStarShips() {
    const res = await fetch(`${baseUrl}`)
    return res.json()
}

export async function getStarShipId(starshipId) {
    const res = await fetch(`${baseUrl}/${starshipId}`)
    return res.json()
}
