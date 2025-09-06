<template>
    <section id="skills" class="dark:bg-[#0F0E0E]">
        <div class="max-w-7xl mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-12 text-primary">My Skills</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3" >
                <div  v-for="skill in skills" class="shadow-md border dark:border-slate-700 dark:bg-primary/10 text-primary hover:ring-1 hover:ring-primary px-4 py-4 text-center" >
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
      
])
</script>
