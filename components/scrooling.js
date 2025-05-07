class MyScrolling extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
 <div class="our-scrolling-ticker">
        <!-- Scrolling Ticker Start -->
        <div class="scrolling-ticker-box">
            <div class="scrolling-content">
                <Span><img src="images/star-icon.svg" alt="">personal trainers</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">outdoor & online trainers</span>
                <span><img src="images/star-icon.svg" alt="">personal training</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">personal trainers</span>
                <Span><img src="images/star-icon.svg" alt="">personal trainers</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">outdoor & online trainers</span>
                <span><img src="images/star-icon.svg" alt="">personal training</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">personal trainers</span>
            </div>

            <div class="scrolling-content">
                <Span><img src="images/star-icon.svg" alt="">personal trainers</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">outdoor & online trainers</span>
                <span><img src="images/star-icon.svg" alt="">personal training</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">personal trainers</span>
                <Span><img src="images/star-icon.svg" alt="">personal trainers</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">outdoor & online trainers</span>
                <span><img src="images/star-icon.svg" alt="">personal training</span>
                <span><img src="images/star-icon.svg" alt="">live classes</span>
                <span><img src="images/star-icon.svg" alt="">personal trainers</span>
            </div>
        </div>
        <!-- Scrolling Ticker End -->
    </div>
`;
}
}

customElements.define("my-scrolling", MyScrolling);