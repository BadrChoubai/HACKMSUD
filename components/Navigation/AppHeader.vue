<template>
    <header>
        <a href="#main" aria-label="skip to main content" class="skip-to-main sr-only">Skip to main content</a>
        <div class="container mx-auto pt-4 px-4">
            <div class="flex items-center justify-between md:mr-0 mr-8">
                <h1 class="font-display font-black dark:text-white text-3xl">HACKMSUD</h1>
                <div class="flex items-center h-full">
                    <navigation-menu-link aria-label="Frequently Asked Questions" to="/questions">
                        <span class="material-icons   text-red-500">support</span>
                    </navigation-menu-link>
                    <navigation-menu-link aria-label="Join us on Discord" to="https://discord.gg/PpGv3naY">
                        <icons-discord class="m-auto scale-50 dark:fill-white fill-[#5865F2]"/>
                    </navigation-menu-link>
                </div>
            </div>
            <navigation-app-menu />
        </div>
    </header>
</template>