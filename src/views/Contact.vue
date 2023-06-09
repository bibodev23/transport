<template>
    <div id="contact" class="contact views_content">
        <h2>CONTACTEZ-NOUS</h2>
        <div id="contact_content">
            <div id="contact_infos">
            <img src="../assets/images/contact.png" alt="">
            </div>
            <div id="contact_form">
                <h3>DECRIVEZ-NOUS VOTRE DEMANDE</h3>
                <form action="">
                    <label for="name_company">Votre société : </label>
                    <input type="text" name="name_company" id="name_company" placeholder="Votre société">
                    
                    <label for="name">Entrez votre nom : </label>
                    <input type="text" name="name" id="name" placeholder="Votre nom">

                    <label for="email">Entrez votre mail : </label>
                    <input type="email" name="email" id="email" placeholder="Votre adresse email">

                    <label for="message">Votre message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre demande d'informations"></textarea>
                
                    <input id="btn_submit" type="submit" value="Envoyer">
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
export default (await import('vue')).defineComponent({
        name: "Contact",
    })
</script>

