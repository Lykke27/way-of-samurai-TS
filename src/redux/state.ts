let rerenderEntireTree = (state: StateType) => {
    console.log('State changed')
}

export type SidebarType = {
    sidebarFriends: Array<SidebarFriendsType>
}

export type SidebarFriendsType = {
    id: number
    avatar: string
    name: string
}

export type FriendsPageType = {
    friendsData: Array<FriendsDataType>
}

export type FriendsDataType = {
    id: number
    name: string
    avatar: string
}

export type DialogsPageType = {
    messagesData: Array<MessagesDataType>
    dialogsData: Array<DialogsDataType>
}

export type MessagesDataType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
    avatar: string
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    friendsPage: FriendsPageType
    sidebar: SidebarType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!', likeCount: 5},
            {id: 2, message: "It's my first post", likeCount: 15},
            {id: 3, message: "It's my first post", likeCount: 15},
            {id: 4, message: "It's my first post", likeCount: 17},
            {id: 5, message: "It's my first post", likeCount: 0},
        ],
        newPostText: "HelloBoi"
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Че как?'},
            {id: 3, message: 'йоу бро))'},
            {id: 4, message: 'йоу'}
        ],
        dialogsData: [
            {id: 1, name: 'Вася', avatar: 'https://davepagurek.com/wp-content/uploads/2010/06/TrollFace-150x150.gif'},
            {
                id: 2,
                name: 'Сергей',
                avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWY0YmQ3YTYtZjc2My00NTE4LTliODEtYmRmZDQwY2UzZmM5XC9kMjZ5ZXIxLTQyMWJiNWI4LTlmYzItNGQ1YS1iMmQxLTFlMWY4MWIyNmI4Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NGftGliwoCe62wFfNDfOvJS1OHr-DpDAcGBBHsyT4MU'
            },
            {id: 3, name: 'Петя', avatar: 'https://estnn.com/wp-content/uploads/2018/08/CSGO-150x150.png'},
            {
                id: 4,
                name: 'Катя',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU76yRpDscFUVMSRBNy6mUvRZJg5KxftYE4w&usqp=CAU'
            }
        ],
    },
    friendsPage: {
        friendsData: [
            {id: 1, name: 'Вася', avatar: 'https://davepagurek.com/wp-content/uploads/2010/06/TrollFace-150x150.gif'},
            {
                id: 2,
                name: 'Сергей',
                avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWY0YmQ3YTYtZjc2My00NTE4LTliODEtYmRmZDQwY2UzZmM5XC9kMjZ5ZXIxLTQyMWJiNWI4LTlmYzItNGQ1YS1iMmQxLTFlMWY4MWIyNmI4Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NGftGliwoCe62wFfNDfOvJS1OHr-DpDAcGBBHsyT4MU'
            },
            {id: 3, name: 'Петя', avatar: 'https://estnn.com/wp-content/uploads/2018/08/CSGO-150x150.png'},
            {
                id: 4,
                name: 'Катя',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU76yRpDscFUVMSRBNy6mUvRZJg5KxftYE4w&usqp=CAU'
            }
        ]
    },
    sidebar: {
        sidebarFriends: [
            {id: 1, name: 'Вася', avatar: 'https://davepagurek.com/wp-content/uploads/2010/06/TrollFace-150x150.gif'},
            {
                id: 2,
                name: 'Сергей',
                avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWY0YmQ3YTYtZjc2My00NTE4LTliODEtYmRmZDQwY2UzZmM5XC9kMjZ5ZXIxLTQyMWJiNWI4LTlmYzItNGQ1YS1iMmQxLTFlMWY4MWIyNmI4Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.NGftGliwoCe62wFfNDfOvJS1OHr-DpDAcGBBHsyT4MU'
            },
            {id: 3, name: 'Петя', avatar: 'https://estnn.com/wp-content/uploads/2018/08/CSGO-150x150.png'},
        ]
    }
}

export const addPost = (): void => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string): void => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer;
}

export default state;
