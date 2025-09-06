

<template>
  <div class="bg-white dark:bg-gray-900 dark:text-white min-h-screen">
    <Navbar/>
    <Hero/>
    <Projects/>
    <Skills/>
    <Footer/>
  </div>

</template>

<script setup>
import {defineAsyncComponent} from 'vue';
const Navbar = defineAsyncComponent(()=>import('@/components/layouts/Navbar.vue'))//this make sure the navbar component will load only when neeh it which help improve performance
const Hero = defineAsyncComponent(()=>import('@/components/layouts/HeroSection.vue'))//this make sure the navbar component will load only when neeh it which help improve performance
const Projects = defineAsyncComponent(()=>import('@/components/layouts/Projects.vue'))//this make sure the navbar component will load only when neeh it which help improve performance
const Skills = defineAsyncComponent(()=>import('@/components/layouts/Skills.vue'))//this make sure the navbar component will load only when neeh it which help improve performance
const Footer = defineAsyncComponent(()=>import('@/components/layouts/Footer.vue'))//this make sure the navbar component will load only when neeh it which help improve performance
</script>