const shortenid = function(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let str = ''
  for(let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * 62)]
  }
  return str
}

module.exports = shortenid