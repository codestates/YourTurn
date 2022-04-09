const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  if(!accessTokenData){
    return res.status(401).send({ data: null, message: 'not authorized' });
  }
  
  try{
    const userInfo = await user.findOne({ 
      where: { email: accessTokenData.email }
    })
    let data = userInfo.dataValues
    delete data.password

    return res.status(200).json({ data: { userInfo: data } })
  } catch(err){
    console.log(err)
  }
}
