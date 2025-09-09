<template>
    <section id="contact" class="dark:bg-[#0F0E0E]">
        <div class="max-w-7xl mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-8 text-primary">Contact Me</h2>
            <div>
                <a href="/" class='text-2xl flex items-center '>
                    <Icon icon="line-md:email" class="text-3xl text-primary mr-2"/> <span>  nurinsyirahsuhaimi@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/nur-insyirah-suhaimi-71611a135/" target="_blank" class='text-2xl flex items-center '>
                    <Icon icon="line-md:linkedin" class="text-3xl text-primary mr-2"/> <span> Nur Insyirah Suhaimi</span>
                </a>
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
