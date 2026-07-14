/* ==========================================================================
   Stackly - Authentication Logic (Login & Signup)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Password Visibility Toggle ---
    const togglePasswordButtons = document.querySelectorAll('.password-toggle');
    
    togglePasswordButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const inputId = this.getAttribute('data-target');
            const input = document.getElementById(inputId);
            
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // --- Login Form Handler ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check HTML5 validation
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }
            
            // Get selected role
            const role = document.querySelector('input[name="role"]:checked').value;
            const email = document.getElementById('email').value;
            
            // Mock authentication success
            console.log(`Logging in as ${role} with ${email}`);
            
            // Save to localStorage
            localStorage.setItem('stackly_session', JSON.stringify({
                isLoggedIn: true,
                role: role,
                email: email
            }));
            
            // Add a small loading effect
            const btn = document.getElementById('loginBtn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Authenticating...';
            btn.disabled = true;
            
            // Redirect based on role
            setTimeout(() => {
                if (role === 'admin') {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    window.location.href = 'user-dashboard.html';
                }
            }, 800);
        });
    }

    // --- Signup Form Handler ---
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Check HTML5 validation
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                
                // Extra check for matching passwords (native constraint API)
                if(password !== confirmPassword) {
                     document.getElementById('confirmPassword').setCustomValidity("Passwords do not match.");
                     document.getElementById('confirmPassword').reportValidity();
                } else {
                     document.getElementById('confirmPassword').setCustomValidity("");
                }
                return;
            }
            
            if(password !== confirmPassword) {
                document.getElementById('confirmPassword').setCustomValidity("Passwords do not match.");
                document.getElementById('confirmPassword').reportValidity();
                return;
            } else {
                document.getElementById('confirmPassword').setCustomValidity("");
            }
            
            const role = document.querySelector('input[name="role"]:checked').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            
            // Save registered user info
            localStorage.setItem('stackly_registered_user', JSON.stringify({
                role: role,
                email: email,
                username: username
            }));
            
            const btn = document.getElementById('signupBtn');
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Creating Account...';
            btn.disabled = true;
            
            // Redirect to login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        });
        
        // Clear custom validity on input
        const confirmInput = document.getElementById('confirmPassword');
        if(confirmInput) {
            confirmInput.addEventListener('input', function() {
                this.setCustomValidity("");
            });
        }
    }
});
