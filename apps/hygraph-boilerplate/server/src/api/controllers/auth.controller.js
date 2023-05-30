import passport from 'passport';
import jwt from 'jsonwebtoken';
import { AwesomeGraphQLClient } from 'awesome-graphql-client';
import fetch from 'node-fetch';

import settings from '../../config/settings';
import { handleHTTPError, HTTPError } from '../../utils';

const mutationCreateUser = `
  mutation CreateAuthUser($username: String = "", $password: String = "", $email: String = "") {
    createAuthUser(data: {username: $username, password: $password, email: $email}) {
      id
      password
      username
      email
    }
  }
`;

const client = new AwesomeGraphQLClient({
  endpoint: `${settings.HYGRAPH_CONTENT_API}`,
  fetch,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${settings.HYGRAPH_ACCESS_TOKEN}`,
    },
  },
});

const login = (req, res, next) => {
  passport.authenticate('login', async (err, authenticated, info) => {
    try {
      if (err || !authenticated) {
        throw err;
      }

      return res.status(200).json(authenticated);
    } catch (error) {
      console.log(error);
      return handleHTTPError(error, next);
    }
  })(req, res, next);
};

const signup = async (req, res, next) => {
  try {
    // Get all the signup fields
    const { username, password, email } = req.body;

    // Create the AuthUser in Hygraph
    const { createAuthUser } = await client.request(mutationCreateUser, { username, password, email });

    // Error
    if (!createAuthUser) {
      throw new HTTPError(`Can't create the user with username: ${username}`, 404);
    }
    // Authenticate
    return login(req, res, next);
  } catch (error) {
    console.log(error);
    return handleHTTPError(error, next);
  }
};

const logout = (req, res, next) => {
  try {
    if (typeof req.logout === 'function') {
      req.logout((logoutError) => {
        if (logoutError) { throw logoutError; }
        req.session.destroy((sessionError) => {
          if (sessionError) { throw sessionError; }
          req.session = null;
        });
      });
    };   
    return res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
    handleHTTPError(error, next);
  }
};

export default {
  login,
  logout,
  signup,
};
