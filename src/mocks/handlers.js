import { http, HttpResponse } from 'msw';
import { store } from '../app/store';

// handles the interception of the request in-between frontend and API
// note that MSW is considered by its creators as its own API mocking layer rather than 
// an aspect of testing

const query = store.getState().searchBar.query;

export const handlers = [
    http.get(`https://content.guardianapis.com/search?q=${query}&api-key=d53eea4a-037a-4040-900e-389d2a2166b9`, () => {
        const title = store.getState().searchBar.query;
        return HttpResponse.json([
            ...Array(10).fill({
                id: Math.floor(Math.random() * 1000),
                type: 'article',
                webTitle: `dummy title ${title}`,
                commentCount: Math.floor(Math.random() * 100),
                author: 'Sally Scoop',
                articleContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id viverra nunc, id imperdiet est. Vestibulum ut tortor eget ex luctus aliquet eu vel diam. Nulla viverra et leo eu rutrum. Integer facilisis, massa in efficitur convallis, massa ligula lobortis dolor, quis vehicula ligula ex sed est. Vivamus eleifend bibendum mi nec pharetra. Duis porttitor vulputate eros eget scelerisque. Fusce sodales sit amet ipsum nec finibus. Maecenas porttitor ex ut velit tempus pretium. Praesent feugiat viverra mi, ut dictum ante feugiat ac. Sed non libero rhoncus, tempor arcu id, viverra lacus. Donec vitae efficitur sem. Donec egestas tortor in quam semper, sed semper lectus dapibus',
                webUrl: 'https://www.theguardian.com',
            }),
        ]);
    }),
];

