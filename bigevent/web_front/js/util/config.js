// 配置文件
// 把这个项目中所有用到的接口地址全放在这里

// 所有接口的基地址
var BASEURL = 'http://192.168.1.5:8000'
    // var BASEURL = ' http://39.99.130.177:8000'

// 用来保存所有的接口信息
var APILIST = {

    // 获取文章分类
    category_get: BASEURL + '/category',

    // 获取文章
    article_get: BASEURL + '/search',

}