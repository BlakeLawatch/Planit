export class Note{
    constructor(data){
        this.id = data.id
        this.body = data.body
        this.taskId = data.taskId
        this.projectId = data.projectId
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date (data.updatedAt)
        this.creator = data.creator
    }
}

const note = {
    "body": "this should also work 100%",
    "taskId": "655cef0de11a12e1197010f7",
    "projectId": "655cd145e11a12e119701005",
    "creatorId": "6541827fc58db642d7c02476",
    "_id": "655d72c647274a4f15fe1957",
    "createdAt": "2023-11-22T03:17:26.449Z",
    "updatedAt": "2023-11-22T03:17:26.449Z",
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
    "id": "655d72c647274a4f15fe1957"
}