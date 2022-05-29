import { createClient } from "@urql/core";
import store from "../state/store";

const host = 'localhost';

const client = createClient({
  url: `http://${host}:3000`,
  fetchOptions: () => {
    const userToken = store.getState().user.token;
    return userToken ? {
      headers: {
        Authorization: userToken,
      },
    } : {};
  },
})

const apiclient = {
  login: async ({ username, password }) => {
    const res = await client.mutation(`
      mutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
          user {
            mail
            username
            playedGames
            wonGames
            rating
            lastLogin
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

  googleLogin: async ({ idToken }) => {
    const res = await client.mutation(`
       mutation($username: String!, $password: String!, $idToken: String) {
        login(username: $username, password: $password, idToken: $idToken) {
          user {
            mail
            username
            playedGames
            wonGames
            rating
            lastLogin
          }
          token
          success
          message
        }
      }`,
      { username: '', password: '', idToken }
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
      { mail, username, password }
    ).toPromise();

    return res.data.register;
  },

  me: async () => {
    const res = await client.query(
      `query Me {
        me {
          mail
          username
          playedGames
          wonGames
          rating
          lastLogin
        }
      }`
    ).toPromise();

    return res.data.me;
  },

  enterQueue: async (computer) => {
    const res = await client.mutation(
      `mutation Mutation($computer: Boolean) {
        enterQueue(computer: $computer) {
          success
          message
        }
      }`,
      { computer }
    ).toPromise();

    return res.data.enterQueue;
  },

  leaveQueue: async () => {
    const res = await client.mutation(
      `mutation LeaveQueue {
        leaveQueue {
          success
          message
        }
      }`
    ).toPromise();

    return res.data.leaveQueue;
  },

  updateUser: async ({ mail, username, password }) => {
    const res = await client.mutation(
      `mutation UpdateUser($mail: String, $username: String, $password: String) {
        updateUser(mail: $mail, username: $username, password: $password) {
          user {
            mail
            username
            playedGames
            wonGames
            rating
            lastLogin
          }
          success
          message
        }
      }`,
      { mail, username, password }
    ).toPromise();

    return res.data.updateUser;
  },

  deleteUser: async () => {
    const res = await client.mutation(
      `mutation DeleteUser {
        deleteUser {
          success
          message
        }
      }`
    ).toPromise();

    return res.data.deleteUser;
  },

  findUser: async ({ username }) => {
    const res = await client.query(
      `query Query($username: String!) {
        user(username: $username) {
          mail
          username
          playedGames
          rating
          wonGames
        }
      }`,
      { username }
    ).toPromise();

    return res.data.user;
  },

  userProfile: async ({ username }) => {
    const res = await client.query(
      `query Query($username: String!) {
        user(username: $username) {
          mail
          username
          playedGames
          rating
          wonGames
          lastLogin
          history {
            type
            player1 {
              username
            }
            player2 {
              username
            }
            winner
            state
            moves
            startedAt
            finishedAt
          }
          currentGame {
            type
            player1 {
              username
            }
            player2 {
              username
            }
            toMove
            state
            moves
            startedAt
          }
        }
      }`,
      { username }
    ).toPromise();

    return res.data.user;
  }
};

function createWebSocket() {
  const userToken = store.getState().user.token;
  return new WebSocket(`ws://${host}:3001?token=${userToken}`);
}

export { apiclient as default, createWebSocket };
