<template>
      <section class='justify-center items-center lg:mt:0 py-20 px-4'>
        <div class='mx-auto text-center'>
            <div class='flex flex-col items-center mb-4'  data-aos="fade-up" data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000">
                <img src="/images/profile1.jpg" alt="profile image" width={100} height={100} 
                class='rounded-full mb-4 w-32 h-32 object-cover ring-4 ring-primary'/>
            </div>

            <h1 class='text-4xl md:text-4xl font-bold mb-6'><span class="hover:translate-x-3">👋</span>  Hi, I'm <span class='text-primary'>Nur Insyirah Suhaimi</span></h1>

            <p class='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Software & Mobile Developer | Vue, Laravel, Angular, Ionic, Flutter</p>

            <!-- <div class='flex justify-center space-x-4 mb-8'>
                <a href="/" class='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300'>
                    <Icon icon="line-md:linkedin" class="text-3xl"/>
                </a>
                <a href="/" class='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300'>
                    <Icon icon="line-md:github" class="text-3xl"/>
                </a>
            </div> -->

            <div class='flex flex-col md:flex-row justify-center gap-4'>
                <a href='#contact' class='bg-primary inline-block w-full md:w-auto text-white px-8 py-3
                rounded-lg hover:text-yellow-400 transition-colors'>Contact Me</a>

            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
</script>
