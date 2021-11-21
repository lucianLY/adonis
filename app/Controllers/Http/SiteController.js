'use strict'

class SiteController {
    index({ request }) {
        return ({
            'name': 'adonis' + ' - ' + request.input('page')
        })
    }
}

module.exports = SiteController