import { HeroSection3, Footer } from '../.nuxt/components';
<template>
    <!-- <div id="home" class="bg-[#292F36] min-h-screen flex items-center justify-center">
        <div class="flex flex-col justify-center items-center text-center">
            <p class="font-ubuntu font-semi text-7xl text-[#12F7D6] mb-10">Developer</p>
            <div class="flex flex-row items-center text-center justify-around w-full">
                <HeroSection1 />
                <HeroSection2 />
                <HeroSection3 />
            </div>
        </div>
    </div> -->
    <Header />
    <Hero id="home" />
    <About id="about" />
    <Skills id="skills" />
    <Project id="projects" />
    <Contact id="contact" />
    <Footer />
</template>