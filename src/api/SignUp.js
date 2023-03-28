import api from "../axios/api"

const addSign = async(newUser) => {
    await api.post('/signup', newUser);
}

const confirmEmail = async(userEmail) => {
    await api.post('/validate', userEmail)
}
const postBoard = async()=> {
    await api.post('/posts')
}
export {addSign, confirmEmail, postBoard};