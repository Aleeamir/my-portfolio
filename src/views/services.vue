<template>
    <div>

        <div class="services">
            <h1>My Services</h1>
            <div class="services-portion">
                <div v-for="service in services" :key="service.id" class="services-area">
                    <h2>{{ service.name }}</h2>
                    <p>{{ service.description }}</p>
                    <img :src="service.imageUrl" alt="Service Image">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            services: [
                { id: 1, name: 'Web Development and Design', description: 'I create and design websites, ensuring they are visually appealing, user-friendly, and responsive across various devices. This involves both front-end development (client-side) and back-end development (server-side) to deliver a seamless user experience.', imageUrl: '/src/assets/Images/website.jpg' },
                { id: 2, name: 'Custom Web Application Development', description: 'I often specialize in building custom web applications tailored to specific business needs. These applications may include content management systems (CMS), e-commerce platforms, or other interactive tools, enhancing the functionality of a website and meeting unique requirements.', imageUrl: '/src/assets/Images/maintanance.jpg' },
                { id: 3, name: 'Website Maintenance and Optimization', description: 'Continuous maintenance and optimization services are crucial for keeping websites up-to-date, secure, and performing well. Web developers regularly update content, apply security patches, and optimize website speed and responsiveness to ensure a positive user experience and maintain search engine rankings.', imageUrl: '/src/assets/Images/website2.jpg' },
            ],
        };
    },
};
</script>
  
<style scoped>
* {
    color: white;
}


.services {
  text-align: center;
}

.services-portion {
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap; 
  margin: 20px; 
}

.services-area {
  border: 1px solid #ccc; 
  padding: 20px; 
  margin: 10px; 
  text-align: left; 
  max-width: 300px; 
  
}
.services-area:hover {
  background-color: #f0f0f0;
  transform: scale(1.1);
}


.services-area img {
  max-width: 100%; 
 width: 300px;
  height: 300px;

}
.services h2 {
    text-align: center;
    font-family: 'Roboto', sans-serif;

}
.services-portion p {
    font-family: 'Roboto', sans-serif;
}
.services h1 {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    padding: 10% 0% 7% 0%;

}

</style>
  