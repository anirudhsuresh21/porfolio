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

            <div class="relative mt-12">
                <!-- Left Arrow Button -->
                <button @click="scrollLeft"
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary/10 hover:bg-primary/20 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm border border-primary/20"
                    :class="{ 'opacity-50 cursor-not-allowed': !canScrollLeft }" :disabled="!canScrollLeft">
                    <Icon name="lucide:chevron-left" class="w-5 h-5 text-primary" />
                </button>

                <!-- Right Arrow Button -->
                <button @click="scrollRight"
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary/10 hover:bg-primary/20 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm border border-primary/20"
                    :class="{ 'opacity-50 cursor-not-allowed': !canScrollRight }" :disabled="!canScrollRight">
                    <Icon name="lucide:chevron-right" class="w-5 h-5 text-primary" />
                </button>

                <!-- Scroll container -->
                <div ref="scrollContainer" @scroll="updateScrollState"
                    class="overflow-x-auto scrollbar-hide pb-4 mx-12">
                    <div class="flex gap-8 min-w-max">
                        <div v-for="project in projects" :key="project.id"
                            class="flex-shrink-0 w-80 overflow-hidden rounded-lg shadow bg-secondary hover:shadow-lg transition-shadow">
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

                <!-- Scroll indicators -->
                <div class="flex justify-center mt-6 gap-2">
                    <div class="text-sm text-muted-foreground flex items-center gap-2">
                        <span>{{ currentIndex + 1 }} / {{ Math.ceil(projects.length / 3) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
        id: 3,
        title: 'WeShop – Django E-Commerce Platform',
        description:
            'A full-featured Django-based e-commerce web application that supports user registration, login, and secure password reset. Users can browse and purchase products via an integrated payment gateway, while administrators (SuperUsers) can manage inventory through the Django Admin panel.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        technologies: ['Django', 'Python', 'HTML', 'Bootstrap'],
        demoUrl: '#',
        githubUrl: 'https://github.com/anirudhsuresh21/Django_E-Commerce',
    },
    {
        id: 2,
        title: 'Netflix Clone – Flutter App with TMDB API',
        description:
            'A sleek and responsive movie streaming UI built using Flutter. The app fetches real-time movie and TV show data from the TMDB (The Movie Database) API and displays detailed information including titles, overviews, ratings, and release dates. Inspired by Netflix\'s interface, it offers a smooth browsing experience without video playback functionality.',
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
        technologies: ['Flutter', 'Dart', 'TMDB API'],
        demoUrl: '#',
        githubUrl: 'https://github.com/anirudhsuresh21/netflix-clone-flutter',
    },
    {
        id: 4,
        title: 'TODO App – Rust Backend with Next.js Frontend',
        description:
            'A modern and responsive to-do application with a Rust-powered backend and a Next.js frontend. The app features a clean glassmorphism-inspired UI with smooth interactions and a fully responsive layout across devices. Users can easily add, edit, and manage tasks in real-time. Rust ensures high performance and reliability on the backend, while Next.js delivers a dynamic and fluid user experience on the frontend.',
        image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*z4N3Yyh7GoKfo-Vp1LFEpg.jpeg',
        technologies: ['Rust', 'Next.js', 'HTML', 'CSS'],
        demoUrl: '#',
        githubUrl: 'https://github.com/anirudhsuresh21/TodoApp-Rust-Next',
    },
    // {
    //     id: 5,
    //     title: 'Task Management App',
    //     description:
    //         'A comprehensive task management application built with modern web technologies. Features include task creation, priority setting, deadline tracking, and team collaboration tools.',
    //     image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
    //     technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    //     demoUrl: '#',
    //     githubUrl: 'https://github.com/anirudhsuresh21/task-management-app',
    // },
    // {
    //     id: 6,
    //     title: 'Task Management App',
    //     description:
    //         'A comprehensive task management application built with modern web technologies. Features include task creation, priority setting, deadline tracking, and team collaboration tools.',
    //     image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
    //     technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    //     demoUrl: '#',
    //     githubUrl: 'https://github.com/anirudhsuresh21/task-management-app',
    // }
];

const scrollContainer = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(true);
const currentIndex = ref(0);

const scrollLeft = () => {
    if (scrollContainer.value) {
        const scrollAmount = 320; // card width + gap
        scrollContainer.value.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }
};

const scrollRight = () => {
    if (scrollContainer.value) {
        const scrollAmount = 320; // card width + gap
        scrollContainer.value.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};

const updateScrollState = () => {
    if (scrollContainer.value) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;

        canScrollLeft.value = scrollLeft > 0;
        canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 1;

        // Calculate current index based on scroll position
        const cardWidth = 320; // card width + gap
        currentIndex.value = Math.round(scrollLeft / cardWidth);
    }
};

onMounted(() => {
    updateScrollState();
});
</script>

<style scoped>
/* Hide scrollbar for better aesthetics while maintaining functionality */
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Optional: Add custom scrollbar styling if you prefer visible scrollbars */
.custom-scrollbar::-webkit-scrollbar {
    height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: hsl(var(--primary) / 0.3);
    border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--primary) / 0.5);
}
</style>