<template>
  <div>
    <Preloader v-if="showPreloader" />
    <div v-show="!showPreloader">
      <Header />
      <Hero :preloaderComplete="!showPreloader" />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  </div>
</template>

<script>

import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import HowItWorks from './components/HowItWorks.vue'
import Testimonials from './components/Testimonials.vue'
import CtaSection from './components/CtaSection.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Preloader,
    Header,
    Hero,
    Features,
    HowItWorks,
    Testimonials,
    CtaSection,
    Footer
  },
  data() {
    return {
      showPreloader: true
    }
  },
  
  mounted() {
    // Simulate preloader for 3 seconds
    setTimeout(() => {
      this.showPreloader = false;
    }, 3000);
  },
   
   hidePreloader() {
      this.showPreloader = false;
      this.initScrollAnimations();
    },
    initScrollAnimations() {
      // Initialize all scroll-triggered animations here
      this.$nextTick(() => {
        // Animate features on scroll
        this.$gsap.utils.toArray('.feature-card').forEach((card, i) => {
          this.$gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2
          });
        });

        // Animate steps on scroll
        this.$gsap.utils.toArray('.step').forEach((step, i) => {
          this.$gsap.from(step, {
            scrollTrigger: {
              trigger: step,
              start: 'top bottom-=100'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.3
          });
        });
      });
    }
}
</script>
<style lang="scss">
@import './styles/main.scss';
</style>