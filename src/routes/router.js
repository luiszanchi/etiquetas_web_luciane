import IndexPage from '/src/pages/IndexPage'

export default [
    {
        path: '/',
        name: 'HomePage',
        component: IndexPage
    },
    {
        path: '/teste',
        component: {
            template: '<h1> OI </h1>'
        }
    }
]