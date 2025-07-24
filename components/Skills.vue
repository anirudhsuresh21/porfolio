<template>
    <section id="skills"
        class="section-padding py-24 bg-gradient-to-br from-background via-secondary/10 to-primary/5 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="text-center mb-16">
                <div
                    class="inline-block rounded-full bg-gradient-to-r from-primary/10 to-primary/20 px-4 py-2 text-sm mb-6 backdrop-blur-sm border border-primary/20">
                    <span
                        class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-medium">My
                        Skills</span>
                </div>
                <h2
                    class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Technical Expertise
                </h2>
                <p class="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    I've developed a diverse set of skills over the years, focusing on both design and development
                    to create cohesive and polished digital experiences.
                </p>
            </div>

            <div class="space-y-16">
                <!-- Primary Skills with enhanced design -->
                <div>
                    <h3
                        class="text-xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Core Technologies
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div v-for="category in primarySkills" :key="category.name"
                            class="group bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-xl p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 flex flex-col items-center text-center relative overflow-hidden">
                            <!-- Hover glow effect -->
                            <div
                                class="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            </div>

                            <div
                                class="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                <Icon :name="category.icon" class="w-8 h-8 text-primary" />
                            </div>
                            <h4 class="font-bold text-lg mb-2 relative z-10">{{ category.name }}</h4>
                            <p class="text-muted-foreground text-sm relative z-10">{{ category.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Additional Skills with animated tags -->
                <div>
                    <h3
                        class="text-xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Additional Technologies
                    </h3>
                    <div class="flex flex-wrap justify-center gap-4">
                        <div v-for="(tech, index) in additionalSkills" :key="tech"
                            class="bg-gradient-to-r from-secondary/80 to-secondary/60 backdrop-blur-sm border border-border/30 px-6 py-3 rounded-full font-medium hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default text-sm hover:shadow-lg group"
                            :style="{ animationDelay: `${index * 0.1}s` }">
                            <span class="group-hover:text-primary transition-colors duration-300">{{ tech }}</span>
                        </div>
                    </div>
                </div>

                <!-- Experience Level Indicators -->
                <div>
                    <h3
                        class="text-xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Proficiency Levels
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="skill in skillLevels" :key="skill.name"
                            class="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-xl p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300">
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center gap-3">
                                    <Icon :name="skill.icon" class="w-6 h-6 text-primary" />
                                    <span class="font-semibold">{{ skill.name }}</span>
                                </div>
                                <span class="text-sm text-muted-foreground">{{ skill.level }}%</span>
                            </div>
                            <div class="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                                    :style="{ width: `${skill.level}%` }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Primary Skills with descriptions
const primarySkills = [
    {
        name: 'Flutter',
        icon: 'devicon:flutter',
        description: 'Cross-platform mobile development'
    },
    {
        name: 'Nuxt.js',
        icon: 'devicon:nuxtjs',
        description: 'Full-stack Vue.js framework'
    },
    {
        name: 'Nest.js',
        icon: 'devicon:nestjs',
        description: 'Scalable Node.js server applications'
    },
    {
        name: 'Python',
        icon: 'devicon:python',
        description: 'Backend development & scripting'
    },
    {
        name: 'JavaScript',
        icon: 'devicon:javascript',
        description: 'JavaScript development'
    },
    {
        name: 'Django',
        icon: 'devicon-plain:django',
        description: 'Python web framework'
    },
    {
        name: 'Git',
        icon: 'devicon:git',
        description: 'Version control & collaboration'
    },
    {
        name: 'Tailwind CSS',
        icon: 'devicon:tailwindcss',
        description: 'Utility-first CSS framework'
    }
];

// Additional Skills
const additionalSkills = [
    'Java', 'typeScript', 'React', 'C', 'PostgreSQL', 'Dart', 'Express.js', 'MongoDB',
    'Node.js', 'Vue.js', 'HTML5', 'CSS3', 'Firebase', 'Docker', 'AWS', 'REST APIs'
];

// Skill levels for proficiency indicators
const skillLevels = [
    { name: 'Flutter Development', icon: 'devicon:flutter', level: 85 },
    { name: 'Full-Stack Web Development', icon: 'devicon:nuxtjs', level: 90 },
    { name: 'Backend APIs', icon: 'devicon:nestjs', level: 80 },
    { name: 'Database Design', icon: 'devicon:mysql', level: 75 }
];
</script>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
}

/* Staggered animation for skill tags */
.flex-wrap>div {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}

/* Custom hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:text-primary {
    color: hsl(var(--primary));
}
</style>