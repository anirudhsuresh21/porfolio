<template>
    <div class="bg-secondary/30 py-12 px-6 md:px-12 border-t border-border/50">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 class="font-serif text-xl font-semibold mb-4 text-primary">Portfolio</h3>
                    <p class="text-muted-foreground">
                        A creative developer passionate about building beautiful digital experiences.
                    </p>
                </div>

                <div>
                    <h3 class="font-medium text-lg mb-4">Quick Links</h3>
                    <nav class="flex flex-col space-y-2">
                        <a v-for="link in ['Home', 'About', 'Skills', 'Projects', 'Contact']" :key="link"
                            class="text-muted-foreground hover:text-primary transition-colors relative group py-1">
                            {{ link }}
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </nav>
                </div>

                <div>
                    <h3 class="font-medium text-lg mb-4">Connect</h3>
                    <div class="flex flex-col space-y-2 text-muted-foreground">
                        <a href="mailto:hello@example.com"
                            class="hover:text-primary transition-colors group flex items-center">
                            <span
                                class="w-1 h-1 rounded-full bg-primary mr-2 transition-all duration-300 group-hover:w-2"></span>
                            anirudhachari2004@gmail.com
                        </a>
                        <p class="group flex items-center">
                            <span
                                class="w-1 h-1 rounded-full bg-primary mr-2 transition-all duration-300 group-hover:w-2"></span>
                            Mumbai
                        </p>
                        <!-- <p class="group flex items-center">
                            <span
                                class="w-1 h-1 rounded-full bg-primary mr-2 transition-all duration-300 group-hover:w-2"></span>
                            +1 (555) 123-4567
                        </p> -->
                    </div>
                </div>
            </div>

            <div
                class="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-sm text-muted-foreground">
                    © 2025. All rights reserved.
                </p>
                <p class="text-sm text-muted-foreground flex items-center gap-1">
                    Built by Anirudh Achari
                    <!-- <Heart class="w-4 h-4 fill-primary text-primary" /> by Me -->
                </p>
            </div>
        </div>
    </div>
</template>