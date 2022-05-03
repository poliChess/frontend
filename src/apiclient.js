import { createClient } from "@urql/core";

const client = createClient({
  url: 'http://localhost:3001/graphql'
})

const apiclient = {
  login: async (username, password) => {
    const res = await client.mutation(`
      mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          token
          success
          message
        }
      }`,
      { username, password }
    ).toPromise();

    return res.data;
  },

  register: {}
};

export default apiclient;
