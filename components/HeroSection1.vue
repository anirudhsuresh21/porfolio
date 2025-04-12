<template>
    <div
        class="font-semi text-7xl text-[#12F7D6] border box-border rounded-tl-[130px] rounded-br-[130px] p-7 justify-items-center shadow-[-7px_-7px_4px_-4px_rgba(18,_247,_214,_1)]">
        <div class="absolute border"></div>
        <div class="bg-white rounded-full w-20 h-20 justify-items-center mt-5 mb-3">
            <img src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="Profile Picture"
                class="rounded-full w-20 h-20" />
        </div>
        <div class="flex flex-col">
            <div class="text-3xl text-white font-semibold">
                Anirudh
            </div>
            <div class="text-2xl text-white">
                Full-Stack Developer
            </div>
            <div class="justify-items-start" id="info">
                <div class="flex flex-row items-center justify-center mt-5">
                    <Icon name="material-symbols:mail-outline-rounded" style="color: #12F7D6" size="1.4rem" />
                    <p class="text-base text-white ml-5">anirudhachari2004@gmail.com</p>
                </div>
                <div class="flex flex-row items-center justify-center mt-5">
                    <Icon name="material-symbols:location-on-outline-rounded" style="color: #12F7D6" size="1.4rem" />
                    <p class="text-base text-white ml-5">Mumbai</p>
                </div>
                <div class="flex flex-row mt-5 items-start justify-items-start">
                    <Icon name="material-symbols:work-outline" style="color: #12F7D6" size="1.4rem" />
                    <p class="text-base text-white ml-5">Freelancer</p>
                </div>
                <!-- <div class="flex flex-row mt-5 justify-evenly">
                            <Icon name="ri:links-line" style="color: #12F7D6" size="1.4rem" />
                            <a>
                                <Icon name="mingcute:linkedin-line" style="color: #12F7D6" size="1.4rem" />
                            </a>
                            <a>
                                <Icon name="mingcute:github-line" style="color: #12F7D6" size="1.4rem" />
                            </a>
                        </div> -->
                <div class="flex flex-row justify-around">
                    <div class="bg-[#12F7D6] w-auto h-6 p-1 flex items-center justify-center mt-5 rounded-lg ">
                        <p class="text-black text-sm">HTML</p>
                    </div>
                    <div class="bg-[#12F7D6] w-auto h-6 p-1 flex items-center justify-center mt-5 rounded-lg ml-1">
                        <p class="text-black text-sm">JS / TS</p>
                    </div>
                    <div class="bg-[#12F7D6] w-auto h-6 p-1 flex items-center justify-center mt-5 rounded-lg ml-1 ">
                        <p class="text-black text-sm">Flutter</p>
                    </div>
                    <div class="bg-[#12F7D6] w-auto h-6 p-1 flex items-center justify-center mt-5 rounded-lg ml-1">
                        <p class="text-black text-sm">Nest Js</p>
                    </div>
                    <div class="bg-[#12F7D6] w-auto h-6 p-1 flex items-center justify-center mt-5 rounded-lg ml-1">
                        <p class="text-black text-sm">Nuxt</p>
                    </div>
                </div>
                <div class="bg-white rounded-full w-32 h-10 flex items-center justify-center mt-5">
                    <p class="text-black text-base">Download</p>
                </div>
            </div>
        </div>
    </div>
</template>