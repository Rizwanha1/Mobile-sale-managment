import { configureStore } from '@reduxjs/toolkit'
import {
  resetDoneReducer,
  allActorsReducer,
  dataFetcherReducer,
  allNewSalesReducer,
  newDataUploaderReducer,
  userLoginValidatorReducer,
  forgotpasswordHandlerReducer,
  newUserRegisterHandlerReducer,
} from '../features/allAsyncActionReducers/AllAsyncActionReducersSlice'

export default configureStore({
  reducer: {
    resetDoneReducer,
    allActorsReducer,
    allNewSalesReducer,
    dataFetcherReducer,
    newDataUploaderReducer,
    userLoginValidatorReducer,
    forgotpasswordHandlerReducer,
    newUserRegisterHandlerReducer,
  },
})
