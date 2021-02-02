export async function getUserData(user, key) {
    const res = await fetch(`https://api.unsplash.com/users/${user}/?client_id=${key}`)
    const json = await res.json()
    return json
}

export async function getUserPhotos(user, key) {
    const res = await fetch(`https://api.unsplash.com/users/${user}/photos/?client_id=${key}`)
    const json = await res.json()
    return json
}