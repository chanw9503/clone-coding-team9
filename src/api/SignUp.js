import api from "../axios/api"

const addSign = async(newUser) => {
    await api.post('/signup', newUser);
}
export {addSign};