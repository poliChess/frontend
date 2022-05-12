import { createClient } from "@urql/core";

const client = createClient({
  url: 'http://localhost:3000'
})

const apiclient = {
  login: async ({ username, password }) => {
    const res = await client.mutation(`
      mutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          user {
            username
            mail
          }
          token
          success
          message
        }
      }`,
      { username, password }
    ).toPromise();

    return res.data.login;
  },

  register: async ({ mail, username, password }) => {
    const res = await client.mutation(
      `mutation($mail: String!, $username: String!, $password: String!) {
        register(mail: $mail, username: $username, password: $password) {
          success
          message
        }
      }`,
      { mail, username, password}
    ).toPromise();

    return res.data.register;
  }
};

export default apiclient;
