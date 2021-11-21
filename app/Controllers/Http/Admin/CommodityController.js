'use strict'

const Commodity = use('App/Models/Commodity')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with commodities
 */
class CommodityController {
    /**
     * Show a list of all commodities.
     * GET commodities
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        return await Commodity.query().paginate(1, 10)
    }

    /**
     * Render a form to be used for creating a new commodity.
     * GET commodities/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new commodity.
     * POST commodities
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const data = request.only(['pid', 'name', 'image', 'describe'])
        const model = new Commodity
        model.fill(data)
        model.save()
        return model
    }

    /**
     * Display a single commodity.
     * GET commodities/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        return await Commodity.find(params.id)
    }

    /**
     * Render a form to update an existing commodity.
     * GET commodities/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update commodity details.
     * PUT or PATCH commodities/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const data = request.only(['name', 'image', 'describe'])
        const model = await Commodity.find(params.id)
        model.merge(data)

        model.save()
        return model
    }

    /**
     * Delete a commodity with id.
     * DELETE commodities/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}

    async grid() {
        return {
            fields: {
                _id: { label: 'ID' },
                name: { label: '商品名称' },
                pid: { label: '商品类别' },
                image: { label: '商品图片' },
                describe: {
                    label: '商品描述',
                },
                create_at: { label: '创建时间', type: 'datetime' },
                update_at: { label: '更新时间', type: 'datetime' }
            }
        }
    }

    async form() {
        return {
            fields: {
                name: { label: '商品名称' },
                pid: { label: '商品类别' },
                image: { label: '商品图片' },
                describe: {
                    label: '商品描述',
                    type: 'html',
                },
            }
        }
    }
    async view() {
        return {
            fields: {
                _id: { label: 'ID' },
                name: { label: '商品名称' },
                pid: { label: '商品类别' },
                image: { label: '商品图片' },
                describe: {
                    label: '商品描述',
                    type: 'html',
                },
                create_at: { label: '创建时间', type: 'datetime' },
                update_at: { label: '更新时间', type: 'datetime' }
            }
        }
    }
}

module.exports = CommodityController