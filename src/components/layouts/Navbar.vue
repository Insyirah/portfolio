<template>
    <header class="w-full bg-white/10 dark:bg-dark z-50 border-b border-gray-200 dark:border-gray-700 ">
        <div class="flex justify-between items-center p-8 lg:px-12 relative z-20">
            <a href="/" class="text-xl font-bold text-primary">Nur | Dev</a>
            <!-- Mobile Toggle Button -->
            <div class="md:hidden z-30">
                <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                    <span v-if="isMenuOpen" class="text-5xl md:text-primary text-white dark:text-white">  
                        <Icon icon="material-symbols:close"/>
                    </span>
                    <span v-else class="text-5xl md:text-primary text-white dark:text-white">  
                        <Icon icon="material-symbols:menu"/>
                    </span>
                </button>
            </div>

            <!-- Navbar Link -->
            <nav
                :class="[
                    `fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:bg-transparent
                     md:flex md:justify-between md:flex-row  ${isMenuOpen ? 'block' : 'hidden'}`
                ]">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name">
                    <a :href="item.href" class="md:hover:text-primary transition-colors 
                            font-medium"
                    @click="scrollToSection(item.href)">{{ item.name }}</a>
                </li>
            </ul>

             <button @click="toggleDarkMode()" class="text-white ml-20 z-10 hidden md:block">
                <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-3xl text-primary"/>
                <Icon v-else icon="line-md:sunny-outline" class="text-3xl text-primary"/>
             </button>
            </nav>
        </div>
    </header>
</template> 
<script setup> 
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const isMenuOpen = ref(false);
const Menu = ref([
        {name:'Home',href:'/'},
        {name:'About',href:'#about'},
        {name:'Projects',href:'#projects'},
        {name:'Contact',href:'#contacts'}
])

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section){
        section.scrollIntoView({behavior:'smooth'})
    }
}

//reactive property to track dark mode
const isDarkMode = ref(localStorage.getItem('theme')=='dark')

const toggleDarkMode = ()=>{
    console.log(isDarkMode.value);
    const html = document.documentElement;
    if(isDarkMode.value){
        html.classList.remove('dark');
        localStorage.setItem('theme','light')
    }else{
        html.classList.add('dark');
        localStorage.setItem('theme','dark')
    }

    //Update dark mode state
    isDarkMode.value = !isDarkMode;
}
</script>
