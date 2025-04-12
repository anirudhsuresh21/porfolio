<template>
    <div>
        <nav class="flex justify-between items-center px-8 py-4 bg-[#292F36] shadow">
            <div class="font-bold text-xl">
                <span class="text-[#12F7D6] font-mono">
                    &lt;C/&gt;
                </span>
                <nuxt-link to="/" class="text-white font-mono hover:text-[#12F7D6] transition-colors">&nbsp;Anirudh
                    Achari</nuxt-link>
            </div>
            <ul class="flex space-x-6">
                <li><nuxt-link to="/" class="text-white font-mono font-medium hover:text-[#12F7D6] transition-colors"
                        active-class="text-[#12F7D6]">Home</nuxt-link></li>
                <li><nuxt-link to="#about"
                        class="text-white font-mono font-medium hover:text-[#12F7D6] transition-colors"
                        active-class="text-[#12F7D6]">About</nuxt-link>
                </li>
                <li><nuxt-link to="/about"
                        class="text-white font-mono font-medium hover:text-[#12F7D6] transition-colors"
                        active-class="text-[#12F7D6]">Projects</nuxt-link>
                </li>
                <li><nuxt-link to="/contact"
                        class="text-white font-mono font-medium hover:text-[#12F7D6] transition-colors"
                        active-class="text-[#12F7D6]">Contact</nuxt-link></li>
            </ul>
        </nav>
        <hr class="border-t border-[#12F7D6] opacity-20" />
        <slot />
    </div>
</template>
