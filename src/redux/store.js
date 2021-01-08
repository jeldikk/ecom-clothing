import {createStore, applyMiddleware} from 'redux'

import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from "./root_reducer"

const middlewares = [thunk];


/*
Node has a inherent environment defined by name NODE_ENV; when we run app in development mode using npm run start, 
NODE_ENV is set to 'development'
when the code is built, NODE_ENV will be switched to 'production'

react-scripts will take care of all these things inside.

*/
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store)

// export default {store,persistor};