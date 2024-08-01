import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from '../SliceStore/Slice'

export const Store = configureStore({
        reducer:{
            user:userSlice
        }
    })
  


