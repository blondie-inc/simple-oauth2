'use strict';

const authCodeModule = require('./lib/client/auth-code');
const passwordModule = require('./lib/client/password');
const accessTokenModule = require('./lib/access-token');
const clientCredentialsModule = require('./lib/client/client');

// https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-A.1
const vsCharRegEx = /^[\x20-\x7E]*$/;

module.exports = {
  /**
   * Creates a new simple-oauth2 client with the provided configuration
   * @param  {Object}  options Module options as defined in schema
   * @returns {Object} The simple-oauth2 client
   */
  create(options = {}) {
    return {
      accessToken: accessTokenModule(options),
      ownerPassword: passwordModule(options),
      authorizationCode: authCodeModule(options),
      clientCredentials: clientCredentialsModule(options),
    };
  },
};
