'use strict'

const Post = use('App/Models/Post')

class PostController {
    async index({ request, view }) {
        const data = await Post.fetch()
        return view.render('posts.index', {
            posts: data.toJSON()
        })
    }

    async show({ request, params, view }) {
        const dataOne = await Post.find(params.id)
        return view.render('posts.show', {
            posts: dataOne.toJSON()
        })
    }
}

module.exports = PostController