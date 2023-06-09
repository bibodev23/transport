<template>
    <div id="home" class="home views_content" >
        <div class="home_header home_sections">
            <div class="home_header_img" data-aos="slide-right">
                <img src="../assets/images/camion_header.png" alt="" >
            </div>
            <div class="home_header_title" data-aos="slide-left">
                <h1>TRANSPORTER,
                <br>
                C'EST NOTRE
                <br>
                <span>
                METIER
                </span>
                </h1>
            </div>
        </div>
        <div class="home_specialisations home_sections">
            <h2 data-aos="fade-down" data-aos-duration="3000">NOS SPECIALISATIONS</h2>
            <div class="title_line"></div>
            <div class="specialations_list" >
                <div v-for="specialisation in specialisations" :key="specialisation.title" class="specialisations_list_content" data-aos="fade-up">
                    <div class="img">
                        <img :src="specialisation.image" alt="" srcset="">
                    </div>
                    
                    <div class="specialisations_title" >
                        <h3>{{specialisation.title}}</h3>
                    </div>
                    <div class="specialisations_text">
                        <p>{{specialisation.description}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_services home_sections">
            <div class="home_services_content" data-aos="slide-left" data-aos-duration="3000">
                <div class="home_services_title">
                    <h2>NOS SERVICES</h2>
                    <p id="service_text">Chacune de nos missions comporte un ensemble de services vous offrant qualité, confort et simplicité pour une gestion de vos transports avec un gain de temps.</p>
                </div>

                <div class="home_services_list">
                    <div class="list_content">
                        <p>SUIVI PERSONNALISE</p>
                    </div>
                    <div class="list_content">
                        <p>FLEXIBILITE</p>
                    </div>
                    <div class="list_content">
                        <p>TRACABILITE</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_engagements home_sections">
            <h2 data-aos="fade-up">NOS ENGAGEMENTS MASA</h2>
            <div class="title_line"></div>

            <div class="home_engagements_list" data-aos="slide-right">
                <div class="engagements_img">
                    <img src="../assets/images/camion1.png" alt="">
                </div>
                <div class="home_engagements_text">
                    <div class="line"></div>
                    <div class="engagement_text_content">
                        <h3>SERVICE DE QUALITE</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio perspiciatis ullam, deleniti cupiditate minima minus ut ipsum animi quae quibusdam iure explicabo accusamus nobis deserunt dolorum, praesentium natus voluptatum?</p>
                    </div>
                </div>
            </div>
            <div class="home_engagements_list engagement_cout" data-aos="slide-left">
                <div class="home_engagements_text ">
                    <div class="line"></div>
                    <div class="engagement_text_content">
                        <h3>OPTIMISATION DES COUTS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio perspiciatis ullam, deleniti cupiditate minima minus ut ipsum animi quae quibusdam iure explicabo accusamus nobis deserunt dolorum, praesentium natus voluptatum?</p>
                    </div>
                </div>
                <div class="engagements_img">
                    <img src="../assets/images/signature.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="home_devis home_sections" data-aos="zoom-in">
            <div class="btn_devis">
            <button><a href="/contact">Demander un devis</a></button>
            </div>
        </div>
    </div>



</template>

<script>
    import 'aos/dist/aos.css';
    import 'aos/dist/aos.js';

    export default (await import('vue')).defineComponent({
        name: "Home",
        data () {
            return {
                specialisations: [
                {
                    image: require('@/assets/images/specialisation1.png'),
                    title: "TRANSPORT LOT PARTIEL OU GROUPAGE",
                    description: "Le transport lot partiel ou groupage permet le regroupement de marchandises de plusieurs clients dans un même camion. Cela permet d’optimiser l’espace et offre davantage de possibilités d’envoi de la marchandise. Cette solution est idéale pour répondre à votre besoin d’expédition.",
                },
                {
                    image: require("@/assets/images/specialisation2.png"),
                    title: "TRANSPORT CAMION COMPLET",
                    description: "Le transport camion complet signifie que le camion transporte la marchandise d’un seul client. Votre transport est optimisé et dédié à 100% à votre flux de marchandises. Cette solution est idéale pour répondre à des envois de marchandises en quantité importante.",
                },
                {
                    image: require('@/assets/images/specialisation3.png'),
                    title: "TRANSPORT EXPRESS",
                    description: "Le transport express consiste à utiliser un véhicule adapté à votre marchandise tout en respectant vos impératifs de délais, en général urgents.",
                },
                {
                    image: require('@/assets/images/specialisation4.png'),
                    title: "LOGISTIQUE",
                    description: "Grâce à notre expertise et nos équipement, nous sommes en mesure de vous proposer un service de logistique et de stockage de vos marchandises au sein de nos entrepôts.",
                }
            ]
                
            };
        },
        mounted() {
        import('aos').then((AOS) => {
        AOS.default.init({
            duration: 2000,
        });
    });
  },
    })
</script>