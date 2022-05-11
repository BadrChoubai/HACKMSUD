<script setup>
const navItems = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/about",
        text: 'About Us'
    },
    {
        href: "/team",
        text: 'The Team'
    },
    {
        href: "/events",
        text: 'Events'
    },
    {
        href: "/sponsors",
        text: 'Sponsor Us'
    }
]
</script>

<template>
    <footer class="app-footer bg-zinc-200 dark:bg-slate-600 w-screen" role="banner">
        <div class="container mx-auto p-4">
            <div class="flex flex-center flex-col justify-between">
                <span class="text-2xl font-black">
                    HACKMSUD
                </span>
                <nav class="w-1/4">
                    <ul>
                        <li v-for="link in navItems" :key="link.href"
                            class="p-2 mr-2 rounded bg-tranparent hover:bg-blue-500/50 dark:hover:bg-red-500/50">
                            <nuxt-link :to="link.href"
                                class="active:underline font-bold tracking-wide whitespace-nowrap cursor-pointer">
                                {{ link.text }}
                            </nuxt-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>