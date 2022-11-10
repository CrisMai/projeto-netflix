/* eslint-disable import/no-anonymous-default-export */


const API_KEY = 'c561e23e3b945b05a0b50ae8c5eea95a';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Lista de filmes originais da netflix;
- Filmes recomendados/destaque (trending);
- Filmes em alta (top rated);
- Filmes de ação;
- Filmes de comédia;
- Filmes de terror;
- Filmes de romance;
- Filmes de documentários;
*/

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: []
            }
        ];
    }
    
}

