<template>
    <div id="navigation">
        <div id="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="btn_devis">
            <button><a href="/contact">Demander un devis</a></button>
        </div>
        <div >
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/Services">Services</router-link></li>
                <li><router-link to="/Contact">Contact</router-link></li>
            </ul>
        </div>
    </div>
    
</template>