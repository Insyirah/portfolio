<template>
    <section id="skills" class="dark:bg-[#0F0E0E]">
        <div class="max-w-7xl mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-8 text-primary">My Skills</h2>
            <h3 class="text-3xl font-bold text-white mb-4">A little bit about me</h3>
            <p class="text-2xl text-white mb-8">Front-End Developer with strong experience in Vue.js, transforming UI/UX designs into responsive applications and mapping API data into the frontend.</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3" >
                <div data-aos="zoom-in-up"   v-for="skill in skills" class="shadow-md border dark:border-slate-700 dark:bg-primary/10 text-primary hover:ring-1 hover:ring-primary px-4 py-4 text-center" >
                    <h3>{{ skill.title }}</h3>
                </div>
           
            </div>
        </div>
     
  </section>
</template>


<script setup>
import {ref} from "vue";

const skills = ref([
        { title: 'VueJs'},
        { title: 'Angular'},
        { title: 'TailwindCss'},
        { title: 'Bootstrap'},
        { title: 'Laravel'},
        { title: 'Ionic Framework'},
        { title: 'Flutter'},
        { title: 'Javascript'},
        { title: 'Typescript'},
        { title: 'Git'},
        { title: 'Jira'},
      
])
</script>
