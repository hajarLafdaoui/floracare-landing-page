<template>
  <section class="hero" id="hero" ref="hero">
    <div class="container">
      <div class="hero-content" ref="heroContent">
        <h1 class="hero-title" ref="heroTitle">
          <span class="title-word">Nurture</span>
          <span class="title-word">Your</span>
          <span class="title-word">Greenery</span>
        </h1>
        <p class="hero-subtitle" ref="heroSubtitle">
          Professional plant care services that bring life and vitality to your indoor and outdoor spaces with our
          expert horticulturalists.
        </p>
        <div class="hero-buttons" ref="heroButtons">
          <button class="cta-button">Book Consultation</button>
          <button class="outline-button">Learn More</button>
        </div>
      </div>
    </div>
    <div class="hero-image" ref="heroImage">
      <img src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&h=800&q=80"
        alt="Plant Care">
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Animate hero section like in index.html using refs
    this.$gsap.to(this.$refs.hero, {
      opacity: 1,
      duration: 1.5,
      delay: 0.5
    });

    this.$gsap.to(this.$refs.heroContent, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.8,
      ease: "power2.out"
    });

    this.$gsap.to(this.$refs.heroTitle, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.0,
      ease: "back.out(1.7)"
    });

    this.$gsap.to(this.$refs.heroSubtitle, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.5,
      ease: "power2.out"
    });

    this.$gsap.to(this.$refs.heroButtons, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.8,
      ease: "elastic.out(1, 0.75)"
    });

    this.$gsap.to(this.$refs.heroImage, {
      x: 0,
      opacity: 1,
      duration: 1.8,
      delay: 1.2,
      ease: "expo.out"
    });
  }
}
</script>

<style lang="scss">
.hero {
  opacity: 0;
  transition: none;
}

.hero-content {
  opacity: 0;
  transform: translateX(-30px);
  transition: none;
}

.hero-title {
  opacity: 0;
  transform: translateY(30px);
  transition: none;
}

.hero-subtitle {
  opacity: 0;
  transform: translateY(30px);
  transition: none;
}

.hero-buttons {
  opacity: 0;
  transform: translateY(30px);
  transition: none;
}

.hero-image {
  opacity: 0;
  transform: translateY(-50%) translateX(100px);
  transition: none;
}
</style>