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
  }
})
