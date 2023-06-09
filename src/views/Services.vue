<template>
    <div id="services" class="services views_content">
        <div class="services_page_content">
            <h2>Nos services</h2>
            <div class="services_icons">
                <div data-aos="fade-down" class="services_icons_content">
                    <h3>Suivi personnalisé</h3>
                    <div class="services_img">
                        <img src="../assets/images/service1.svg" alt="">
                    </div> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.</p>
                </div>
                <div data-aos="zoom-in" class="services_icons_content">
                    <h3 >Suivi personnalisé</h3>
                    <div class="services_img">
                        <img src="../assets/images/service2.svg" alt="">
                    </div> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.</p>
                </div>
                <div data-aos="fade-down" class="services_icons_content">
                    <h3>Suivi personnalisé</h3>
                    <div class="services_img">
                        <img src="../assets/images/service3.svg" alt="">
                    </div> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.</p>
                </div>
                <div data-aos="slide-right" class="services_icons_content">
                    <h3>Suivi personnalisé</h3>
                    <div class="services_img" >
                        <img src="../assets/images/service4.svg" alt="">
                    </div> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.</p>
                </div>
                <div data-aos="fade-down" class="services_icons_content">
                    <h3 >Suivi personnalisé</h3>
                    <div class="services_img" >
                        <img src="../assets/images/service5.svg" alt="">
                    </div> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.</p>
                </div>
                <div data-aos="fade-up  " class="services_icons_content">
                    <h3>Suivi personnalisé</h3>
                    <div class="services_img" >
                        <img src="../assets/images/service6.svg" alt="">
                    </div> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default (await import('vue')).defineComponent({
        name: "Services",
        mounted() {
        import('aos').then((AOS) => {
        AOS.default.init({
            duration: 2000,
        });
    });
  },
    })
</script>