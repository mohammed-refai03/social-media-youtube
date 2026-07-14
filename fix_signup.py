import os

filepath = r"d:\office-tasks\social-media\signup.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove flex-row-reverse
content = content.replace('auth-wrapper flex-row-reverse', 'auth-wrapper')

# 2. Fix Username field
old_username = '''<!-- Username Field -->
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="username" placeholder="johndoe" required minlength="3">
                        <label for="username">Username</label>
                        <div class="invalid-feedback">
                            Username must be at least 3 characters.
                        </div>
                    </div>'''
new_username = '''<!-- Username Field -->
                    <div class="mb-4">
                        <label for="username" class="form-label fw-semibold small text-dark mb-2">Username</label>
                        <div class="input-group border rounded-3 overflow-hidden custom-input-group bg-white">
                            <span class="input-group-text bg-transparent border-0 text-muted ps-3 pe-2"><i class="fa-solid fa-user"></i></span>
                            <input type="text" class="form-control border-0 shadow-none bg-transparent py-2 px-1" id="username" placeholder="johndoe" required minlength="3">
                        </div>
                        <div class="invalid-feedback">
                            Username must be at least 3 characters.
                        </div>
                    </div>'''
content = content.replace(old_username, new_username)

# 3. Fix Email field
old_email = '''<!-- Email Field -->
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                        <label for="email">Email address</label>
                        <div class="invalid-feedback">
                            Please enter a valid email address.
                        </div>
                    </div>'''
new_email = '''<!-- Email Field -->
                    <div class="mb-4">
                        <label for="email" class="form-label fw-semibold small text-dark mb-2">Email Address</label>
                        <div class="input-group border rounded-3 overflow-hidden custom-input-group bg-white">
                            <span class="input-group-text bg-transparent border-0 text-muted ps-3 pe-2"><i class="fa-solid fa-envelope"></i></span>
                            <input type="email" class="form-control border-0 shadow-none bg-transparent py-2 px-1" id="email" placeholder="name@example.com" required>
                        </div>
                        <div class="invalid-feedback">
                            Please enter a valid email address.
                        </div>
                    </div>'''
content = content.replace(old_email, new_email)

# 4. Fix Password fields
old_password = '''<!-- Password Fields -->
                    <div class="row g-2 mb-3">
                        <div class="col-sm-6">
                            <div class="form-floating position-relative">
                                <input type="password" class="form-control" id="password" placeholder="Password" required minlength="6">
                                <label for="password">Password</label>
                                <i class="fa-solid fa-eye password-toggle" data-target="password"></i>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-floating position-relative">
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm" required minlength="6">
                                <label for="confirmPassword">Confirm Password</label>
                            </div>
                        </div>
                    </div>'''
new_password = '''<!-- Password Fields -->
                    <div class="row g-2 mb-3">
                        <div class="col-sm-6">
                            <div class="mb-2">
                                <label for="password" class="form-label fw-semibold small text-dark mb-2">Password</label>
                                <div class="input-group border rounded-3 overflow-hidden custom-input-group bg-white position-relative">
                                    <span class="input-group-text bg-transparent border-0 text-muted ps-3 pe-2"><i class="fa-solid fa-lock"></i></span>
                                    <input type="password" class="form-control border-0 shadow-none bg-transparent py-2 px-1 pe-5" id="password" placeholder="••••••••" required minlength="6">
                                    <i class="fa-solid fa-eye password-toggle position-absolute" data-target="password" title="Toggle Password Visibility" style="right: 15px; top: 50%; transform: translateY(-50%); z-index: 10; cursor: pointer;"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mb-2">
                                <label for="confirmPassword" class="form-label fw-semibold small text-dark mb-2">Confirm Password</label>
                                <div class="input-group border rounded-3 overflow-hidden custom-input-group bg-white position-relative">
                                    <span class="input-group-text bg-transparent border-0 text-muted ps-3 pe-2"><i class="fa-solid fa-lock"></i></span>
                                    <input type="password" class="form-control border-0 shadow-none bg-transparent py-2 px-1 pe-5" id="confirmPassword" placeholder="••••••••" required minlength="6">
                                </div>
                            </div>
                        </div>
                    </div>'''
content = content.replace(old_password, new_password)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated signup.html")
