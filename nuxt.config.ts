import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/tailwind.css',
  ],
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1'
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    secretKey: '', // variable that can only be accessed on the server side
    public: {
      NOTION_TOKEN: process.env.NOTION_TOKEN,
      EVENTS_DATABASE_ID: process.env.EVENTS_DATABASE_ID
    }
  },
})
