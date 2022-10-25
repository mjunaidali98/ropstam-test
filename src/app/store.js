import { configureStore } from '@reduxjs/toolkit'
import carModalReducer from '../features/carModal/carModalSlice'
import categoryModalReducer from '../features/categoryModal/categoryModalSlice'
import tabSliceReducer from '../features/tab/tabSlice'

export default configureStore({
  reducer: {
    categoryModal: categoryModalReducer,
    tab: tabSliceReducer,
    carModal: carModalReducer,
  }
})

