<template>
    <section id="projects" class="section-padding py-24 bg-secondary/30">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <div class="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm mb-4">
                    My Work
                </div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project represents a unique challenge and solution.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div v-for="project in projects" :key="project.id"
                    class="overflow-hidden rounded-lg shadow bg-secondary hover:shadow-lg transition-shadow">
                    <div class="h-52 overflow-hidden">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                        <p class="text-muted-foreground text-sm mb-4">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="bg-secondary/50 text-xs text-muted-foreground px-2 py-1 rounded">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="flex justify-between gap-2">
                            <!-- <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                                class="text-sm flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
                                <Icon name="lucide:external-link" class="w-4 h-4" /> Live Demo
                            </a> -->
                            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                                class="text-sm flex items-center gap-1 px-3 py-1 border border-gray-500 text-gray-700 rounded hover:bg-gray-700 hover:text-white transition">
                                <Icon name="lucide:github" class="w-4 h-4" /> Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        id: 1,
        title: 'SkillSwap - Community Skill Exchange Platform',
        description:
            'A web and mobile-based platform that enables users to trade skills and services using time credits instead of money. Designed for students and local communities, the platform promotes collaborative learning and community engagement.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        technologies: ['Flutter', 'Nest.js', 'Neon DB', 'Firebase', "Appwrite"],
        demoUrl: '#',
        githubUrl: 'https://github.com/anirudhsuresh21/skill-share-app',
    },
    {
        id: 2,
        title: 'WeShop – Django E-Commerce Platform',
        description:
            'A full-featured Django-based e-commerce web application that supports user registration, login, and secure password reset. Users can browse and purchase products via an integrated payment gateway, while administrators (SuperUsers) can manage inventory through the Django Admin panel.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        technologies: ['Django', 'Python', 'HTML', 'Bootstrap'],
        demoUrl: '#',
        githubUrl: 'https://github.com/anirudhsuresh21/Django_E-Commerce',
    },
    {
        id: 3,
        title: 'Netflix Clone – Flutter App with TMDB API',
        description:
            'A sleek and responsive movie streaming UI built using Flutter. The app fetches real-time movie and TV show data from the TMDB (The Movie Database) API and displays detailed information including titles, overviews, ratings, and release dates. Inspired by Netflix’s interface, it offers a smooth browsing experience without video playback functionality.',
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
        technologies: ['Flutter', 'Dart', 'TMDB API'],
        demoUrl: '#',
        githubUrl: 'https://github.com/anirudhsuresh21/netflix-clone-flutter',
    },
    // {
    //     id: 4,
    //     title: 'Netflix Clone – Flutter App with TMDB API',
    //     description:
    //         'A sleek and responsive movie streaming UI built using Flutter. The app fetches real-time movie and TV show data from the TMDB (The Movie Database) API and displays detailed information including titles, overviews, ratings, and release dates. Inspired by Netflix’s interface, it offers a smooth browsing experience without video playback functionality.',
    //     image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    //     technologies: ['Flutter', 'Dart', 'TMDB API'],
    //     demoUrl: '#',
    //     githubUrl: 'https://github.com/anirudhsuresh21/netflix-clone-flutter',
    // },
]
</script>