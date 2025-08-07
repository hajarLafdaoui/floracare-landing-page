<template>
  <section class="cta-section">
    <div class="container">
      <h2 class="cta-title">Ready for Healthier Plants?</h2>
      <p class="cta-subtitle">Join hundreds of plant lovers who trust FloraCare to keep their greenery thriving. Sign up now for a free consultation.</p>
      <div class="cta-form">
        <input type="email" placeholder="Enter your email address">
        <button>Get Started</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.animateCta()
  },
  methods: {
    animateCta() {
      this.$gsap.to('.cta-section', {
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 90%'
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        onComplete: () => {
          this.$gsap.to('.cta-form', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            delay: 0.2,
            ease: 'power2.out'
          })
        }
      })
    }
  }
}
</script>