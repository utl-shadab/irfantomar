class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
       <footer class="footer-main light-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <!-- About Footer start -->
                    <div class="about-footer">
                        <!-- Footer Logo Start -->
                        <div class="footer-logo">
                            <img src="images/logo.svg" alt="">
                        </div>
                        <!-- Footer Logo End -->

                        <!-- Footer Contact Box Start -->
                        <div class="about-footer-content">
                            <p> Whether you’re ready to start or just have a few questions, I’m here to help.</p>
                        </div>
                        <!-- Footer Contact Box End -->

                        <!-- Footer Newsletters Form Start -->
                        <div class="footer-newsletters-form">
                            <form id="newslettersForm" action="#" method="POST">
                                <div class="form-group">
                                    <input type="email" name="mail" class="form-control"  id="mail" placeholder="Enter your email" required>
                                    <button type="submit"><img src="images/arrow-black.svg" alt=""></button>
                                </div>
                            </form>
                        </div>
                        <!-- Footer Newsletters Form End -->
                    </div>
                    <!-- About Footer End -->
                </div>

                <div class="col-lg-3 col-md-6">
                    <!-- Footer Links Start -->
                    <div class="footer-links">
                        <h3>contact us</h3>
                        
                        <!-- Footer Contact Item Start -->
                        <div class="footer-contact-item">
                            <div class="icon-box">
                                <img src="images/icon-phone.svg" alt="">
                            </div>
                            <div class="footer-contact-content">
                                <p><a href="tel:+919540236983 ">+91 954 023 6983 </a></p>
                            </div>
                        </div>
                        <!-- Footer Contact Item End -->
                        
                        <!-- Footer Contact Item Start -->
                        <div class="footer-contact-item">
                            <div class="icon-box">
                                <img src="images/icon-mail.svg" alt="">
                            </div>
                            <div class="footer-contact-content">
                                <p><a href="mailto:irfantomar@gmail.com ">irfantomar@gmail.com </a></p>
                            </div>
                        </div>
                        <!-- Footer Contact Item End -->
                    </div>
                    <!-- Footer Links End -->
                </div>

                <div class="col-lg-3 col-md-6">
                    <!-- Footer Links start -->
                    <div class="footer-links">
                        <h3>our gym timing</h3>
                        <ul>
                            <li>Mon - Fri : 08:00 AM - 10:00 PM</li>
                            <li>Sat - Sun : 08:00 AM - 09:00 PM</li>
                        </ul>
                    </div>
                    <!-- Footer Links end -->
                </div>

                <div class="col-lg-3 col-md-12">
                    <!-- Footer Links start -->
                    <div class="footer-links">
                        <h3>our location</h3>
                        <ul>
                            <li>Based in Delhi, Available Worldwide Online</li>
                        </ul>
                    </div>
                    <!-- Footer Links end -->
                </div>

                <div class="col-lg-12">
                    <!-- Footer Copyright Section Start -->
                    <div class="footer-copyright">
                        <!-- Footer Copyright Start -->
                        <div class="footer-copyright-text">
                            <p>Copyright © 2025  All Rights Reserved.</p>
                        </div>
                        <!-- Footer Copyright End -->

                        <!-- Footer Social Link Start -->
                        <div class="footer-social-links">
                            <ul>
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                        <!-- Footer Social Link End -->
                    </div>
                    <!-- Footer Copyright Section End -->
                </div>
            </div>
        </div>
    </footer>
      `;
  }
}

customElements.define("my-footer", MyFooter);