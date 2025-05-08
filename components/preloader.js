class MyPreloader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<div class="preloader">
        <div class="loading-container">
          <img id="loading-icon" src="images/loader.svg" alt="Loading" />
        </div>
      </div>
`;
}
}

customElements.define("my-preloader", MyPreloader);