import { createStore } from "redux"
import { persistStore,persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import reducer from "../store/reducers"

const persistConfig = {
    key:"root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export default {store,persistor} 

