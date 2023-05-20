import axios from 'axios';
import { USER_API } from './userApi';
class UserService {
    static getUsers() {
        return axios.get(USER_API);
    }
}

export default UserService;