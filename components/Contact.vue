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
    <section id="contact" class="section-padding py-24">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <div class="inline-block rounded-lg bg-primary/5 px-3 py-1 text-sm mb-4">
                    Get In Touch
                </div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
                <p class="text-muted-foreground max-w-2xl mx-auto">
                    Have a project in mind or want to discuss potential collaborations? Feel free to reach out!
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div>
                    <div class="bg-secondary rounded-lg shadow p-6 space-y-6">
                        <div>
                            <h3 class="text-xl font-semibold">Send a Message</h3>
                            <p class="text-muted-foreground text-sm">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>
                        </div>
                        <form ref="formRef" class="space-y-6" @submit.prevent="submitForm">
                            <input type="text" name="name" placeholder="Your Name" required
                                class="w-full border border-gray-300 rounded px-4 py-2 bg-secondary/80 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent" />
                            <input type="email" name="email" placeholder="Your Email" required
                                class="w-full border border-gray-300 rounded px-4 py-2 bg-secondary/80 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent" />
                            <input type="text" name="title" placeholder="Subject"
                                class="w-full border border-gray-300 rounded px-4 py-2 bg-secondary/80 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent" />
                            <textarea rows="5" name="message" placeholder="Your Message" required
                                class="w-full border border-gray-300 rounded px-4 py-2 bg-secondary/80 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"></textarea>
                            <button type="submit"
                                class="w-full bg-primary text-white py-2 rounded flex justify-center items-center gap-2"
                                :disabled="isSubmitting">
                                <Icon v-if="isSubmitting" name="lucide:loader" class="w-4 h-4 animate-spin" />
                                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                            </button>
                            <p v-if="submitSuccess" class="text-green-600 text-center">
                                Message sent successfully! Thank you for reaching out.
                            </p>
                            <p v-if="submitError" class="text-red-600 text-center">
                                {{ errorMessage }}
                            </p>
                        </form>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="space-y-8">
                    <div class="bg-secondary p-6 rounded-lg flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                            <Icon name="lucide:mail" class="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 class="font-medium mb-2">Email</h3>
                            <p class="text-muted-foreground">anirudhachari2004@gmail.com</p>
                        </div>
                    </div>

                    <div class="bg-secondary p-6 rounded-lg flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                            <Icon name="lucide:map-pin" class="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 class="font-medium mb-2">Location</h3>
                            <p class="text-muted-foreground">Mumbai, Maharashtra, India</p>
                        </div>
                    </div>

                    <!-- <div class="bg-secondary p-6 rounded-lg flex items-start gap-4">
                        <div class="bg-primary/10 p-3 rounded-full w-10 h-10 flex items-center justify-center">
                            <Icon name="lucide:phone" class="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 class="font-medium mb-2">Phone</h3>
                            <p class="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                    </div> -->

                    <div class="bg-primary/5 p-8 rounded-lg">
                        <h3 class="font-medium text-xl mb-4">Let's connect on social media</h3>
                        <div class="flex gap-4">
                            <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank"
                                class="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-primary/10 transition-colors">
                                <div
                                    class="bg-primary/30 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                                    <Icon :name="social.icon" class="w-5 h-5" />
                                </div>
                                <span class="text-xs text-muted-foreground">{{ social.name }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Just in case 'reveal' was hiding things before */
.reveal {
    opacity: 1;
    transform: none;
}
</style>