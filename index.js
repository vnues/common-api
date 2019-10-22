import qs from 'qs'
// 数组校验(存在、是否是数组、判空)
export const isValidArray = (list) => {
  return list && Array.isArray(list) && list.length
}

// 对象校验(存在、是否是对象、判空)
export const isValidObject = (list) => {
  return list && Object.prototype.toString.call(list) === '[object Object]' && Object.keys(list).length
}

// 解析地址url
export const getQueryValue = () => {
  const url = window.location.href
  const data = qs.parse(url.split('?')[1])
  return data
}