<template>
    <section id="skills" class="section-padding py-24 bg-gradient-to-b from-background to-secondary/30">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <div class="inline-block glass px-4 py-2 text-sm mb-4 text-primary">
                    My Skills
                </div>
                <h2
                    class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Technical Expertise
                </h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    I've developed a diverse set of skills over the years, focusing on both design and development
                    to create cohesive and polished digital experiences.
                </p>
            </div>

            <div>
                <!-- Skill Categories -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div v-for="category in skillCategories" :key="category.name"
                        class="glass p-6 rounded-lg hover-lift flex flex-col items-center text-center">
                        <div class="bg-primary/10 p-4 rounded-full mb-3 text-primary flex items-center justify-center">
                            <Icon :name="category.icon" class="w-6 h-6" />
                        </div>
                        <h3 class="font-medium text-lg">{{ category.name }}</h3>
                    </div>
                </div>

                <!-- Main Skills -->
                <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div v-for="skill in skills" :key="skill.name"
                        class="glass p-6 rounded-lg hover-lift flex flex-col items-center justify-center text-center">
                        <div class="bg-primary/10 p-3 rounded-full mb-4 text-primary">
                            <Icon :name="skill.icon" class="w-6 h-6" />
                        </div>
                        <h3 class="font-medium">{{ skill.name }}</h3>
                    </div>
                </div> -->

                <!-- Additional Skills -->
                <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-12">
                    <div v-for="tech in additionalSkills" :key="tech"
                        class="bg-secondary/80 border border-border/50 py-3 px-2 rounded-lg font-medium hover-lift text-center text-sm">
                        {{ tech }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Skill Categories
const skillCategories = [
    { name: 'Development', icon: 'devicon:vscode' },
    { name: 'Tools', icon: 'devicon:jetbrains' },
    { name: 'Database', icon: 'devicon:mysql' },
    { name: 'Python', icon: 'devicon:python' },
    { name: 'Flutter', category: 'design', icon: 'devicon:flutter' },
    { name: 'Node.js', category: 'development', icon: 'devicon:nodejs' },
    { name: 'Nest Js', category: 'tools', icon: 'devicon:nestjs' },
    { name: 'TypeScript', category: 'development', icon: 'devicon:typescript' },
    { name: 'Nuxt Js', category: 'development', icon: 'devicon:nuxtjs' },
    { name: 'Tailwind CSS', category: 'development', icon: 'devicon:tailwindcss' },
    { name: 'Git', category: 'design', icon: 'devicon:git' },
    { name: 'Django', category: 'development', icon: 'devicon-plain:django' }
]

// Main Skills
const skills = [

]

// Additional Skills
const additionalSkills = [
    'Java', 'JavaScript', 'React', 'C', 'Postgres SQL', 'Dart', 'Express Js', 'MongoDB',
]
</script>