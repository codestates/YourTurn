const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  const { email, password } = req.body

  const userInfo = await user.findOne({
    where: { email: email, password: password}
  })

  if(!userInfo){
    return res.status(404).send('invalid user')
  }
  
  try{
    const accessToken = generateAccessToken(userInfo.dataValues)
    sendAccessToken(res, accessToken)
  } catch(err){
    console.log(err)
  }
};
