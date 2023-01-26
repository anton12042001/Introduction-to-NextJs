export type User = {
    address: {
        city: string
        get: {
            lat: string
            lng: string
        }
        street: string
        zipcode: string
    }
    company: {
        bs: string
        catchPhrase: string
        name: string
    }
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}