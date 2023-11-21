export class Task{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.weight = data.weight
        this.projectId = data.projectId
        this.sprintId = data.sprintId
        this.creatorId = data.creatorId
        this.isComplete = data.isComplete
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }
}

const task = {
    "name": "Blake",
    "weight": 5,
    "projectId": "655cd145e11a12e119701005",
    "sprintId": "655cd14be11a12e11970100e",
    "creatorId": "6541827fc58db642d7c02476",
    "isComplete": false,
    "_id": "655cf48ee11a12e119701190",
    "createdAt": "2023-11-21T18:18:54.702Z",
    "updatedAt": "2023-11-21T18:18:54.702Z",
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
    "id": "655cf48ee11a12e119701190"
}