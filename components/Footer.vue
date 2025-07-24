<template>
    <footer
        class="bg-gradient-to-br from-secondary/40 via-secondary/20 to-background py-16 px-6 md:px-12 border-t border-border/30 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div class="absolute bottom-10 left-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <!-- Enhanced brand section -->
                <div class="space-y-6">
                    <div>
                        <h3
                            class="font-serif text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Anirudh Achari
                        </h3>
                        <p class="text-muted-foreground leading-relaxed">
                            Just your friendly neighborhood developer—slinging code, squashing bugs, and occasionally
                            saving
                            the sprint at the last second.
                        </p>
                    </div>

                    <!-- Social links -->
                    <div class="flex gap-4">
                        <a href="https://github.com/anirudhsuresh21" target="_blank"
                            class="group bg-secondary/50 hover:bg-primary/10 p-3 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-110">
                            <Icon name="lucide:github"
                                class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/achari-anirudh-suresh-5a286124b/" target="_blank"
                            class="group bg-secondary/50 hover:bg-primary/10 p-3 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-110">
                            <Icon name="lucide:linkedin"
                                class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </a>
                        <a href="https://www.instagram.com/anirudh.achari_21/" target="_blank"
                            class="group bg-secondary/50 hover:bg-primary/10 p-3 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 hover:scale-110">
                            <Icon name="lucide:instagram"
                                class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        </a>
                    </div>
                </div>

                <!-- Enhanced quick links -->
                <div>
                    <h3 class="font-bold text-lg mb-6 text-foreground">Quick Links</h3>
                    <nav class="flex flex-col space-y-3">
                        <a v-for="link in quickLinks" :key="link.name" :href="link.href"
                            class="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/5">
                            <div
                                class="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300">
                            </div>
                            <span>{{ link.name }}</span>
                        </a>
                    </nav>
                </div>

                <!-- Enhanced contact info -->
                <div>
                    <h3 class="font-bold text-lg mb-6 text-foreground">Get In Touch</h3>
                    <div class="space-y-4">
                        <a href="mailto:anirudhachari2004@gmail.com"
                            class="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg hover:bg-primary/5">
                            <div
                                class="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                <Icon name="lucide:mail" class="w-4 h-4 text-primary" />
                            </div>
                            <span class="text-sm">anirudhachari2004@gmail.com</span>
                        </a>

                        <div class="group flex items-center gap-3 text-muted-foreground p-3 rounded-lg">
                            <div class="bg-primary/10 p-2 rounded-lg">
                                <Icon name="lucide:map-pin" class="w-4 h-4 text-primary" />
                            </div>
                            <span class="text-sm">Mumbai, Maharashtra, India</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Enhanced footer bottom -->
            <div class="pt-8 border-t border-border/30">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="lucide:copyright" class="w-4 h-4" />
                        <span>2025 Anirudh Achari. All rights reserved.</span>
                    </p>
                    <div class="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Built with</span>
                        <Icon name="lucide:heart" class="w-4 h-4 text-red-500 animate-pulse" />
                        <span>and</span>
                        <div class="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-md">
                            <Icon name="devicon:nuxtjs" class="w-4 h-4" />
                            <span class="text-primary font-medium">Nuxt.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];
</script>