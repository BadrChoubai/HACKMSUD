<template>
    <header>
        <a href="#main" aria-label="skip to main content" class="skip-to-main sr-only">Skip to main content</a>
        <div class="container mx-auto pt-4 px-4">
            <div class="flex flex-row items-center justify-between">
                <h1 class="font-display font-black dark:text-white text-3xl">HACKMSUD</h1>
                <div class="flex items-center justify-end md:gap-x-4 gap-x-2 h-full w-full">
                    <navigation-menu-link aria-label="Frequently Asked Questions" to="/questions">
                        <icons-life-preserver class="fill-red-500" />
                    </navigation-menu-link>
                    <navigation-menu-link aria-label="GitHub repository" to="https://www.github.com/BadrChoubai/HACKMSUD">
                        <icons-github class="dark:fill-white" />
                    </navigation-menu-link>
                    <navigation-menu-link aria-label="Join us on Discord" to="https://discord.gg/kCMAQBgv9S">
                        <icons-discord class="dark:fill-white fill-[#5865F2]"/>
                    </navigation-menu-link>
                </div>
            </div>
            <navigation-app-menu />
        </div>
    </header>
</template>