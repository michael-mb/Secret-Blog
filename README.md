# Nuxt + Storyblok

This is an example of a headless CMS `integration` project with the Nuxt Javascript Framework
## Configuration Steps

1. Create new Space in Storyblok
2. Obtain the Preview Token from the Settings of the Space.
3. Replace the `accessToken` value in `nuxt.config.js` file with your Preview Token.
4. Your Nuxt project can be started and will consume data from your Storyblok Space.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production
$ npm run build
```

![example](readme-images/1.png)

This image shows the view from the CMS. Thanks to storyblok we can develop different components and integrate them into the CMS. This gives the possibility to a non-developer to manage the content of the pages without having to write code.

> For detailed explanation on how Nuxt 3 works, check out the [Nuxt 3 docs](https://v3.nuxtjs.org/guide/concepts/introduction).
