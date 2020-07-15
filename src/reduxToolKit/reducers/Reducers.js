import { createAsyncThunk, createReducer, current } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// createReducer
let initialState = {
    dataSetUser: [],
    currentActiveUser: [],
}

// Counter Reducer With createReducer
export const DataSetReducer = createReducer(initialState, {

    ALL_USERS: (state, action) => {
        state.dataSetUser = action.payload;
    },

    USER_LOGIN: async (state, action) => {
        const response = await axios.post('http://localhost:8080/login', action.payload);
        state.currentActiveUser = response.data;
        console.log(state.currentActiveUser);
        response.data ? toast.success(`Welcome ${response.data.sellerFirstName}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) : toast.error('Invalid Credentials!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    },


    USER_REGISTRATION: (state, action) => {
        console.log('New Seller Registration currentActiveUser', state.currentActiveUser);
        console.log('New Seller Registration dataSetUser', state.dataSetUser);

        // console.log('New Seller Registration', action.payload);
        // let newUser = {
        //     isSeller: true,
        //     isAdmin: false,
        //     sellerFirstName: '',
        //     sellerLastName: '',
        //     sellerEmail: 'seller@seller.com',
        //     sellerPassword: '123',
        //     sellerPhone: '',
        //     avaliableProduts: [{}],
        //     sellingHistory: [{
        //         buyerFirstName: 'Buyer1',
        //         buyerLastName: 'test',
        //         buyerFullName: 'Buyer1 test',
        //         buyerContactNumber: '1234567890',
        //         buyerMobileNumber: '0987654321',
        //         IMEI: '12345678901234567890',
        //         buyedAtDate: 'Nov 12, 2019',
        //     }],
        // }
    },






});

