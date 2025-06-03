import axios from "axios"

const GetUserData = async() => {
    const response =await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
}

export const UserService = {GetUserData}