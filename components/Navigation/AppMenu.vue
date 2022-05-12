<script setup>
import MenuLink from './MenuLink.vue';
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
<div class="container mt-4">
    <nav role="navigation">
        <ul class="flex flex-wrap align-center gap-2">
            <li v-for="link in navItems" :key="link.href" class="p-2 rounded bg-tranparent hover:bg-blue-500/50 dark:hover:bg-red-500/50">
                <menu-link :to="link.href" class="font-bold tracking-wide whitespace-nowrap cursor-pointer">
                    {{ link.text }}
                </menu-link>
            </li>
        </ul>
    </nav>
</div>
</template>