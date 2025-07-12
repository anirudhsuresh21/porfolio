<script setup>
const traits = ['Quick Learner', 'Collaborative', "Adaptable", 'Problem Solver', 'Team Player'];
</script>

<template>
    <section id="about" class="section-padding py-24 bg-secondary/30">
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <!-- Text Content -->
                <div class="space-y-6">
                    <div class="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm">
                        About Me
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold leading-tight">
                        Passionate about creating meaningful digital experiences
                    </h2>
                    <p class="text-muted-foreground leading-relaxed">
                        I'm a full stack developer with a passion for building beautiful, functional websites and
                        applications. With a strong foundation in design principles and technical skills, I bridge the
                        gap between aesthetics and functionality.
                    </p>
                    <p class="text-muted-foreground leading-relaxed">
                        My journey in web development started 3 years ago, and since then, I've worked on a variety of
                        projects, from small college projects to industry level applications. I'm always eager to learn
                        new technologies and techniques to improve my craft.
                    </p>
                    <div class="pt-4">
                        <div class="flex flex-wrap gap-4">
                            <span v-for="trait in traits" :key="trait"
                                class="bg-secondary px-4 py-2 rounded-full text-sm font-medium">
                                {{ trait }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/30 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] before:bg-cover before:bg-center before:opacity-80 before:mix-blend-overlay" />
                    <div class="absolute inset-0 flex items-end p-8">
                        <div class="bg-white backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs">
                            <p class="font-medium text-primary mb-2">Experience</p>
                            <div class="text-sm text-muted-foreground space-y-1">
                                <p><strong>Assistant Developer (Intern)</strong></p>
                                <p>Ocufox Technologies Pvt. Ltd. · Internship</p>
                                <p>May 2024 – Present · 1 Year 2 Months</p>
                                <p>Mumbai, Maharashtra, India · Full-Time</p>
                                <p>
                                    Currently contributing to Flutter apps and full-stack solutions using Nuxt.js
                                    (Vue.js) as part of a hybrid development team.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
