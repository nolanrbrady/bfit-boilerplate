//control file for redux-box
import { createStore } from 'redux-box';
import { module as userModule } from "./Store/user.js";
 
export default createStore([
    userModule 
]);