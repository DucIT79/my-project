import jsonServerProvider from 'ra-data-json-server';
const API_URL = "https://68e7a0cd10e3f82fbf3ffe42.mockapi.io";

export const dataProvider = jsonServerProvider(API_URL);