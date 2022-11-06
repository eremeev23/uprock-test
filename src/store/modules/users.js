import axios from "axios";

export const users = {
  state: {
    user: null
  },

  actions: {
    async SIGN_IN({ state }, user) {
      return axios
        .post('/login', user)
        .then(({ data, status}) => {
          state.user = data;
          return {status, data};
        })
        .catch(({ response }) => ({status: response.status, data: response.data}))
    },

    async USER_REQUEST({ state }, userId) {
      return axios
        .get(`/users/${userId}`)
        .then(({data}) => state.user = data)
    }
  }
}