type Picture = {
    url: string
}

export type PlayerId = string

export type Player = {
    id: PlayerId
    firstname: string
    lastname: string
    picture: Picture
    country: {
        code: string
        picture: Picture
    }
    sex: string
    shortname: string
    stats: {
        rank: number
        points: number
        weight: number
        height: number
        age: number
    }
}