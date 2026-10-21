class HeaderComponent extends HTMLElement {
 connectedCallback() {
    this.innerHTML = `
<header class="container-fluid header-container">
    <div class="row">
        <div class="col">
            <div class="container">
                <div class="row align-items-center">
                    
                    <!-- Columna del Logo y Botón Hamburguesa en móvil -->
                    <div class="col-12 col-lg-4 d-flex justify-content-between justify-content-lg-start align-items-center pt-3 pb-2 text-white">
                        <a href="index.html" class="text-white text-decoration-none">
                            <div id="logo" class="logo"></div>
                        </a>
                        
                        <!-- Botón hamburguesa: Oculto en web, visible en móvil -->
                        <button class="navbar-toggler d-lg-none shadow-none border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa-solid fa-bars text-white fs-3 transition-icon" id="togglerIcon"></i>
                        </button>
                    </div>
                    
                    <!-- Columna del Menú -->
                    <div class="col-12 col-lg-8 pb-2 pb-lg-0">
                        <!-- Inicio Navbar -->
                        <nav class="navbar navbar-expand-lg p-0">
                            <div class="container-fluid px-0">
                                
                                <!-- MENÚ PRINCIPAL: Inicia OCULTO gracias a la clase 'collapse' -->
                                <div class="collapse navbar-collapse claro justify-content-between w-100 p-2 p-lg-0 rounded-3 shadow-sm menu-movil-ajustado" id="navbarBasic">
                                    
                                    <!-- Opciones a la izquierda (Home y Coordinaciones) -->
                                    <ul class="navbar-nav mb-0 align-items-start align-items-lg-center">
                                        <li class="nav-item mx-lg-2 mx-xl-3 my-1 my-lg-0">
                                            <a class="nav-link active item-dev py-1 py-lg-2" aria-current="page" href="index.html">Home</a>
                                        </li>
                                        <li class="nav-item dropdown mx-lg-2 mx-xl-3 my-1 my-lg-0">
                                            <a class="nav-link dropdown-toggle list-dev py-1 py-lg-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Coordinaciones
                                            </a>
                                            <!-- Submenú: En móvil estará siempre desplegado DENTRO del menú cuando se abra la hamburguesa -->
                                            <ul class="dropdown-menu shadow border-0 m-0 p-2 text-start submenu-siempre-desplegado-movil">
                                                <li><a class="dropdown-item py-1 py-lg-2 rounded" href="teleinformatica.html">Teleinformática</a></li>
                                                <li><a class="dropdown-item py-1 py-lg-2 rounded" href="industrias-c.html">Ind. Creativas</a></li>
                                                <li><a class="dropdown-item py-1 py-lg-2 rounded" href="mercadeo.html">Mercadeo</a></li>
                                                <li><a class="dropdown-item py-1 py-lg-2 rounded" href="logistica.html">Logística</a></li>
                                                <li><a class="dropdown-item py-1 py-lg-2 rounded" href="bilinguismo.html">Bilingüismo</a></li>
                                                <li><a class="dropdown-item py-1 py-lg-2 rounded" href="bienestar.html">Bienestar al aprendiz</a></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <!-- Bloque derecho: FERIA CONEXIA y Badge -->
                                    <ul class="navbar-nav mb-0 text-start text-lg-end ms-lg-auto align-items-lg-center mt-2 mt-lg-0">
                                        <li class="nav-item d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-1 bg-dark bg-opacity-25 px-2 py-1 rounded-2">
                                            <div>
                                                <p class="mb-0 text-white fw-bold text-dev-label" style="font-size: 0.75rem;">FERIA CONEXIA</p>
                                                <p class="mb-0 text-white fw-bold text-dev-label text-lumin-dev" style="font-size: 0.65rem;">26 al 30 OCTUBRE</p>
                                            </div>
                                            <span class="badge bg-item-dev text-uppercase" style="font-size: 0.55rem;">EVENTOS EN VIVO</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                        <!-- Fin Navbar -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Estilos CSS con selectores precisos para no forzar la visibilidad antes de tiempo -->
<style>
    .transition-icon {
        transition: transform 0.3s ease;
    }

    /* Reglas EXCLUSIVAS para pantalla responsive (móvil) */
    @media (max-width: 991.98px) {
        
        /* Solo cuando el menú está desplegado (.show) o animándose (.collapsing) se le aplica flex-column */
        .navbar-collapse.show.menu-movil-ajustado,
        .navbar-collapse.collapsing.menu-movil-ajustado {
            display: flex !important;
            flex-direction: column;
            gap: 0.25rem !important;
            margin-top: 0 !important;
            padding-top: 0.25rem !important;
            padding-bottom: 0.5rem !important;
        }

        .menu-movil-ajustado .navbar-nav + .navbar-nav {
            margin-top: 0.5rem !important;
        }

        /* Cuando el menú hamburguesa está ABIERTO, el submenú de Coordinaciones se muestra completo e integrado */
        .navbar-collapse.show .submenu-siempre-desplegado-movil {
            display: block !important;
            position: static !important;
            float: none !important;
            box-shadow: none !important;
            background-color: transparent !important;
            border: none !important;
            padding-left: 1rem !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
        }
        
        .submenu-siempre-desplegado-movil .dropdown-item {
            color: #fff !important;
        }
    }
</style>

<!-- Script de JavaScript para el cambio fluido de hamburguesa a X -->
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const navbarCollapse = document.getElementById("navbarBasic");
        const togglerIcon = document.getElementById("togglerIcon");

        if (navbarCollapse && togglerIcon) {
            navbarCollapse.addEventListener("show.bs.collapse", function () {
                togglerIcon.classList.remove("fa-bars");
                togglerIcon.classList.add("fa-xmark");
                togglerIcon.style.transform = "rotate(90deg)";
            });

            navbarCollapse.addEventListener("hide.bs.collapse", function () {
                togglerIcon.classList.remove("fa-xmark");
                togglerIcon.classList.add("fa-bars");
                togglerIcon.style.transform = "rotate(0deg)";
            });
        }
    });
</script>
      
      `
      ;

    }
}

customElements.define('header-component', HeaderComponent);