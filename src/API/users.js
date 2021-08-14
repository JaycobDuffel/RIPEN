import client from "./client";

const endpoint = "/users";

const getUser = async (id) => {
    try {
        const response = await client.get(endpoint + `/${id}`);
        if (response.ok) {
            return response.data;
        }

    } catch (error) {
        console.log(error)
    }
};

const postUser = (user) => {
    return client.post(endpoint, user);
};

export default {
    getUser,
    postUser,
};