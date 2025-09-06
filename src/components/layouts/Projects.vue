<template>
    <section id="projects" class="dark:bg-[#0F0E0E]">
        <div class="max-w-7xl mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-12 text-primary">Featured Projectss</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
            <article v-for="project in projects" key={{project.title}} className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:ring-1 hover:ring-primary">
                <img :src="'images/'+project.image" alt="profile image"  className="object-cove rounded-lg mb-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              <h3 
                className="text-xl font-semibold mb-2"
              >
                {{project.title}}
              </h3>
              <p 
                className="text-gray-600 dark:text-gray-300 mb-4"
              >
                {{project.description}}
              </p>
              <div className="flex flex-wrap gap-2 mb-4" >
                  <span
                    v-for="item in project.technologies"
                    key={{item}}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {{item}}
                  </span>
              </div>
             
            </article>
        </div>
        </div>
     
  </section>
</template>


<script setup>
import {ref} from "vue";

const projects = ref([
        {
        title: 'MyEHS-Malaysia Environmentally Hazardous Substances System',
        description: 'A government portal built with Vue.js, Laravel, and Bootstrap.',
        technologies: ['Vue.js', 'Bootstrap', 'Chart.js'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/myehs.png',
      },
      {
        title: 'SoS Online System',
        description: 'A platform with private video consultations.',
        technologies: ['Vue.js','Bootstrap','Laravel'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com', 
        image: '/sos.png',
      },
      {
        title: 'My Portfolio',
        description: 'My personal portfolio website showcasing my projects and skill.',
        technologies: ['Vue.js','Tailwind'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com', 
        image: '/portfolio.png',
      },
      {
        title: 'VetPn9 Portal',
        description: 'An integrated system for managing poultry farm licensing and enforcement more efficiently.',
        technologies: ['Vue.js','Bootstrap','Laravel'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/vetpn.png',
      },
      {
        title: 'Aircond Service Booking',
        description: 'A platform to book reliable aircond services anytime, anywhere.',
        technologies: ['Vue.js','Bootstrap','Laravel'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/aircond.png',
      },
      {
        title: 'Zakat Perak',
        description: 'A mobile application to get info from existing website.',
        technologies: ['Ionic Framework', 'Typescript'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/zakat-perak.png',
      },
      {
        title: 'Aircond Service Application',
        description: 'An application to book reliable aircond services anytime, anywhere.',
        technologies: ['Flutter'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/aircond-mobile.png',
      },
      {
        title: 'Statistic Dashboard',
        description: 'A dashboard that shows statistics in real time for easier monitoring and reporting.',
        technologies: ['Vue.js', 'Laravel', 'Chart.js'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/statistic-dashboard.png',
      },
    //   {
    //     title: 'Expense Tracker',
    //     description: 'A personal finance tracker to manage expenses and income.',
    //     technologies: ['React', 'Firebase'],
    //     githubLink: 'https://github.com',
    //     demoLink: 'https://demo.com',
    //     image: '/expense-tracker.webp',
    //   }
])
</script>
