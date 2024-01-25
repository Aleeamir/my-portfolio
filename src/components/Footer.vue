<template>
    <div class="footer">
        <div class="f-first">
            <img src="/src/assets/Images/logo.png" alt="">
        </div>
        <div class="f-second">
            <h4>Social Profiles</h4>
            <a href="https://github.com/Aleeamir?tab=repositories" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <a href="facebook.com/profile.php?id=100089012859470" target="_blank" rel="noopener noreferrer">
                Facebook
            </a>
            <a href="https://www.linkedin.com/in/ali-amir-43226223b/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
        </div>

        <div class="f-third">
            <h4>About Me</h4>
            <router-link to="/services">
                <p>Services</p>
            </router-link>
            <RouterLink to="/">
                <p>Experience</p>
            </RouterLink>
            <RouterLink to="/aboutme">
                <p>About</p>
            </RouterLink>
        </div>
    </div>
</template>
<!-- <template>
    <div class="footer">
        <div class="f-first">
            <img src="/src/assets/Images/logo.png" alt="">
        </div>

        <div>
            <a href="https://www.linkedin.com/in/ali-amir-43226223b/" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://github.com/Aleeamir?tab=repositories" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100089012859470" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
        </div>
        <div class="f-third">
            <h4>About Me</h4>
            <router-link to="/services">
                <p>Services</p>
            </router-link>
            <router-link to="/">
                <p>Experience</p>
            </router-link>
            <router-link to="/aboutme">
                <p>About</p>
            </router-link>
        </div>
    </div>
</template> -->

<style scoped>
/* .footer {
    background-color: white;
} */
.f-second {
    display: flex;
    flex-direction: column;
}

h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: Ivartext, sans-serif;
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 1.25;
    color: white;
}

.footer p {
    color: white;
}

.footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-content: space-around;
    margin-top: 40px;
    padding: 30px;
}

.f-first img {
    width: 300px;
    height: 300px;
}

.f-third {
    padding: 5% 2% 2% 2%;
}
.f-second {
    padding: 5% 2% 2% 2%;
}
.f-second a {
    text-decoration: none;
    color: white;
    padding-top: 10px;
    font-family: Ivartext, sans-serif;
    margin-top: 10px;
}
.f-third a {
    text-decoration: none;
    color: white;
    padding-top: 10px;
    font-family: Ivartext, sans-serif;
    margin-top: 10px;
}
</style>