export class Sprint{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.projectId = data.projectId
        this.creatorId = data.creatorId
        this.isOpen = data.isOpen
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }
}

const sprint = {
    "name": "Second Try",
    "projectId": "65595847223b3a81d51c2a83",
    "creatorId": "6541827fc58db642d7c02476",
    "isOpen": false,
    "_id": "655bb86bf1c3c3861d67c58d",
    "createdAt": "2023-11-20T19:50:03.926Z",
    "updatedAt": "2023-11-20T19:50:03.926Z",
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
    "id": "655bb86bf1c3c3861d67c58d"
}