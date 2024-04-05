export const routes = [
    {
        name: 'home',
        path: 'home',
        view: '<h1>Hola Mundo<h1/>',
        childrens: [
            {
                name: 'cards',
                path: 'cards',
                view: '<h1>Hola Mundo2<h1/>'
            }
        ]
    }
];
