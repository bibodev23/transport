<template>
    <div id="footer">
        <div class="back-to-top contact_content">
        <button @click="scroll_to_top"><i class="fa-solid fa-arrow-up"></i></button>
        </div>

        <div class="contact_details contact_content">
            <ul>
                <li @click="map"><i class="fa-solid fa-location-dot"></i> 8 ch de l'herse - 86100 Châtellerault</li>
                <li @click="copy_phone"><i class="fa fa-phone"></i> 06 36 08 13 12</li>
                <li> 
                    <a href="mailto:support@masatransport.com"> <i class="fa fa-envelope"></i> support@masatransport.com</a></li>
            </ul>
        </div>

        <div class="contact_logo contact_content">
            <img src="../assets/images/logo.png" alt="" srcset="">
            <p>"Nous facilitons vos tâches complexes"</p>
        </div>

        <div class="contact_links contact_content">
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/Services">Services</router-link></li>
                <li><router-link to="/Contact">Contact</router-link></li>
            </ul>
        </div>

        <div class="back-to-top contact_content">
        <button @click="scroll_to_top"><i class="fa-solid fa-arrow-up"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            scroll_to_top() {
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
                });
            },
            copy_phone() {
                const phone_number = "06 36 08 13 12";
                navigator.clipboard.writeText(phone_number).then(() => {
                    alert("Numéro de téléphone copié !");
                }).catch ((error) => {
                    console.error("Erreur lors de la copie", error);
                });
            },

            map () {
                const url = "https://www.google.com/maps/place/15+Rue+de+Picardie,+41000+Blois/@47.597808,1.3356277,3a,90y,89.31h,82.08t/data=!3m6!1e1!3m4!1sZNkFnzXfADbU6bTiGA3CjQ!2e0!7i16384!8i8192!4m7!3m6!1s0x47e4a80784a6e177:0xa750e463588fbd20!8m2!3d47.5977306!4d1.3361439!10e5!16s%2Fg%2F11hzb2sb6q?authuser=0&entry=ttu";
                window.open(url, "_blank")
            },
        }
            


    }
</script>