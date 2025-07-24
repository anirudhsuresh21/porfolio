<script setup>
const traits = ['Quick Learner', 'Collaborative', "Adaptable", 'Problem Solver', 'Team Player'];
</script>

<template>
    <section id="about"
        class="section-padding py-24 bg-gradient-to-br from-secondary/20 via-background to-primary/5 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <!-- Text Content -->
                <div class="space-y-8">
                    <div
                        class="inline-block rounded-full bg-gradient-to-r from-primary/10 to-primary/20 px-4 py-2 text-sm backdrop-blur-sm border border-primary/20">
                        <span
                            class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-medium">About
                            Me</span>
                    </div>
                    <h2
                        class="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        Passionate about creating meaningful digital experiences
                    </h2>
                    <div class="space-y-6">
                        <p class="text-muted-foreground leading-relaxed text-lg">
                            I'm a full stack developer with a passion for building beautiful, functional websites and
                            applications. With a strong foundation in design principles and technical skills, I bridge
                            the
                            gap between aesthetics and functionality.
                        </p>
                        <p class="text-muted-foreground leading-relaxed text-lg">
                            My journey in web development started 3 years ago, and since then, I've worked on a variety
                            of
                            projects, from small college projects to industry level applications. I'm always eager to
                            learn
                            new technologies and techniques to improve my craft.
                        </p>
                    </div>
                    <div class="pt-6">
                        <div class="flex flex-wrap gap-3">
                            <span v-for="trait in traits" :key="trait"
                                class="bg-gradient-to-r from-secondary/80 to-secondary/60 backdrop-blur-sm px-5 py-3 rounded-full text-sm font-medium border border-border/30 hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-default">
                                {{ trait }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Enhanced Image Section -->
                <div class="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] before:bg-cover before:bg-center before:opacity-80 before:mix-blend-overlay" />

                    <!-- Floating experience card -->
                    <div class="absolute inset-0 flex items-end p-6">
                        <div
                            class="bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-sm border border-border/50 group-hover:scale-105 transition-all duration-500">
                            <!-- Company logo space -->
                            <div class="flex items-center gap-4 mb-6">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/20 overflow-hidden">
                                    <!-- Replace this with actual company logo -->
                                    <NuxtImg src="/assets/company.png" alt="Company Logo"
                                        class="w-8 h-8 object-contain" />
                                    <!-- <Icon name="lucide:building-2" class="w-6 h-6 text-primary hidden" /> -->
                                </div>
                                <div>
                                    <p
                                        class="font-bold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                        Experience</p>
                                    <p class="text-xs text-muted-foreground">Current Position</p>
                                </div>
                            </div>

                            <div class="space-y-3">
                                <div>
                                    <p class="font-bold text-foreground text-base">Assistant Developer (Intern)</p>
                                    <p class="text-sm text-primary font-medium">Ocufox Technologies Pvt. Ltd.</p>
                                </div>

                                <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Icon name="lucide:calendar" class="w-3 h-3" />
                                    <span>May 2024 – Present · 1 Year 2 Months</span>
                                </div>

                                <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Icon name="lucide:map-pin" class="w-3 h-3" />
                                    <span>Mumbai, Maharashtra, India</span>
                                </div>

                                <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Icon name="lucide:clock" class="w-3 h-3" />
                                    <span>Full-Time Internship</span>
                                </div>

                                <div class="pt-3 border-t border-border/30">
                                    <p class="text-sm text-muted-foreground leading-relaxed">
                                        Contributing to Flutter apps and full-stack solutions using Nuxt.js (Vue.js) and
                                        NestJS, collaborating in a hybrid development team to build scalable,
                                        high-performance applications and improve legacy systems.
                                    </p>
                                </div>

                                <!-- Skills tags -->
                                <div class="flex flex-wrap gap-2 pt-2">
                                    <span
                                        class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">Flutter</span>
                                    <span
                                        class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">Nuxt.js</span>
                                    <span
                                        class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">Vue.js</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Decorative elements -->
                    <div class="absolute top-4 right-4 w-3 h-3 bg-primary/60 rounded-full animate-ping"></div>
                    <div class="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    </section>
</template>
