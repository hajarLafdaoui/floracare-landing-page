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
    this.$gsap.to('.section-title', {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    });

    this.$gsap.to('.feature-card', {
      scrollTrigger: {
        trigger: '.features',
        start: 'top 80%',
        toggleActions: 'play none none none',
        stagger: 0.3
      },
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.3,
      ease: "elastic.out(1, 0.75)"
    });
  }
}
</script>

<style scoped>
.features {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  opacity: 0;
  transform: translateY(20px);
}

.feature-card:hover {
  transform: translateY(0);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #4caf50;
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 1rem;
  color: #666;
}
</style>