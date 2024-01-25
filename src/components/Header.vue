<template>
    <nav>
        <div class="navigation-bar">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/Images/logo.png" alt="">
                </router-link>
            </div>
            <div class="inner-nav">
                <RouterLink to="/">About Me</RouterLink>
                <RouterLink to="/services">Services</RouterLink>
                <RouterLink to="/experience">Experience</RouterLink>
            </div>
            <div class="sidenav">
                <button class="button-1" @click="openWhatsAppChat">Contact</button>
            </div>
        </div>
    </nav>
</template>
<script>

export default {
    data() {
        return {
            phoneNumber: '+923236314550',
            message: 'Hello, I\'d like to chat!',
        };
    },
    computed: {
        whatsappUrl() {
            return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
        },
    },
    methods: {
        openWhatsAppChat() {
            window.open(this.whatsappUrl, '_blank');
        },
    },
};

</script>
<style scoped>
.logo img {
    width: 200px;
    height: 200px;
}

.navigation-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2% 2% 0% 2%;
}

.inner-nav a {
    text-decoration: none;
    /* color: rgb(232, 220, 220); */
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: rgb(245, 239, 239);
}

.sidenav {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}


nav .navigation-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
}

.logo {
    padding: 20px;
}

.nav .navigation-bar {
    background-color: #7874;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

* {
    padding: 0;
    box-sizing: border-box;
}

.inner-nav a {
    text-decoration: none;
    color: rgb(249, 247, 247);
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    padding: 0 35px;
}

.inner-nav {
    border-right: black;
}

.sidenav a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    padding-right: 35px;
}

.button-1 {
    appearance: button;
    background-color: #000;
    background-image: none;
    border: 1px solid #000;
    border-radius: 4px;
    /* box-shadow: #e0b985 4px 4px 0 0,#000 4px 4px 0 1px; */
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0 5px 10px 0;
    overflow: visible;
    padding: 12px 40px;
    text-align: center;
    text-transform: none;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
}

.button-1:focus {
    text-decoration: none;
}

.button-1:hover {
    text-decoration: none;
}

.button-1:active {
    box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
    outline: 0;
}

.button-1:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
}

@media (min-width: 768px) {
    .button-1 {
        padding: 12px 50px;
    }
}
</style>  