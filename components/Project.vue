<template>
    <section id="projects"
        class="section-padding py-24 bg-gradient-to-br from-secondary/20 via-background to-primary/5 relative overflow-hidden">
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
                        Work</span>
                </div>
                <h2
                    class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Featured Projects</h2>
                <p class="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    Here are some of my recent projects. Each project represents a unique challenge and solution.
                </p>
            </div>

            <div class="relative mt-12">
                <!-- Enhanced Left Arrow Button -->
                <button @click="scrollLeft"
                    class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 p-4 rounded-full shadow-xl border border-primary/30 backdrop-blur-xl transition-all duration-300 hover:scale-110 group"
                    :class="{ 'opacity-50 cursor-not-allowed': !canScrollLeft }" :disabled="!canScrollLeft">
                    <Icon name="lucide:chevron-left"
                        class="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </button>

                <!-- Enhanced Right Arrow Button -->
                <button @click="scrollRight"
                    class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 p-4 rounded-full shadow-xl border border-primary/30 backdrop-blur-xl transition-all duration-300 hover:scale-110 group"
                    :class="{ 'opacity-50 cursor-not-allowed': !canScrollRight }" :disabled="!canScrollRight">
                    <Icon name="lucide:chevron-right"
                        class="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </button>

                <!-- Enhanced Scroll container -->
                <div ref="scrollContainer" @scroll="updateScrollState"
                    class="overflow-x-auto scrollbar-hide pb-6 mx-16">
                    <div class="flex gap-8 min-w-max">
                        <div v-for="project in projects" :key="project.id" class="flex-shrink-0 w-80 group relative">
                            <!-- Enhanced project card with fixed height and no scaling -->
                            <div
                                class="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-xl overflow-hidden rounded-2xl shadow-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 h-[580px] flex flex-col">
                                <!-- Image with overlay -->
                                <div class="h-52 overflow-hidden relative flex-shrink-0">
                                    <img :src="project.image" :alt="project.title"
                                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div
                                        class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    </div>

                                    <!-- Floating action button -->
                                    <div
                                        class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                                            class="bg-primary/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-primary transition-colors duration-300">
                                            <Icon name="lucide:external-link" class="w-4 h-4 text-white" />
                                        </a>
                                    </div>
                                </div>

                                <!-- Enhanced card content with expandable description -->
                                <div class="p-6 flex flex-col flex-grow relative">
                                    <div class="flex-grow">
                                        <h3
                                            class="text-lg font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300 line-clamp-2">
                                            {{ project.title }}
                                        </h3>

                                        <!-- Truncated description (default) -->
                                        <p
                                            class="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 group-hover:opacity-0 transition-opacity duration-300">
                                            {{ project.description }}
                                        </p>

                                        <!-- Full description overlay (on hover) -->
                                        <div
                                            class="absolute inset-6 bg-gradient-to-br from-secondary/95 to-secondary/90 backdrop-blur-xl rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-y-auto z-10 border border-primary/20">
                                            <h4
                                                class="text-lg font-bold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                                {{ project.title }}
                                            </h4>
                                            <p class="text-muted-foreground text-sm leading-relaxed mb-4">
                                                {{ project.description }}
                                            </p>
                                            <div class="flex flex-wrap gap-2 mb-4">
                                                <span v-for="tech in project.technologies" :key="tech"
                                                    class="bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium border border-primary/30">
                                                    {{ tech }}
                                                </span>
                                            </div>
                                            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                                                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group/btn relative overflow-hidden">
                                                <Icon name="lucide:github" class="w-4 h-4" />
                                                <span>View Code</span>
                                            </a>
                                        </div>
                                    </div>

                                    <!-- Static tech stack (hidden on hover) -->
                                    <div
                                        class="flex flex-wrap gap-2 mb-6 group-hover:opacity-0 transition-opacity duration-300">
                                        <span v-for="tech in project.technologies" :key="tech"
                                            class="bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs px-3 py-1.5 rounded-full font-medium border border-primary/20">
                                            {{ tech }}
                                        </span>
                                    </div>

                                    <!-- Static action button (hidden on hover) -->
                                    <div class="mt-auto group-hover:opacity-0 transition-opacity duration-300">
                                        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                                            class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl font-medium shadow-lg transition-all duration-300 group/btn relative overflow-hidden">
                                            <Icon name="lucide:github" class="w-4 h-4" />
                                            <span>View Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Enhanced scroll indicators -->
                <div class="flex justify-center mt-8">
                    <div
                        class="bg-secondary/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30 shadow-lg">
                        <div class="text-sm text-muted-foreground flex items-center gap-3">
                            <Icon name="lucide:mouse" class="w-4 h-4" />
                            <!-- <span class="font-medium">{{ currentIndex + 1 }} / {{ projects.length }}</span> -->
                            <div class="flex gap-1">
                                <Icon name="lucide:arrow-left" class="w-3 h-3" />
                                <Icon name="lucide:arrow-right" class="w-3 h-3" />
                            </div>
                        </div>
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

/* Enhanced line clamp utilities */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Custom scrollbar for overlay content */
.overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: hsl(var(--primary) / 0.3);
    border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--primary) / 0.5);
}

/* Remove card scaling effect */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}
</style>