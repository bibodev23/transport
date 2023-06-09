<template>
    <div id="navigation" class="navigation">
        <div id="logo">
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="btn_devis">
            <button><a href="/contact">Demander un devis</a></button>
        </div>
        <div class="navigation_links">
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/Services">Services</router-link></li>
                <li><router-link to="/Contact">Contact</router-link></li>
            </ul>
        </div>

        <!-- <div id="nav_narrow" class="nav_narrow">
                <i class="fa fa-bars fa-2x"></i>
                <div class="narrowLinks hidden">
                    <a href=""><i class="fa-solid fa-user"></i></a>
                    <a href="#competences"><i class="fa-solid fa-gear"></i></a>
                    <a href="#portfolio"><i class="fa-solid fa-desktop"></i></a>
                    <a href="#contact"><i class="fa fa-phone"></i></a>
                </div>
        </div> -->
    </div>
    
</template>