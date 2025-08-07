<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">What Our Clients Say</h2>
      <div class="testimonials-container">
        <div class="testimonial-row">
          <div class="testimonial-card"
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index">
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="client-info">
              <div class="client-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name">
              </div>
              <div>
                <div class="client-name">{{ testimonial.name }}</div>
                <div class="client-position">{{ testimonial.position }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" @click="prevTestimonialSet">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-btn" @click="nextTestimonialSet">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          text: "FloraCare completely transformed my indoor jungle! Their team is knowledgeable, punctual, and truly cares about the plants. My home has never looked more vibrant.",
          name: "Sarah Johnson",
          position: "Homeowner, Seattle",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          text: "As a busy professional, I had no time for my garden. FloraCare brought it back to life and now it's the envy of the neighborhood. Worth every penny!",
          name: "Michael Chen",
          position: "Software Engineer, San Francisco",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          text: "Their irrigation system saved my plants during the heatwave. I was about to give up on gardening, but FloraCare made it possible again. Highly recommended!",
          name: "Emma Rodriguez",
          position: "Teacher, Austin",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          text: "The personalized care plan they created for my exotic plants was exceptional. I've seen more growth in 3 months than in the previous year. Truly experts!",
          name: "David Kim",
          position: "Plant Collector, Miami",
          avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          text: "FloraCare helped me create a sustainable garden that thrives with minimal water. Their eco-friendly approach is exactly what I was looking for!",
          name: "Sophia Williams",
          position: "Environmental Scientist, Portland",
          avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          text: "After moving to a new home, I needed help with my neglected backyard. FloraCare transformed it into a beautiful oasis in just two months!",
          name: "James Wilson",
          position: "Architect, Denver",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          text: "The team at FloraCare has been maintaining our office plants for over a year now. Our workspace has never looked better, and the plants are thriving!",
          name: "Olivia Martinez",
          position: "Office Manager, Chicago",
          avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ],
      currentTestimonialSet: 0,
      testimonialInterval: null,
      testimonialsPerView: 2
    }
  },
  computed: {
    visibleTestimonials() {
      const arr = []
      for (let i = 0; i < this.testimonialsPerView; i++) {
        arr.push(
          this.testimonials[
            (this.currentTestimonialSet + i) % this.testimonials.length
          ]
        )
      }
      return arr
    }
  },
  mounted() {
    this.animateTestimonials()
    this.startCarousel()
  },
  methods: {
    animateTestimonials() {
      this.$gsap.to('.testimonial-card', {
        scrollTrigger: {
          trigger: '.testimonials',
          start: 'top 80%'
        },
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      })
    },
    startCarousel() {
      this.testimonialInterval = setInterval(() => {
        this.nextTestimonialSet()
      }, 3000)
    },
    nextTestimonialSet() {
      this.currentTestimonialSet = (this.currentTestimonialSet + 1) % this.testimonials.length
    },
    prevTestimonialSet() {
      this.currentTestimonialSet = (this.currentTestimonialSet - 1 + this.testimonials.length) % this.testimonials.length
    }
  },
  beforeDestroy() {
    clearInterval(this.testimonialInterval)
  }
}
</script>