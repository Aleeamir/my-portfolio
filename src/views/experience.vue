<template>
    <div class="experience">
        <h2>My Experiences</h2>

        <div v-for="experience in experiences" :key="experience.id" class="experience-block">
            <h3>{{ experience.jobTitle }}</h3>
            <p>{{ experience.companyName }} - {{ experience.duration }}</p>
            <p>{{ experience.description }}</p>

        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            experiences: [
                {
                    id: 1,
                    jobTitle: 'Front-End Developer',
                    companyName: 'PoxorTech',
                    duration: 'Jan 2022 - July2023',
                    description: 'Developing web applications using Vue.js.'
                },
                {
                    id: 2,
                    jobTitle: 'Front-End Developer',
                    companyName: 'Technology Brainz',
                    duration: 'Aug 2023 - Continue',
                    description: 'Worked on responsive user interfaces using HTML, CSS, and JavaScript, Vue.js.'
                },
            ]
        };
    }
};
</script>
  
<style scoped>
.experience h2 {
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}

.experience-block {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
}

.experience-block h3 {
    color: rgb(246, 232, 41);
    font-family: 'Roboto', sans-serif;

}
.experience-block p {
    color: white;
    font-family: 'Roboto', sans-serif;

}
.experience-block {
  border: 1px solid #ccc; 
  padding: 20px; 
  margin: 10px; 
  text-align: left; 
  max-width: 300px; 
  margin-top: 70px;
  
}
.experience-block:hover {
  transform: scale(1.1);
}
.experience {
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 40px;
}
</style>
  