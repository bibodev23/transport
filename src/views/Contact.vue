<template>
    <div id="contact" class="contact views_content">
        <h2>CONTACTEZ-NOUS</h2>
        <div id="contact_content">
            <div id="contact_infos">
            <img src="../assets/images/contact.png" alt="">
            </div>
            <div id="contact_form">
                <h3>DECRIVEZ-NOUS VOTRE DEMANDE</h3>
                <form action="https://formspree.io/f/mnqykeva" method="POST" @submit="submit_form">
                    <label for="name_company">Votre société : </label>
                    <input type="text" v-model="company" placeholder="Votre société">
                    
                    <label for="name">Entrez votre nom : </label>
                    <input type="text" v-model="name" placeholder="Votre nom">

                    <label for="email">Entrez votre mail : </label>
                    <input type="email" v-model="email" placeholder="Votre adresse email">

                    <label for="message">Votre message</label>
                    <textarea v-model="message" cols="30" rows="10" placeholder="Votre demande d'informations"></textarea>
                
                    <input id="btn_submit" type="submit" value="Envoyer">
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>

export default (await import('vue')).defineComponent({
  name: "Contact",
  data () {
    return {
        company: "",
        name: "",
        email:"",
        message:"",
    }
  }
});
</script>

