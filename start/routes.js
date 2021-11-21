'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', "SiteController.index")
Route.get('/posts', "PostController.index")
Route.get('/posts/:id', "PostController.show")


Route.get('/admin/api/index', "Admin/SiteController.index")
Route.get('/admin/api/site', "Admin/SiteController.site")
Route.resource('/admin/api/posts', "Admin/PostController")

Route.get('/admin/api/commodity/grid', "Admin/CommodityController.grid")
Route.get('/admin/api/commodity/form/:id?', "Admin/CommodityController.form")
Route.get('/admin/api/commodity/view/:id?', "Admin/CommodityController.view")
Route.resource('/admin/api/commodity', "Admin/CommodityController")

// Route.resource('/admin/api/posts/grid', "Admin/PostController.grid")

// Uncomment the following code to test with mongodb

// Route.get('/test', async () => {
//   const User = use('App/Models/User')
//   await User.findOrCreate({
//     name: 'adonis-mongo-app'
//   }, {
//     name: 'adonis-mongo-app',
//     github: 'https://github.com/wxs77577/adonis-mongo-app',
//     cmd: 'adonis new api-server --blueprint wxs77577/adonis-mongo-app',
//     'cmd-cnpm': 'adonis new api-server --blueprint wxs77577/adonis-mongo-app --cnpm'
//   })
//   return await User.query().sort('-_id').paginate(1)
// })