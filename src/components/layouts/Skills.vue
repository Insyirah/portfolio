<template>
    <section id="skills" class="dark:bg-[#0F0E0E]">
        <div class="max-w-7xl mx-auto px-4 py-20">
        <div class="flex py-4">
          <div class=" bg-yellow-400 w-3 rounded"></div>
          <h2 class="text-3xl text-primary ml-2">My Skills</h2>
        </div>
            <h3 class="text-3xl font-bold text-dark dark:text-white mb-4">A Glimpse of Me</h3>
            <p class="text-2xl text-dark mb-8 dark:text-white">Software Developer with 8 years experience, specializing in front-end development. My focus is on creating seamless, responsive, and user-friendly interfaces that connect design with functionality.</p>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4" >
                <div data-aos="fade-right"  data-aos-offset="300" 
                   v-for="skill in skills" class="flex justify-between items-center shadow-md border dark:border-slate-700 dark:bg-primary/10 text-primary hover:ring-1 hover:ring-primary p-2 text-center hover:text-yellow-400 rounded-lg" >
                    <div class="flex items-center justify-center bg-primary/20 text-primary rounded-full w-10 h-10 px-2 py-1 mr-2 hover:bg-primary/40 "> 
                        <i :class="`${skill.icon} text-yellow-400 text-xl`"></i>
                        <img class="w-8" :src="`images/${skill.img}`" alt="" v-if="!skill.icon">
                    </div> <h3>{{ skill.title }}</h3>
                </div>
           
            </div>
        </div>
     
  </section>
</template>


<script setup>
import {ref} from "vue";

const skills = ref([
        { title: 'VueJs',icon:'fa-brands fa-vuejs'},
        { title: 'ReactJs',icon:'fa-brands fa-react'},
        { title: 'React Native',icon:'fa-brands fa-react'},
        { title: 'Angular',icon:'fa-brands fa-angular'},
        { title: 'TailwindCss',img:'/tailwind-icon.png'},
        { title: 'Bootstrap', icon:'fa-brands fa-bootstrap'},
        { title: 'Laravel',icon:'fa-brands fa-laravel'},
        { title: 'NodeJs',icon:'fa-brands fa-node-js'},
        { title: 'MySQL',icon:'fa-brands fa-database'},
        { title: 'Ionic Framework',img:'/ionic-icon.png'},
        { title: 'Flutter',icon:"fa-brands fa-flutter"},
        { title: 'Javascript',icon:"fab fa-js"},
        { title: 'Typescript',img:'ts-icon.png'},
        { title: 'Git',icon:'fa-brands fa-git-alt'},
        { title: 'JIRA',icon:'fa-brands fa-jira'},
      
])
</script>
