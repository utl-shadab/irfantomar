// class MyHeader extends HTMLElement {
//     connectedCallback() {
//       this.innerHTML = `
//       <header class="main-header">
// 		<div class="header-sticky">
// 			<nav class="navbar navbar-expand-lg">
// 				<div class="container">
// 					<!-- Logo Start -->
// 					<a class="navbar-brand" href="index.html">
// 						<img src="images/logo.svg" alt="Logo">
// 					</a>
// 					<!-- Logo End -->

// 					<!-- Main Menu Start -->
// 					<div class="collapse navbar-collapse main-menu">
//                         <div class="nav-menu-wrapper">
//                             <ul class="navbar-nav mr-auto" id="menu">
//                                 <li class="nav-item "><a class="nav-link" href="index.html">Home</a>
//                                 </li>                                
//                                 <li class="nav-item"><a class="nav-link" href="about.html">About Us</a>
//                                 <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
//                                 <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
//                                 <!-- <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
//                                     <ul>                                        
//                                         <li class="nav-item"><a class="nav-link" href="service-single.html">Service Details</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="project-single.html">Project details</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="team.html">Our Team</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="team-single.html">Team Details</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing Plan</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="testimonials.html">Testimonials</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="image-gallery.html">Image Gallery</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="video-gallery.html">Video Gallery</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
//                                         <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
//                                     </ul>
//                                 </li> -->
//                                 <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>                         
//                             </ul>
//                         </div>

//                         <!-- Header Btn Start -->
//                         <div class="header-btn">
//                             <a href="contact.html" class="btn-default">Get Started</a>
//                         </div>
//                         <!-- Header Btn End -->
// 					</div>
// 					<!-- Main Menu End -->
// 					<div class="navbar-toggle"></div>
// 				</div>
// 			</nav>
// 			<div class="responsive-menu"></div>
// 		</div>
// 	</header>
//       `;

//   }
// }

// customElements.define("my-header", MyHeader);
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   <header class="main-header">
		<div class="header-sticky">
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<!-- Logo Start -->
					<a class="navbar-brand" href="./">
						<img src="images/logo.svg" alt="Logo">
					</a>
					<!-- Logo End -->

					<!-- Main Menu Start -->
					<div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
                                <li class="nav-item "><a class="nav-link" href="./">Home</a>
                                  
                                </li>                                
                                <li class="nav-item"><a class="nav-link" href="about.html">About Us</a>
                                </li><li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                             <!--   <li class="nav-item submenu"><a class="nav-link" href="#">Pages</a>
                                    <ul>                                        
                                        <li class="nav-item"><a class="nav-link" href="service-single.html">Service Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="blog-single.html">Blog Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                                        <li class="nav-item"><a class="nav-link" href="project-single.html">Project details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="team.html">Our Team</a></li>
                                        <li class="nav-item"><a class="nav-link" href="team-single.html">Team Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing Plan</a></li>
                                        <li class="nav-item"><a class="nav-link" href="testimonials.html">Testimonials</a></li>
                                        <li class="nav-item"><a class="nav-link" href="image-gallery.html">Image Gallery</a></li>
                                        <li class="nav-item"><a class="nav-link" href="video-gallery.html">Video Gallery</a></li>
                                        <li class="nav-item"><a class="nav-link" href="faqs.html">FAQs</a></li>
                                        <li class="nav-item"><a class="nav-link" href="404.html">404</a></li>
                                    </ul>
                                </li>  -->
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>                         
                            </ul>
                        </div>
                        
                        <!-- Header Btn Start -->
                        <div class="header-btn">
                            <a href="contact.html" class="btn-default">Get Started</a>
                        </div>
                        <!-- Header Btn End -->
					</div>
					<!-- Main Menu End -->
				<div class="navbar-toggle">
        <a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;">
        <span class="slicknav_menutxt"></span><span class="slicknav_icon slicknav_no-text">
        <span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar">
        </span>
        <span class="slicknav_icon-bar"></span></span>
        </a>
        </div>
				</div>
			</nav>
			<div class="responsive-menu"><div class="slicknav_menu"><ul class="slicknav_nav slicknav_hidden" style="display: none;" aria-hidden="true" role="menu">
                                <li class="nav-item  slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a class="nav-link" href="./" tabindex="-1">Home</a>
                                   
                                </li>                                
                                <li class="nav-item"><a class="nav-link" href="about.html" role="menuitem" tabindex="-1">About Us</a>
                                </li><li class="nav-item"><a class="nav-link" href="services.html" role="menuitem" tabindex="-1">Services</a></li>
                                <li class="nav-item"><a class="nav-link" href="blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                                <!-- <li class="nav-item submenu slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a class="nav-link" href="#" tabindex="-1">Pages</a>
        <span class="slicknav_arrow">►</span></a><ul role="menu" class="slicknav_hidden" style="display: none;" aria-hidden="true">                                        
            <li class="nav-item"><a class="nav-link" href="service-single.html" role="menuitem" tabindex="-1">Service Details</a></li>
            <li class="nav-item"><a class="nav-link" href="blog-single.html" role="menuitem" tabindex="-1">Blog Details</a></li>
            <li class="nav-item"><a class="nav-link" href="projects.html" role="menuitem" tabindex="-1">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="project-single.html" role="menuitem" tabindex="-1">Project details</a></li>
            <li class="nav-item"><a class="nav-link" href="team.html" role="menuitem" tabindex="-1">Our Team</a></li>
            <li class="nav-item"><a class="nav-link" href="team-single.html" role="menuitem" tabindex="-1">Team Details</a></li>
            <li class="nav-item"><a class="nav-link" href="pricing.html" role="menuitem" tabindex="-1">Pricing Plan</a></li>
            <li class="nav-item"><a class="nav-link" href="testimonials.html" role="menuitem" tabindex="-1">Testimonials</a></li>
            <li class="nav-item"><a class="nav-link" href="image-gallery.html" role="menuitem" tabindex="-1">Image Gallery</a></li>
            <li class="nav-item"><a class="nav-link" href="video-gallery.html" role="menuitem" tabindex="-1">Video Gallery</a></li>
            <li class="nav-item"><a class="nav-link" href="faqs.html" role="menuitem" tabindex="-1">FAQs</a></li>
            <li class="nav-item"><a class="nav-link" href="404.html" role="menuitem" tabindex="-1">404</a></li>
        </ul>
    </li> -->
                                <li class="nav-item"><a class="nav-link" href="contact.html" role="menuitem" tabindex="-1">Contact Us</a></li>                         
                            </ul></div></div>
		</div>
	</header>
    `;

    // Highlight active link
    const currentPath = window.location.pathname.split("/").pop();
    const links = this.querySelectorAll("a.nav-link");

    links.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
        link.classList.add("active");
      }
    });
  }
}

customElements.define("my-header", MyHeader);
