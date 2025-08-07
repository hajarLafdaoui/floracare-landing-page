<template>
  <section class="features">
    <div class="container">
      <h2 class="section-title">Our Plant Care Services</h2>
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'fas fa-spa',
          title: 'Indoor Plant Care',
          description: 'Regular maintenance for your indoor plants including watering, pruning, and pest management.'
        },
        {
          icon: 'fas fa-tree',
          title: 'Outdoor Gardening',
          description: 'Seasonal garden care, planting, weeding, and landscape maintenance for your outdoor spaces.'
        },
        {
          icon: 'fas fa-tint',
          title: 'Irrigation Systems',
          description: 'Smart irrigation solutions to keep your plants hydrated efficiently and sustainably.'
        }
      ]
    }
  },
  mounted() {
    this.animateFeatures()
  },
  methods: {
    animateFeatures() {
      this.$gsap.to('.section-title', {
        scrollTrigger: {
          trigger: '.features',
          start: 'top 90%'
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      })
      
      this.$gsap.to('.feature-card', {
        scrollTrigger: {
          trigger: '.features',
          start: 'top 80%'
        },
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: 'power2.out'
      })
    }
  }
}
</script>