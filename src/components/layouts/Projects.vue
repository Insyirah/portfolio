<template>
    <section id="projects" class="">
        <div class="max-w-7xl mx-auto px-4 py-20">
        <!-- Title -->
        <div class="flex py-4">
          <div class=" bg-yellow-400 w-3 rounded"></div>
          <h2 class="text-3xl text-primary ml-2">Featured Projects</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article data-aos="fade-left" v-for="project in projects" key={{project.title}} 
            class="border dark:border-slate-700 rounded-lg shadow-md p-6 hover:ring-1 hover:ring-primary">
                <img :src="'images/'+project.image" alt="profile image"  class="object-cove rounded-lg mb-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              <h3 
                class="text-xl font-semibold mb-2"
              >
                {{project.title}}
              </h3>
              <p 
                class="text-gray-600 dark:text-gray-300 mb-4"
              >
                {{project.description}}
              </p>
              <div class="flex flex-wrap gap-2 mb-4" >
                  <span
                    v-for="item in project.technologies"
                    key={{item}}
                    class="px-3 py-1 bg-yellow-400 text-gray-900 rounded-lg text-sm"
                  >
                    {{item}}
                  </span>
              </div>
              <div class="text-sm text-primary">
                <a v-if="project.githubLink" :href="project.githubLink"><i class="fa fa-github" aria-hidden="true"></i></a>
                <a v-if="project.demoLink" :href="project.demoLink"><i class="fa fa-link ml-2" aria-hidden="true"></i></a>
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
        githubLink: null,
        demoLink: 'https://myehs.doe.gov.my/',
        image: '/myehs.png',
      },
      {
        title: 'Expense Tracker (MERN Stack)',
        description: 'A full-stack Expense Tracker Application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project helps users manage their personal finances by tracking income and expenses in real-time through an intuitive and responsive interface.',
        technologies: ['ReactJs','TailwindCss','Express','MongoDB','NodeJs'],
        githubLink: 'https://github.com/Insyirah/full-stack-expense-tracker-MERN',
        demoLink: 'https://vue3-simple-catalog.vercel.app/', 
        image: '/expense.png',
      },
      {
        title: 'Vue3 Simple My-Catalog',
        description: 'A Vue 3 catalog app with Pinia for state management and Tailwind CSS for styling, built as a practice project to explore Vue3 and responsive UI design.',
        technologies: ['Vue.js','Tailwind','Pinia'],
        githubLink: 'https://github.com/Insyirah/vue3-simple-catalog',
        demoLink: 'https://vue3-simple-catalog.vercel.app/', 
        image: '/catalog.png',
      },
      {
        title: 'SoS Online System',
        description: 'A platform with private video consultations.',
        technologies: ['Vue.js','Bootstrap','Laravel'],
        githubLink: null,
        demoLink: 'https://sos.dev-cdp.xyz/', 
        image: '/sos.png',
      },
      {
        title: 'My Portfolio',
        description: 'My personal portfolio website showcasing my projects and skill.',
        technologies: ['Vue.js','Tailwind'],
        githubLink: 'https://github.com/Insyirah/portfolio',
        demoLink: null, 
        image: '/portfolio.png',
      },
      {
        title: 'VetPn9 Portal',
        description: 'An integrated system for managing poultry farm licensing and enforcement more efficiently.',
        technologies: ['Vue.js','Bootstrap','Laravel'],
        githubLink: null,
        demoLink: 'https://vet-n9.enterstripe.cloud/',
        image: '/vetpn.png',
      },
      {
        title: 'Aircond Service Booking',
        description: 'A platform to book reliable aircond services anytime, anywhere.',
        technologies: ['Vue.js','Bootstrap','Laravel'],
        githubLink: null,
        demoLink: 'https://aircond.staging.nazsoftech.com/',
        image: '/aircond.png',
      },
      {
        title: 'Zakat Perak',
        description: 'A mobile application to get info from existing website.',
        technologies: ['Ionic Framework', 'Typescript'],
        githubLink: null,
        demoLink: null,
        image: '/zakat-perak.png',
      },
      {
        title: 'Aircond Service Application',
        description: 'An application to book reliable aircond services anytime, anywhere.',
        technologies: ['Flutter'],
        githubLink: null,
        demoLink: null,
        image: '/aircond-mobile.png',
      },
      {
        title: 'Statistic Dashboard',
        description: 'A dashboard that shows statistics in real time for easier monitoring and reporting.',
        technologies: ['Vue.js', 'Laravel', 'Chart.js'],
        githubLink: null,
        demoLink: null,
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
