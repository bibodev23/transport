<template>
    <div id="home" class="home views_content">
        <div class="home_header home_sections">
            <div class="home_header_img">
                <img src="../assets/images/camion_header.png" alt="">
            </div>
            <div class="home_header_title">
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
            <h2>NOS SPECIALISATIONS</h2>
            <div class="title_line"></div>
            <div class="specialations_list">
                <div class="specialisations_list_content">
                    <div class="img">
                        <img src="../assets/images/specialisation1.png" alt="" srcset="">
                    </div>
                    
                    <div class="specialisations_title">
                        <h3>TRANSPORT LOT PARTIEL OU GROUPAGE</h3>
                    </div>
                    <div class="specialisations_text">
                        <p>Le transport lot partiel ou groupage permet le regroupement de marchandises de plusieurs clients dans un même camion. Cela permet d’optimiser l’espace et offre davantage de possibilités d’envoi de la marchandise. Cette solution est idéale pour répondre à votre besoin d’expédition.</p>
                    </div>
                </div>
                <div class="specialisations_list_content">
                    <div class="img">
                        <img src="../assets/images/specialisation2.png" alt="" srcset="">
                    </div>
                    <div class="specialisations_title">
                        <h3>TRANSPORT CAMION COMPLET</h3>
                    </div>
                    <div class="specialisations_text">
                        <p>Le transport camion complet signifie que le camion transporte la marchandise d’un seul client. Votre transport est optimisé et dédié à 100% à votre flux de marchandises. Cette solution est idéale pour répondre à des envois de marchandises en quantité importante.</p>
                    </div>
                </div>
                <div class="specialisations_list_content">
                    <div class="img">
                        <img src="../assets/images/specialisation3.png" alt="" srcset="">
                    </div>
                    <div class="specialisations_title">
                        <h3>TRANSPORT EXPRESS</h3>
                    </div>
                    <div class="specialisations_text">
                        <p>Le transport express consiste à utiliser un véhicule adapté à votre marchandise tout en respectant vos impératifs de délais, en général urgents.</p>
                    </div>
                </div>
                <div class="specialisations_list_content">
                    <div class="img">
                        <img src="../assets/images/specialisation4.png" alt="" srcset="">
                    </div>
                    <div class="specialisations_title">
                        <h3>LOGISTIQUE</h3>
                    </div>
                    <div class="specialisations_text">
                        <p>Grâce à notre expertise et nos équipement, nous sommes en mesure de vous proposer un service de logistique et de stockage de vos marchandises au sein de nos entrepôts.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_services home_sections">
            <div class="home_services_content">
                <div class="home_services_title">
                    <h2>NOS SERVICES</h2>
                    <p>Chacune de nos missions comporte un ensemble de services vous offrant qualité, confort et simplicité pour une gestion de vos transports avec un gain de temps.</p>
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
            <h2>NOS ENGAGEMENTS MASA</h2>
            <div class="title_line"></div>

            <div class="home_engagements_list">
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
            <div class="home_engagements_list">
                
                <div class="home_engagements_text">
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
        


    </div>



</template>

<script>
    export default (await import('vue')).defineComponent({
        name: "Home",
    })
</script>