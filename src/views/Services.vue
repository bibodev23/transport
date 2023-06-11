<template>
    <div id="services" class="services views_content">
        <div class="services_page_content">
            <h2>Nos services</h2>
            <div class="services_icons">
                <div v-for="service in services" :key="service.title" data-aos="fade-down" class="services_icons_content">
                    <h3>{{service.title}}</h3>
                    <div class="services_img">
                        <img :src="service.image" alt="" srcset="">
                    </div> 
                    <p>{{service.description}}</p>
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
        data () {
            return {
                services : [
                    {
                        titre: "SUIVI PERSONNALISE",
                        image: require('@/assets/images/service1.svg'),
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.",
                    },
                    {
                        titre: "OPTIMISAATION DES COUTS",
                        image: require('@/assets/images/service2.svg'),
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.",
                    },
                    {
                        titre: "TRACABILITE",
                        image: require('@/assets/images/service3.svg'),
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.",
                    },
                    {
                        titre: "MANAGEMENT",
                        image: require('@/assets/images/service4.svg'),
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.",
                    },
                    {
                        titre: "ADMINISTRATIF",
                        image: require('@/assets/images/service5.svg'),
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.",
                    },
                    {
                        titre: "ENGAGEMENTS",
                        image: require('@/assets/images/service6.svg'),
                        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestiae.",
                    },
                ]
            }
        },
    })
</script>