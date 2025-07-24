<template>
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <!-- Enhanced background with multiple gradients -->
        <div
            class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/20 -z-10" />

        <!-- Animated decorative elements -->
        <div class="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000">
        </div>
        <div class="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-ping"></div>

        <!-- Floating particles -->
        <div class="absolute inset-0 overflow-hidden -z-5">
            <div class="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
            <div class="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float delay-500"></div>
            <div class="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/50 rounded-full animate-float delay-1000"></div>
        </div>

        <div class="w-full max-w-6xl px-6 md:px-12 z-10">
            <!-- Animated greeting -->
            <div class="overflow-hidden mb-6">
                <p class="text-lg md:text-xl text-primary mb-4 animate-slideUp opacity-0"
                    style="animation-delay: 0.2s; animation-fill-mode: forwards;">
                    <span class="inline-block mr-2">👋</span>
                    Hello, I'm
                </p>
            </div>

            <!-- Enhanced name and title with staggered animations -->
            <div class="overflow-hidden mb-8">
                <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                    <span
                        class="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-slideUp opacity-0"
                        style="animation-delay: 0.4s; animation-fill-mode: forwards;">
                        Anirudh
                    </span>
                    <span
                        class="block bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent animate-slideUp opacity-0"
                        style="animation-delay: 0.6s; animation-fill-mode: forwards;">
                        Full-Stack Developer
                    </span>
                </h1>
            </div>

            <!-- Enhanced description with typing effect -->
            <div class="overflow-hidden mb-12">
                <p class="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-slideUp opacity-0"
                    style="animation-delay: 0.8s; animation-fill-mode: forwards;">
                    I'm a full-stack developer who transforms ideas into digital reality. I craft beautiful, functional
                    websites and applications that bridge the gap between user needs and business goals.
                </p>
            </div>

            <!-- Enhanced CTA buttons with hover effects -->
            <div class="flex flex-col sm:flex-row gap-6 mb-16 animate-slideUp opacity-0"
                style="animation-delay: 1s; animation-fill-mode: forwards;">
                <a href="#projects" class="group">
                    <div
                        class="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                        </div>
                        <Icon name="lucide:folder" class="w-5 h-5 mr-2" />
                        <span>View Projects</span>
                    </div>
                </a>
                <a href="#contact" class="group">
                    <div
                        class="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        <Icon name="lucide:mail" class="w-5 h-5 mr-2" />
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>

            <!-- Skills preview with animated icons -->
            <div class="animate-slideUp opacity-0" style="animation-delay: 1.2s; animation-fill-mode: forwards;">
                <p class="text-sm text-muted-foreground mb-4">Working with</p>
                <div class="flex items-center gap-6 flex-wrap">
                    <div
                        class="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                        <Icon name="devicon:flutter" class="w-5 h-5" />
                        <span class="text-sm font-medium">Flutter</span>
                    </div>
                    <div
                        class="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                        <Icon name="devicon:nuxtjs" class="w-5 h-5" />
                        <span class="text-sm font-medium">Nuxt.js</span>
                    </div>
                    <div
                        class="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                        <Icon name="devicon:nestjs" class="w-5 h-5" />
                        <span class="text-sm font-medium">Nest.js</span>
                    </div>
                    <div
                        class="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                        <Icon name="devicon:python" class="w-5 h-5" />
                        <span class="text-sm font-medium">Python</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Enhanced scroll indicator -->
        <a href="#about" class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce group"
            aria-label="Scroll down">
            <div
                class="flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors duration-300">
                <span class="text-xs font-medium">Scroll Down</span>
                <div
                    class="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                    <Icon name="lucide:chevron-down" class="w-4 h-4" />
                </div>
            </div>
        </a>
    </section>
</template>

<script setup>
// Add any reactive data or methods here if needed
</script>

<style scoped>
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

.animate-slideUp {
    animation: slideUp 0.8s ease-out;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

/* Custom hover effects */
.group:hover .group-hover\:translate-x-full {
    transform: translateX(100%);
}

/* Responsive text scaling */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
        line-height: 1.1;
    }
}

@media (max-width: 640px) {
    h1 {
        font-size: 2rem;
    }
}
</style>