export default defineNuxtPlugin(() => {
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} - HACKMSUD` : 'HACKMSUD';
        },
    });
});