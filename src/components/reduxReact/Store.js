import { createStore, combineReducers } from "redux";

let sartingdata = {
    AD: [],
    currentUser: null,
};
let UserAds = (state = sartingdata, action) => {
    state = { ...state, AD: [...state.AD] };
    switch (action.type) {
        case "CREATE_ADS":
            state.AD.push(action.samman);

            break;
    }

    return state;
};

let initialUserData = {
    Users: ["uesers"],
    currentUser: null,
};

let Usersignup = (state = initialUserData, action) => {
    state = { ...state, Users: [...state.Users] };
    if (action.type == "CREATE_USER") {
        state.Users.push(action.samman);
    } else if (action.type == "UPDATE_USER") {
        state.Users[action.index].fname = action.samaan;
    } else if (action.type == "Delete_User") {
        state.Users.splice(action.index, 1);
    } else if (action.type == "LOGIN_OK") {
        state.currentUser = action.payload;
    } else if (action.type == "Logout") {
        console.log(state.currentUser);
        state.currentUser = action.payload;
        console.log(state.currentUser);
    }

    return state;
};

let totalData = combineReducers({ Usersignup, UserAds });
let StoreData = createStore(totalData);

export default StoreData;
