export class Project{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }
}

const project = {
    "_id": "65595847223b3a81d51c2a83",
    "name": "Cretaceous Camp",
    "description": "A Park like no other any *where* or *when* you go.",
    "creatorId": "6541827fc58db642d7c02476",
    "createdAt": "2023-11-19T00:35:19.769Z",
    "updatedAt": "2023-11-19T00:35:19.769Z",
    "__v": 0,
    "creator": {
        "_id": "6541827fc58db642d7c02476",
        "subs": [
            "auth0|6541827f39444cc3fe9a23a7"
        ],
        "email": "anothernewemail@new.email",
        "name": "anothernewemail",
        "picture": "https://s.gravatar.com/avatar/87d93fa56cfb84f69fde33613bc552ea?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fan.png",
        "createdAt": "2023-10-31T22:46:30.754Z",
        "updatedAt": "2023-10-31T22:46:30.754Z",
        "__v": 0,
        "id": "6541827fc58db642d7c02476"
    },
    "id": "65595847223b3a81d51c2a83"
}