<template>
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-primary/5 to-background -z-10" />

        <!-- Decorative elements -->
        <div class="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div class="w-full max-w-6xl px-6 md:px-12 z-10">
            <p class="text-lg md:text-xl text-primary mb-4">Hello, I'm </p>
            <h1
                class="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                <span class="block">Anirudh</span>
                <!-- <span class="block">Achari. &</span> -->
                <span class="block">Full-Stack Developer</span>
            </h1>
            <p class="text-lg md:text-xl text-muted-foreground max-w-xl mb-9 leading-relaxed mt-10">
                I’m a full-stack developer, which means I’m equally overwhelmed by both the front end and the back end.
                I spend most of my time fixing bugs I definitely didn’t create. Probably.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
                <a href="#projects">
                    <div
                        class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors cursor-pointer">
                        View Projects
                    </div>
                </a>
                <a href="#contact">
                    <div
                        class="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer">
                        Contact Me
                    </div>
                </a>
            </div>
        </div>

        <a href="#about" class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Scroll down">
            <!-- <ArrowDownCircle /> -->
        </a>
    </section>
</template>

<script setup>
// import { ArrowDownCircle } from 'lucide-vue'; // Import ArrowDownCircle from Lucide Vue
// import Button from '@/components/ui/Button'; // Adjust according to your Button component path
</script>

<style scoped>
/* Add any specific styles for the Hero section here */
</style>