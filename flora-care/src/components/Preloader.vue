<template>
  <div class="preloader" id="preloader">
    <div class="preloader-logo">
      <span class="preloader-icon">
        <i class="fas fa-leaf"></i>
      </span>
      <span class="preloader-text" id="preloaderText"></span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Preloader text animation
    const preloaderText = document.getElementById('preloaderText');
    const text = "FloraCare";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        preloaderText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
      } else {
        // Fade out animation
        this.$gsap.to("#preloader", {
          duration: 0.8,
          opacity: 0,
          onComplete: () => {
            this.$emit('complete');
          }
        });
      }
    }

    typeWriter();
  }
}
</script>