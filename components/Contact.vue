import { Icon } from '../.nuxt/components';
<script setup>
import emailjs from '@emailjs/browser';
import { ref, onMounted } from 'vue';

const formRef = ref(null);
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);
const errorMessage = ref('');

const submitForm = async (event) => {
    if (!formRef.value) return;

    isSubmitting.value = true;
    submitSuccess.value = false;
    submitError.value = false;

    try {
        // Send email using EmailJS with the form reference approach
        const serviceID = 'service_mahjhf9';
        const templateID = 'template_nk53y4m';
        const publicKey = "cN75mBcT7-xk2psJw";

        await emailjs.sendForm(
            serviceID,
            templateID,
            formRef.value,
            publicKey
        );

        // Reset form after submission
        formRef.value.reset();
        submitSuccess.value = true;
    } catch (error) {
        submitError.value = true;
        errorMessage.value = error.text || 'Failed to send message. Please try again later.';
        console.error('Error sending email:', error);
    } finally {
        isSubmitting.value = false;
    }
};

// Initialize EmailJS
onMounted(() => {
    emailjs.init('cN75mBcT7-xk2psJw'); // Use the same public key as above
});

// Social media links
const socials = [
    { name: 'Github', icon: 'lucide:github', link: "https://github.com/anirudhsuresh21" },
    { name: 'LinkedIn', icon: 'lucide:linkedin', link: "https://www.linkedin.com/in/achari-anirudh-suresh-5a286124b/" },
    { name: 'Instagram', icon: 'lucide:instagram', link: "https://www.instagram.com/anirudh.achari_21/" }
];
</script>

<template>
    <section id="contact"
        class="section-padding py-24 bg-gradient-to-br from-background via-secondary/20 to-primary/5 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000">
        </div>

        <div class="max-w-6xl mx-auto relative z-10">
            <div class="text-center mb-16">
                <div
                    class="inline-block rounded-full bg-gradient-to-r from-primary/10 to-primary/20 px-4 py-2 text-sm mb-6 backdrop-blur-sm border border-primary/20">
                    <span
                        class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-medium">Get
                        In Touch</span>
                </div>
                <h2
                    class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Let's Work Together
                </h2>
                <p class="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                    Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="group">
                    <div
                        class="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50 p-8 space-y-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                        <div class="space-y-3">
                            <h3
                                class="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                Send a Message
                            </h3>
                            <p class="text-muted-foreground">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form ref="formRef" class="space-y-6" @submit.prevent="submitForm">
                            <div class="space-y-6">
                                <div class="relative group">
                                    <input type="text" name="name" placeholder="Your Name" required
                                        class="w-full border-2 border-border/30 rounded-xl px-4 py-4 bg-background/80 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all duration-300 hover:border-primary/40" />
                                    <div
                                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    </div>
                                </div>

                                <div class="relative group">
                                    <input type="email" name="email" placeholder="Your Email" required
                                        class="w-full border-2 border-border/30 rounded-xl px-4 py-4 bg-background/80 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all duration-300 hover:border-primary/40" />
                                    <div
                                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    </div>
                                </div>

                                <div class="relative group">
                                    <input type="text" name="title" placeholder="Subject"
                                        class="w-full border-2 border-border/30 rounded-xl px-4 py-4 bg-background/80 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all duration-300 hover:border-primary/40" />
                                    <div
                                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    </div>
                                </div>

                                <div class="relative group">
                                    <textarea rows="5" name="message" placeholder="Your Message" required
                                        class="w-full border-2 border-border/30 rounded-xl px-4 py-4 bg-background/80 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all duration-300 hover:border-primary/40 resize-none"></textarea>
                                    <div
                                        class="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    </div>
                                </div>
                            </div>

                            <button type="submit"
                                class="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-4 rounded-xl flex justify-center items-center gap-3 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 relative overflow-hidden group"
                                :disabled="isSubmitting">
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                                </div>
                                <Icon v-if="isSubmitting" name="lucide:loader" class="w-5 h-5 animate-spin" />
                                <Icon v-else name="lucide:send" class="w-5 h-5" />
                                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                            </button>

                            <div class="min-h-[60px] flex items-center justify-center">
                                <div v-if="submitSuccess"
                                    class="text-green-600 text-center bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800 animate-fadeIn">
                                    <Icon name="lucide:check-circle" class="w-5 h-5 inline mr-2" />
                                    Message sent successfully! Thank you for reaching out.
                                </div>
                                <div v-if="submitError"
                                    class="text-red-600 text-center bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800 animate-fadeIn">
                                    <Icon name="lucide:alert-circle" class="w-5 h-5 inline mr-2" />
                                    {{ errorMessage }}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="space-y-6">
                    <div
                        class="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-xl p-8 rounded-2xl flex items-start gap-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
                        <div
                            class="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl min-w-[60px] h-[60px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon name="lucide:mail" class="w-7 h-7 text-primary" />
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-lg mb-3 text-foreground">Email</h3>
                            <a href="mailto:anirudhachari2004@gmail.com"
                                class="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
                                anirudhachari2004@gmail.com
                            </a>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-br from-secondary/80 to-secondary/60 backdrop-blur-xl p-8 rounded-2xl flex items-start gap-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
                        <div
                            class="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl min-w-[60px] h-[60px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon name="lucide:map-pin" class="w-7 h-7 text-primary" />
                        </div>
                        <div class="flex-1">
                            <h3 class="font-bold text-lg mb-3 text-foreground">Location</h3>
                            <p class="text-muted-foreground text-lg">Mumbai, Maharashtra, India</p>
                        </div>
                    </div>

                    <div
                        class="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-primary/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                        <h3
                            class="font-bold text-2xl mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                            Let's connect on social media
                        </h3>
                        <div class="flex gap-4">
                            <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank"
                                class="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-primary/10 transition-all duration-300 group hover:scale-110">
                                <div
                                    class="bg-gradient-to-br from-primary/30 to-primary/20 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:rotate-6">
                                    <Icon :name="social.icon" class="w-6 h-6 text-primary" />
                                </div>
                                <span
                                    class="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                    {{ social.name }}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
}

/* Custom focus styles for better accessibility */
input:focus,
textarea:focus {
    box-shadow: 0 0 0 3px rgba(var(--primary), 0.1);
}

/* Smooth hover transitions */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:rotate-6 {
    transform: rotate(6deg);
}
</style>