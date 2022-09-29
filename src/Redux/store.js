import { configureStore } from '@reduxjs/toolkit';
import loggedUser from './reducer';

export default configureStore({
    reducer: {
        users: loggedUser,
    },
});