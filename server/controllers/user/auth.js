const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
    const accessTokenData = isAuthorized(req);
    console.log('accessTokenData-----------', accessTokenData);
    if (!accessTokenData) {
        res.status(401).send({ data: null, message: 'not authorized' });
    } else {
        res.status(200).send({
            data: accessTokenData,
            message: 'auth success',
        });
    }
};
