const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // TODO: 회원가입 및 사용자 생성 로직을 작성하세요.
  const { email, password, nickname } = req.body

  if( !email || !password || !nickname ){
    return res.status(422).send('잘못 입력하셨습니다.')
  }

  const [ data, created ] = await user.findOrCreate({
    where: { email: email }
  })

  if(!created){
    return res.status(409).send('이미 가입된 이메일입니다.')
  } 
  
  try{
    const accessToken = generateAccessToken(data.dataValues)
    return res.status(201).cookie('jwt', accessToken).json({ message: 'ok' })
  } catch(err){
    console.log(err)
  }
};
