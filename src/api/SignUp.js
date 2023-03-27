import api from "../axios/api"

const addSign = async(newUser) => {
    await api.post('/signup', newUser);
}

const confirmEmail = async(userEmail) => {
    await api.post('/validate', userEmail)
}
export {addSign, confirmEmail};