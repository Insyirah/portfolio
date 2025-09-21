<template>
    <section id="contact" class="dark:bg-[#0F0E0E]">
        <div class="max-w-7xl mx-auto px-4 py-5">
          
            <div class="flex flex-wrap gap-2 md:gap-6 ">
                <div class="flex py-4">
                <div class=" bg-yellow-400 w-3 rounded"></div>
                <h2 class="text-2xl text-primary ml-2">Contact Me</h2>
            </div>
                <a href="mailto:nurinsyirahsuhaimi@gmail.com" class='text-xl flex items-center'>
                    <Icon icon="line-md:email" class="text-xl text-primary mr-2"/> <span>  nurinsyirahsuhaimi@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/nur-insyirah-suhaimi-71611a135/" target="_blank" class='text-xl flex items-center '>
                    <Icon icon="line-md:linkedin" class="text-xl text-primary mr-2"/> <span> Nur Insyirah Suhaimi</span>
                </a>
                <a href="https://github.com/insyirah" target="_blank" class='text-xl flex items-center '>
                    <Icon icon="line-md:github" class="text-lg text-primary mr-2"/> <span>Insyirah</span>
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
