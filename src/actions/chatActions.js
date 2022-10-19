export const ADD_CHAT = 'ADD_CHAT'
export const REMOVE_CHAT = 'REMOVE_CHAT'

export const addChatAC = (chatArr) =>({
    type:ADD_CHAT,
    payload: chatArr
})
export const removeChatAC = (chatArr) =>({
    type:REMOVE_CHAT,
})