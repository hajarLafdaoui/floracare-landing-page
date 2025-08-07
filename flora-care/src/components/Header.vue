<template>
  <header :class="{'scrolled': isScrolled, 'visible': headerVisible}">
    <div class="container">
      <div class="header-content">
        <a href="#" class="logo">
          <i class="fas fa-leaf"></i> FloraCare
        </a>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <button class="cta-button">Get Started</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      headerVisible: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  }
}
</script>