'use strict'

class SiteController {
    async index() {
        return {
            status: 1
        }
    }

    async site() {
        return {
            name: '商品后台',
            logo: 'https://s02.mifile.cn/assets/static/image/logo-mi2.png',
            menu: [{
                    name: '商品列表',
                    url: '/rest/commodity',
                    icon: 'fa fa-list'
                },
                {
                    name: '菜单二',
                    url: '/rest/posts',
                    icon: ''
                }
            ]

        }
    }
}

module.exports = SiteController