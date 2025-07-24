<template>
    <header :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5'
            : 'bg-transparent'
    ]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Enhanced logo -->
            <a href="#home" class="group relative">
                <span
                    class="font-serif text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary/80 group-hover:to-primary transition-all duration-300">
                    Anirudh Achari
                </span>
                <div
                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 group-hover:w-full transition-all duration-300">
                </div>
            </a>

            <!-- Enhanced Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a v-for="link in navLinks" :key="link.name" :href="link.href"
                    class="text-sm font-medium transition-all duration-300 hover:text-primary relative group py-2 px-1">
                    {{ link.name }}
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:w-full"></span>
                    <div
                        class="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                    </div>
                </a>
            </nav>

            <!-- Enhanced Mobile Menu Button -->
            <button class="md:hidden relative p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                @click="toggleMobileMenu" aria-label="Toggle menu">
                <div class="w-6 h-5 flex flex-col justify-between">
                    <span :class="[
                        'w-full h-0.5 bg-primary transition-all duration-300 rounded-full',
                        mobileMenuOpen && 'translate-y-2 rotate-45 bg-primary'
                    ]" />
                    <span :class="[
                        'w-full h-0.5 bg-primary transition-all duration-300 rounded-full',
                        mobileMenuOpen && 'opacity-0'
                    ]" />
                    <span :class="[
                        'w-full h-0.5 bg-primary transition-all duration-300 rounded-full',
                        mobileMenuOpen && '-translate-y-2 -rotate-45 bg-primary'
                    ]" />
                </div>
            </button>
        </div>

        <!-- Enhanced Mobile Navigation -->
        <div :class="[
            'md:hidden fixed inset-x-0 top-[72px] mx-6 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl transition-all duration-500 transform overflow-hidden',
            mobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95 pointer-events-none'
        ]">
            <nav class="flex flex-col p-6">
                <a v-for="(link, index) in navLinks" :key="link.name" :href="link.href"
                    class="group flex items-center gap-3 py-4 px-4 text-lg font-medium hover:text-primary transition-all duration-300 rounded-xl hover:bg-primary/10 relative overflow-hidden"
                    :style="{ animationDelay: `${index * 0.1}s` }" @click="closeMobileMenu">
                    <div
                        class="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300">
                    </div>
                    <span>{{ link.name }}</span>
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                    </div>
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// State for scroll detection and mobile menu toggle
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

// Nav links
const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

// Scroll event listener
const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Close mobile menu
const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};
</script>