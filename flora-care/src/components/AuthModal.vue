<template>
  <div class="auth-modal-overlay" :class="{'active': active}">
    <div class="auth-modal">
      <div class="close-modal" @click="closeModal">
        <i class="fas fa-times"></i>
      </div>
      <div class="modal-header">
        <div class="modal-tab" :class="{'active': activeTab === 'login'}" @click="setActiveTab('login')">Sign In</div>
        <div class="modal-tab" :class="{'active': activeTab === 'signup'}" @click="setActiveTab('signup')">Sign Up</div>
      </div>
      <div class="modal-body">
        <!-- Login Form -->
        <form class="auth-form" :class="{'active': activeTab === 'login'}" id="loginForm">
          <div class="form-group">
            <label for="loginEmail">Email Address</label>
            <input type="email" id="loginEmail" class="form-control" placeholder="Enter your email">
          </div>
          <div class="form-group">
            <label for="loginPassword">Password</label>
            <div class="password-container">
              <input :type="loginPasswordVisible ? 'text' : 'password'" id="loginPassword" class="form-control" placeholder="Enter your password">
              <span class="toggle-password" @click="toggleLoginPasswordVisibility">
                <i :class="loginPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>
          <div class="form-footer">
            <div class="remember-me">
              <input type="checkbox" id="remember">
              <label for="remember">Remember me</label>
            </div>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>
          <button type="button" class="submit-btn">Sign In</button>
          
          <div class="divider">or continue with</div>
          
          <div class="social-login">
            <div class="social-btn google-btn">
              <i class="fab fa-google"></i>
            </div>
            <div class="social-btn facebook-btn">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="social-btn apple-btn">
              <i class="fab fa-apple"></i>
            </div>
          </div>
          
          <div class="signup-link">
            Don't have an account? <a href="#" @click.prevent="setActiveTab('signup')">Sign up</a>
          </div>
        </form>
        
        <!-- Sign Up Form -->
        <form class="auth-form" :class="{'active': activeTab === 'signup'}" id="signupForm">
          <div class="form-group">
            <label for="signupName">Full Name</label>
            <input type="text" id="signupName" class="form-control" placeholder="Enter your full name">
          </div>
          <div class="form-group">
            <label for="signupEmail">Email Address</label>
            <input type="email" id="signupEmail" class="form-control" placeholder="Enter your email">
          </div>
          <div class="form-group">
            <label for="signupPassword">Password</label>
            <div class="password-container">
              <input :type="signupPasswordVisible ? 'text' : 'password'" id="signupPassword" class="form-control" placeholder="Create a password">
              <span class="toggle-password" @click="toggleSignupPasswordVisibility">
                <i :class="signupPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>
          <div class="form-group">
            <label for="signupConfirmPassword">Confirm Password</label>
            <div class="password-container">
              <input :type="signupConfirmPasswordVisible ? 'text' : 'password'" id="signupConfirmPassword" class="form-control" placeholder="Confirm your password">
              <span class="toggle-password" @click="toggleSignupConfirmPasswordVisibility">
                <i :class="signupConfirmPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>
          <button type="button" class="submit-btn">Create Account</button>
          
          <div class="divider">or continue with</div>
          
          <div class="social-login">
            <div class="social-btn google-btn">
              <i class="fab fa-google"></i>
            </div>
            <div class="social-btn facebook-btn">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="social-btn apple-btn">
              <i class="fab fa-apple"></i>
            </div>
          </div>
          
          <div class="signup-link">
            Already have an account? <a href="#" @click.prevent="setActiveTab('login')">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthModal',
  props: {
    active: Boolean
  },
  data() {
    return {
      activeTab: 'login',
      loginPasswordVisible: false,
      signupPasswordVisible: false,
      signupConfirmPasswordVisible: false
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    toggleLoginPasswordVisibility() {
      this.loginPasswordVisible = !this.loginPasswordVisible;
    },
    toggleSignupPasswordVisibility() {
      this.signupPasswordVisible = !this.signupPasswordVisible;
    },
    toggleSignupConfirmPasswordVisibility() {
      this.signupConfirmPasswordVisible = !this.signupConfirmPasswordVisible;
    }
  }
};
</script>

<style scoped>
.auth-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;
}

.auth-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.auth-modal {
  background-color: white;
  border-radius: 20px;
  width: 90%;
  max-width: 450px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s ease;
  position: relative;
}

.auth-modal-overlay.active .auth-modal {
  transform: translateY(0);
  opacity: 1;
}

.modal-header {
  display: flex;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

.modal-tab {
  flex: 1;
  text-align: center;
  padding: 18px 0;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease;
}

.modal-tab.active {
  color: var(--primary);
}

.modal-tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--primary);
  transition: width 0.5s ease;
}

.modal-body {
  padding: 25px;
}

.auth-form {
  display: none;
}

.auth-form.active {
  display: block;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: var(--dark);
  font-size: 0.95rem;
}

.form-control {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  transition: all 0.5s ease;
}

.form-control:focus {
  border-color: var(--primary-light);
  outline: none;
  box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
}

.password-container {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--gray);
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.toggle-password:hover {
  transform: translateY(-50%) scale(1.1);
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.remember-me input {
  margin-right: 6px;
}

.forgot-password {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.5s ease;
  font-size: 0.9rem;
}

.forgot-password:hover {
  color: var(--dark);
  transform: translateX(3px);
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 15px;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
}

.submit-btn:hover {
  background-color: var(--dark);
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 7px 20px rgba(46, 125, 50, 0.4);
}

.divider {
  text-align: center;
  margin: 20px 0;
  position: relative;
  color: var(--gray);
  font-size: 0.9rem;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background-color: #eee;
  transition: width 0.5s ease;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.social-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border: 1px solid #eee;
  cursor: pointer;
  transition: all 0.5s ease;
}

.social-btn:hover {
  background: #e8f5e9;
  transform: translateY(-3px) scale(1.1);
}

.social-btn i {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.social-btn:hover i {
  transform: scale(1.2);
}

.google-btn { color: #DB4437; }
.facebook-btn { color: #4267B2; }
.apple-btn { color: #000; }

.signup-link {
  text-align: center;
  margin-top: 15px;
  color: var(--gray);
  font-size: 0.95rem;
}

.signup-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  transition: all 0.5s ease;
}

.signup-link a:hover {
  color: var(--dark);
  transform: translateX(3px);
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: var(--gray);
  transition: all 0.5s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 20;
}

.close-modal:hover {
  color: var(--primary);
  transform: rotate(90deg) scale(1.1);
  background: #e8f5e9;
}
</style>