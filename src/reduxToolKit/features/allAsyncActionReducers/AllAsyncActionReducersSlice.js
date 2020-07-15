import axios from 'axios';
import { toast, Zoom } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
const Msg = ({ buyer, IMEI, time }) => <div>  <p><b> {buyer} <br /> {IMEI} </b> <br />  New sale has been added. </p> </div>

// ------------------Initial State------------------//
var initialState = {
  Tracker: {},
  error: null,
  status: null,
  status: null,
  sendMail: '',
  newSales: [],
  allSellers: [],
  currentUser: {},
  restDoneRes: false,
  newMailValid: false,
  currentUserIsAdmin: false,
  currentUserIsSeller: false,
  currentUserIsActive: false,
  currentUserSellingHistory: [],
}

// ------------------All Asyn Reducers are below ------------------//



// ------------------All data Getter Setter Reducers ------------------//

// asyn getter
export const allActors = createAsyncThunk(
  'allActorsSlice/allActors',
  async () => {
    const data = await axios.get('/allActors')
    return data.data;
  }
)
// asyn setter
const allActorsSlice = createSlice({
  name: 'allActorsSlice',
  initialState,
  reducers: {
    LOG_OUT_6: (state) => {
      state.allSellers = [];
    },
  },
  extraReducers: {
    [allActors.pending]: (state, action) => {
      state.status = 'loading';
    },
    [allActors.fulfilled]: (state, { payload }) => {
      state.allSellers = payload.message;
    },
    [allActors.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
})





// ------------------New sell Notification Reducers ------------------//

// asyn getter
export const allNewSales = createAsyncThunk(
  'allNewSalesSlice/allNewSales',
  async () => {
    const data = await axios.get('/allNewSales')
    return data.data;
  }
)
// asyn setter
const allNewSalesSlice = createSlice({
  name: 'allNewSalesSlice',
  initialState,
  extraReducers: {
    [allNewSales.pending]: (state, action) => {
      state.status = 'loading';
    },
    [allNewSales.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.newSales.forEach((item, indx) => {
          if (item.showNotification) {
            toast(<Msg buyer={item.buyerFullName} IMEI={item.IMEI} time={item.createdAt} />, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              LazyLoad: true,
              transition: Zoom,
            });
            item.showNotification = false;
          }
        })
      }
      state.newSales = payload.message;
    },
    [allNewSales.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
})












// ------------------All data Getter Setter Reducers ------------------//

// asyn getter
export const dataFetcher = createAsyncThunk(
  'dataFetcherSlice/dataFetcher',
  async ({ sellerEmail, searchIMEI, isSeller }) => {
    const data = await axios.post('/track', { sellerEmail, searchIMEI, isSeller })
    return data.data;
  }
)
// asyn setter
const dataFetcherSlice = createSlice({
  name: 'dataFetcherSlice',
  initialState,
  reducers: {
    LOG_OUT_5: (state) => {
      state.Tracker = {};
    },
  },
  extraReducers: {
    [dataFetcher.pending]: (state, action) => {
      state.status = 'loading';
    },
    [dataFetcher.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.Tracker = payload.message;
        Toast.fire({
          icon: 'success',
          title: 'Result Found'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Result Found! Try Again',
        })
        state.Tracker = {};
      }
    },
    [dataFetcher.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
})

















// ------------------User Login Getter Setter Reducers ------------------//

// asyn getter
export const userLoginValidator = createAsyncThunk(
  'userLoginValidatorSlice/userLoginValidator',
  async ({ email, password }) => {
    const data = await axios.post('/login', { email, password })
    return data.data;
  }
)
// asyn setter
const userLoginValidatorSlice = createSlice({
  name: 'userLoginValidatorSlice',
  initialState,
  reducers: {
    LOG_OUT: (state) => {
      state.currentUser = {};
      state.currentUserIsAdmin = false;
      state.currentUserIsSeller = false;
      state.currentUserIsActive = false;
      state.currentUserSellingHistory = [];
    },
  },
  extraReducers: {
    [userLoginValidator.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userLoginValidator.fulfilled]: (state, { payload }) => {
      if (payload.isAdmin || payload.isSeller) {
        state.currentUser = payload;
        if (payload.isSeller) {
          state.currentUserSellingHistory = payload.sellingHistory;
          state.currentUserIsSeller = true;
          state.currentUserIsActive = true;
          Toast.fire({
            icon: 'success',
            title: 'Sign In Successful',
            text: `Welcome ${payload.sellerFirstName}`,
          })
        } else if (payload.isAdmin) {
          state.currentUserIsAdmin = true;
          state.currentUserIsActive = true;
          Toast.fire({
            icon: 'success',
            title: 'Sign In Successful',
            text: `Welcome Admin`,
          })
        }
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
      }
    },
    [userLoginValidator.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Invalid Email or Password`,
      })
    },
  },
})

















// ------------------New Data Upload Getter Setter Reducers ------------------//

// asyn getter
export const newDataUploader = createAsyncThunk(
  'newDataUploaderSlice/newDataUploader',
  async ({ currentUser, newEntry }) => {
    const data = await axios.post('/uploadimei', { currentUser, newEntry })
    return data.data;
  }
)
// asyn setter
const newDataUploaderSlice = createSlice({
  name: 'newDataUploaderSlice',
  initialState,
  extraReducers: {
    [newDataUploader.pending]: (state, action) => {
      state.uploadStatus = 'loading';
    },
    [newDataUploader.fulfilled]: (state, { payload }) => {
      // updated 
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Data Upload',
          text: `${payload.message}`,
        })
        document.getElementById("UploadDataForm").reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [newDataUploader.rejected]: (state, action) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Rejected! Failed to Upload`,
      })
    },
  },
})


















// ------------------New User Registration Getter Setter Reducers ------------------//

// asyn getter
export const newUserRegisterHandler = createAsyncThunk(
  'newUserRegisterHandlerSlice/newUserRegisterHandler',
  async (newUserEntry) => {
    const data = await axios.post('/sellerregister', newUserEntry)
    return data.data;
  }
)
// asyn setter
const newUserRegisterHandlerSlice = createSlice({
  name: 'newUserRegisterHandlerSlice',
  initialState,
  reducers: {
    LOG_OUT_2: (state) => {
      state.newMailValid = false;
    },
  },
  extraReducers: {
    [newUserRegisterHandler.pending]: (state, action) => {
      state.status = 'loading';
    },
    [newUserRegisterHandler.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.newMailValid = true;
        Toast.fire({
          icon: 'success',
          title: 'Registration!',
          text: `${payload.message}`,
        })
        state.status = 'success';
      } else {
        state.newMailValid = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
      }
    },
    [newUserRegisterHandler.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Register`,
      })
    },
  },
})


























// ------------------Forget Password Getter Setter Reducers ------------------//

// asyn getter
export const forgotpasswordHandler = createAsyncThunk(
  'forgotpasswordHandlerSlice/forgotpasswordHandler',
  async ({ email }) => {
    const data = await axios.post('/forgotpassword', { email });
    return await data.data;
  }
)
// asyn setter
const forgotpasswordHandlerSlice = createSlice({
  name: 'forgotpasswordHandlerSlice',
  initialState,
  reducers: {
    LOG_OUT_3: (state) => {
      state.sendMail = false;
    },
  },
  extraReducers: {
    [forgotpasswordHandler.pending]: (state, action) => {
      Toast.fire({
        icon: 'success',
        title: '...Loading!',
      })
      state.status = 'loading';
    },
    [forgotpasswordHandler.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.sendMail = payload.message;
        Toast.fire({
          icon: 'success',
          title: 'Email !',
          text: `${payload.message}`,
        })
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
      }
    },
    [forgotpasswordHandler.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Send Mail`,
      })
    },
  },
})




























// ------------------Forget Password Getter Setter Reducers ------------------//

// asyn getter
export const resetDone = createAsyncThunk(
  'resetDoneSlice/resetDone',
  async ({ email, newPassword, token }) => {
    const data = await axios.post('/restpassword', { email, newPassword, token });
    return await data.data;
  }
)
// asyn setter
const resetDoneSlice = createSlice({
  name: 'resetDoneSlice',
  initialState,
  reducers: {
    LOG_OUT_4: (state) => {
      state.resetDone = false;
    },
  },
  extraReducers: {
    [resetDone.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.restDoneRes = false;
    },
    [resetDone.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.restDoneRes = true;
        Toast.fire({
          icon: 'success',
          title: 'Reset !',
          text: `${payload.message}`,
        })
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
        state.restDoneRes = false;
      }
    },
    [resetDone.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Reset Password`,
      })
    },
  },
})






















// ------------------All Asyn Actions of Reducers Exporter ------------------//


export const { LOG_OUT_4 } = resetDoneSlice.actions;
export const { LOG_OUT_6 } = allActorsSlice.actions;
export const { LOG_OUT_5 } = dataFetcherSlice.actions;
export const { LOG_OUT } = userLoginValidatorSlice.actions;
export const { LOG_OUT_3 } = forgotpasswordHandlerSlice.actions;
export const { LOG_OUT_2 } = newUserRegisterHandlerSlice.actions;



// ------------------All Asyn Getter Setter Reducers Exporter ------------------//

export const allActorsReducer = allActorsSlice.reducer;
export const resetDoneReducer = resetDoneSlice.reducer;
export const allNewSalesReducer = allNewSalesSlice.reducer;
export const dataFetcherReducer = dataFetcherSlice.reducer;
export const newDataUploaderReducer = newDataUploaderSlice.reducer;
export const userLoginValidatorReducer = userLoginValidatorSlice.reducer;
export const forgotpasswordHandlerReducer = forgotpasswordHandlerSlice.reducer;
export const newUserRegisterHandlerReducer = newUserRegisterHandlerSlice.reducer;

