/**
 * 已知前后文 取中间文本
 * @param str 全文
 * @param start 前文
 * @param end 后文
 * @returns 中间文本 || null
 */
function matchStr(str, start, end) {
  const res = str.match(new RegExp(`${start}(.*?)${end}`))
  return res ? res[1] : ''
}

module.exports = {
  matchStr
}