<template>
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-word">Nurture</span>
          <span class="title-word">Your</span>
          <span class="title-word">Greenery</span>
        </h1>
        <p class="hero-subtitle">Professional plant care services that bring life and vitality to your indoor and outdoor spaces with our expert horticulturalists.</p>
        <div class="hero-buttons">
          <button class="cta-button">Book Consultation</button>
          <button class="outline-button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="hero-image">
      <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&h=800&q=80" alt="Plant Care">
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.animateHero()
  },
  methods: {
    animateHero() {
      this.$gsap.to('#hero', {
        duration: 0.5,
        opacity: 1,
        onComplete: () => {
          this.$gsap.to('.hero-title', {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: 'power3.out'
          })
          
          this.$gsap.to('.hero-subtitle', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            delay: 0.4,
            ease: 'power2.out'
          })
          
          this.$gsap.to('.hero-buttons', {
            duration: 0.8,
            opacity: 1,
            y: 0,
            delay: 0.6,
            ease: 'power2.out'
          })
          
          this.$gsap.to('.hero-image', {
            duration: 1.2,
            opacity: 1,
            x: 0,
            delay: 0.8,
            ease: 'power3.out'
          })
        }
      })
    }
  }
}
</script>