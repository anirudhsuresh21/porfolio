<template>
    <header :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
            : 'bg-transparent'
    ]">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="#home" class="font-serif text-xl font-bold text-primary">
                Anirudh Achari
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center space-x-8">
                <a v-for="link in navLinks" :key="link.name" :href="link.href"
                    class="text-sm font-medium transition-colors hover:text-primary relative group py-2">
                    {{ link.name }}
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
            </nav>

            <!-- Mobile Menu Button -->
            <button class="md:hidden" @click="toggleMobileMenu" aria-label="Toggle menu">
                <div class="w-6 h-5 flex flex-col justify-between">
                    <span
                        :class="['w-full h-0.5 bg-foreground transition-all duration-300', mobileMenuOpen && 'translate-y-2 rotate-45']" />
                    <span
                        :class="['w-full h-0.5 bg-foreground transition-all duration-300', mobileMenuOpen && 'opacity-0']" />
                    <span
                        :class="['w-full h-0.5 bg-foreground transition-all duration-300', mobileMenuOpen && '-translate-y-2 -rotate-45']" />
                </div>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div :class="[
            'md:hidden fixed inset-x-0 top-16 p-6 pt-0 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 transform',
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        ]">
            <nav class="flex flex-col space-y-6 py-8">
                <a v-for="link in navLinks" :key="link.name" :href="link.href"
                    class="text-lg font-medium hover:text-primary transition-colors" @click="closeMobileMenu">
                    {{ link.name }}
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