// 把所有与文章相关的操作写在这里

var article = {
    // 获取主页中5条焦点图新闻
    getFouceFive: function() {
        // 因为只要5条数据 并显示
        return $.get(APILIST.article_get, { perpage: 5 })
    },
    /**
     * 
     * @param {number} id  根据id去获取详情
     */
    getById: function(id) {
        return $.get(APILIST.article_get, { 'id': id })
    },

    getRank: function(type) {
        return $.get(APILIST.article_rank, { 'type': type })
    },
}