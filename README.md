# common-fronted-api

> 业务开发中，我们经常会使用一些公共的方法，何不抽离出来依此提高开发效率


## 数组校验

> 使用场景：当对后端传递过来的字段判断是否存在、是否是数组、是不是为空

```javascript

const isValidArray = (list) => {
  return list && Array.isArray(list) && list.length
}

```

## 对象校验

> 使用场景：当对后端传递过来的字段判断是否存在、是否是对象、是不是为空

```javascript

const isValidObject = (list) => {
  return list && Object.prototype.toString.call(list) === '[object Object]' && Object.keys(list).length
}

```

## 地址解析

> 使用场景：我们想要拿到地址栏的参数

```javascript

const getQueryValue = () => {
  const url = window.location.href
  const data = qs.parse(url.split('?')[1])
  return data
}

```