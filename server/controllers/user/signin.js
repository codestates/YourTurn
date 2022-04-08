const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
    // 로그인 정보를 통해 사용자 인증 후 토큰 전달
    // console.log('req.body----------', req.body);
    const userInfo = await user.findOne({
        where: { email: req.body.email, password: req.body.password },
    });
    if (!userInfo) {
        res.status(404).send('invalid user');
    } else {
        const { email, password } = userInfo;
        const payload = { email, password };
        const accessToken = generateAccessToken(payload);
        sendAccessToken(res, accessToken)
        res.status(200).send({ message: 'ok' });
    }
};
