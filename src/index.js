/* eslint max-params: off */

'use strict';

/**
 * this middleware needs to be added as the last middleware in the application; after
 * all “non-error” and “error” middleware. it assumes that if the application got here,
 * an error was sent via next( err ).
 *
 * @link http://expressjs.com/en/guide/error-handling.html
 *
 * @param {Error} err
 * @param {number} err.status
 *
 * @param {IncomingMessage} req
 * @param {EventEmitter} req.app
 *
 * @param {ServerResponse} res
 * @param {boolean} res.headersSent
 * @param {Function} res.status
 * @param {Function} res.render
 *
 * @param {Function} next
 *
 * @returns {undefined}
 */
function error( err, req, res, next ) {
  var result = {
    error: req.app.get( 'env' ) === 'development' ? err : {},
    message: err.message
  };

  if ( res.headersSent ) {
    next( err );

    return;
  }

  res.status( err.status || 500 );
  res.render( 'error', result );
}

module.exports = error;
