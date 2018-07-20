import database from "../firebase/firebase";

//add user
export const addUser = (user) => ({ type: "ADD_USER", user });

export const startAddUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            email = "",
            password = "",
            givenName = "",
            surname = ""
        } = userData
        const user = { email, password, givenName, surname };

        return database.ref(`accounts/${uid}/users`).push(user).then((ref) => {
            dispatch(addUser({ id: ref.key, ...user }));
        });
    }
}