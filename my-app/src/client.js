import * as contentful from 'contentful';

export const client = 
contentful.createClient({
    space: process.env.development.REACT_APP_SPACE_ID,
    accessToken: process.env.development.REACT_APP_ACCESS_TOKEN
})