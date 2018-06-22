// ./store/user.js
import { 
  createSagas, 
  createContainer,
  createActions, 
  using } from "redux-box";
import { call, put } from "redux-saga/effects";
 
const state = {
  name: '',
  age: '',
};
 
const actions = createActions({
	updateUser: payload => ({type: "UPDATE_USER", payload}), // only action you need
});
 
const mutations = {
		UPDATE_USER: (state, {payload}) => {
			Object.entries(payload).forEach(([k,v]) => state[k] = v);
		},
};
 
const sagas = createSagas({
	SYNC_FROM_DB: function*() {
		try {

      /*

      WRITE LOGIC TO SYNC THE DB HERE
      
      */

		} catch(e) {
			console.log(e);
		}
	},
});
 
export const module = {
  name: "user",
  state,
  actions,
  mutations,
  sagas
};
 
//OPTIONAL: if you want to access this module using render props in your components:
export default createContainer(module);
