import bcrypt from 'bcrypt'
import { getAllUsers, getUserById, getUserByEmail, deleteUser, updateUser, addUser } from '../services/users.mjs';


const getAll = async () => {
    const results = await getAllUsers();
    return results;
}

const getByEmail = async (email) => {
    const result = await getUserByEmail(email);
    return result;
}

const getById = async (id) => {
    const result = await getUserById(id);
    return result;
}

const add = async (body) => {
    try {
        const existingUser = await getUserByEmail(body.email);

        if (existingUser.length != 0){
            return 'User with email ' + body.email + ' already exists!';
        }

        const user = {
            name: body.name,
            email: body.email,
            phone_number: body.phone_number,
            password:  bcrypt.hashSync(body.password, 8),
            is_admin: body.is_admin
        }

        const result = await addUser(user);

        return 'User ' + body.name + ' was added!'
    } catch(err) {
        console.log(err)
        return "Something went wrong!"
    }
}


const update = async (body) => {
    try {
        const existingUser = await getUserByEmail(body.email);

        if (existingUser.length == 0){
            return 'User ' + body.email + ' doesn\'t exist!';
        }

        const user = {
            user_id: body.user_id,
            name: body.name,
            email: body.email,
            phone_number: body.phone_number,
            password:  bcrypt.hashSync(body.password, 8),
            is_admin: body.is_admin
        }

        const result = await updateUser(user);

        return 'User was updated '
    } catch(err) {
        console.log(err)
        return "Something went wrong!"
    }
}

const remove = async (id) => {
    try {
        const existingUser = await getUserById(id);

        if (existingUser.length == 0){
            return 'User doesn\'t exist!';
        }

        const result = await deleteUser(id);

        return 'User was deleted!'
    } catch(err) {
        console.log(err)
        return "Something went wrong!"
    }
}

export {
    getAll,
    getByEmail,
    getById,
    remove,
    update,
    add
}