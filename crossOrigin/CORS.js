/**
 * CORS ( Cross Origin Resources Share 跨域资源共享 )
 * 允许浏览器向服务器发送 XMLHttpRequest 请求，从而克服跨域问题
 × 这需要浏览器和服务器端同时支持
 *
 */


// (1) 浏览器端会自动向请求头添加orgin字段，表明当前请求来源
// (2) 服务器需要设置响应头的Access-Control-Allow-Methods，Access-Control-Allow-Headers，Access-Control-Allow-Origin等字段，指定允许的方法、头部、来源等信息
// (2) 请求分为简单请求和非简单请求，非简单请求会先进行一次OPTIONS请求来判断当前是否允许跨域

