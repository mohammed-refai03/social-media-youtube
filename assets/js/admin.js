/* ==========================================================================
   Stackly - Admin Dashboard Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Authentication Check ---
    const session = JSON.parse(localStorage.getItem('stackly_session'));
    if (!session || session.role !== 'admin') {
        // If not logged in as admin, redirect to login
        window.location.href = 'login.html';
        return;
    }

    // Set User Email in Navbar and Sidebar
    const emailDisplays = document.querySelectorAll('.user-email-display');
    emailDisplays.forEach(el => el.textContent = session.email);

    // --- Sidebar Toggle for Mobile ---
    const mobileToggle = document.getElementById('mobileToggle');
    const sidebar = document.getElementById('dashboardSidebar');
    const body = document.body;

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            body.classList.toggle('body-no-scroll');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 991 && 
                !sidebar.contains(e.target) && 
                !mobileToggle.contains(e.target) && 
                sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                body.classList.remove('body-no-scroll');
            }
        });
    }

    // --- Sidebar Tab Switching ---
    const menuItems = document.querySelectorAll('.sidebar-menu .menu-item');
    const contentSections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;
            
            if(item.getAttribute('id') !== 'logoutBtn') {
                e.preventDefault();
            }

            // Remove active from all menu items
            menuItems.forEach(m => m.classList.remove('active'));
            // Add active to clicked item
            item.classList.add('active');

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.add('d-none');
            });

            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('d-none');
                window.scrollTo(0, 0); // Reset scroll to top
            }
            
            // Update Topbar Title
            const topbarTitle = document.getElementById('topbarTitle');
            if (topbarTitle && item.getAttribute('id') !== 'logoutBtn') {
                topbarTitle.textContent = item.textContent.trim();
            }
            
            // On mobile, close sidebar after clicking a link
            if (window.innerWidth <= 991 && sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                body.classList.remove('body-no-scroll');
            }
        });
    });

    // --- Chart.js Global Defaults ---
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#64748b'; // var(--text-muted)

    // 1. Platform Growth (Line Chart)
    const ctxGrowth = document.getElementById('growthChart');
    if (ctxGrowth) {
        new Chart(ctxGrowth, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'New Users',
                        data: [1200, 1900, 3000, 5000, 4800, 6000, 8500],
                        borderColor: '#2563EB', // Primary
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Active Creators',
                        data: [300, 400, 550, 800, 1200, 1500, 2100],
                        borderColor: '#10B981', // Success
                        backgroundColor: 'transparent',
                        borderWidth: 2,
                        tension: 0.4,
                        borderDash: [5, 5]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [2, 2] } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 2. Category Performance (Bar Chart)
    const ctxCategory = document.getElementById('categoryChart');
    if (ctxCategory) {
        new Chart(ctxCategory, {
            type: 'bar',
            data: {
                labels: ['Gaming', 'Tech', 'Music', 'Vlogs', 'Education', 'Sports'],
                datasets: [{
                    label: 'Millions of Views',
                    data: [120, 95, 80, 65, 45, 30],
                    backgroundColor: [
                        '#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'
                    ],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [2, 2] } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 3. User Engagement (Doughnut Chart)
    const ctxEngagement = document.getElementById('engagementChart');
    if (ctxEngagement) {
        new Chart(ctxEngagement, {
            type: 'doughnut',
            data: {
                labels: ['Active Daily', 'Active Weekly', 'Inactive'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ['#10B981', '#3B82F6', '#E2E8F0'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // Logout logic
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('stackly_session');
            window.location.href = 'login.html';
        });
    }
});
