import os

filepath = r"d:\office-tasks\social-media\signup.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Change password fields from a row of two columns into two vertically stacked full-width fields
old_password_section = '''<!-- Password Fields -->
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

new_password_section = '''<!-- Password Fields -->
                    <div class="mb-4">
                        <label for="password" class="form-label fw-semibold small text-dark mb-2">Password</label>
                        <div class="input-group border rounded-3 overflow-hidden custom-input-group bg-white position-relative">
                            <span class="input-group-text bg-transparent border-0 text-muted ps-3 pe-2"><i class="fa-solid fa-lock"></i></span>
                            <input type="password" class="form-control border-0 shadow-none bg-transparent py-2 px-1 pe-5" id="password" placeholder="••••••••" required minlength="6">
                            <i class="fa-solid fa-eye password-toggle position-absolute" data-target="password" title="Toggle Password Visibility" style="right: 15px; top: 50%; transform: translateY(-50%); z-index: 10; cursor: pointer;"></i>
                        </div>
                        <div class="invalid-feedback">
                            Password is required (min 6 characters).
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="confirmPassword" class="form-label fw-semibold small text-dark mb-2">Confirm Password</label>
                        <div class="input-group border rounded-3 overflow-hidden custom-input-group bg-white position-relative">
                            <span class="input-group-text bg-transparent border-0 text-muted ps-3 pe-2"><i class="fa-solid fa-lock"></i></span>
                            <input type="password" class="form-control border-0 shadow-none bg-transparent py-2 px-1 pe-5" id="confirmPassword" placeholder="••••••••" required minlength="6">
                        </div>
                        <div class="invalid-feedback">
                            Passwords must match.
                        </div>
                    </div>'''

content = content.replace(old_password_section, new_password_section)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed password fields layout.")
