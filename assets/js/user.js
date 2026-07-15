/* ==========================================================================
   Stackly - User Dashboard Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Authentication Check ---
    const session = JSON.parse(localStorage.getItem('stackly_session'));
    if (!session || session.role !== 'user') {
        // If not logged in as user, redirect to login
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
            document.documentElement.classList.toggle('body-no-scroll');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 991 && 
                !sidebar.contains(e.target) && 
                !mobileToggle.contains(e.target) && 
                sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                body.classList.remove('body-no-scroll');
                document.documentElement.classList.remove('body-no-scroll');
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
            
            // On mobile, close sidebar after clicking
            if (window.innerWidth <= 991 && sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                body.classList.remove('body-no-scroll');
                document.documentElement.classList.remove('body-no-scroll');
            }
        });
    });

    // --- Chart.js Global Defaults ---
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#64748b';

    // 1. Channel Views (Line Chart)
    const ctxViews = document.getElementById('viewsChart');
    if (ctxViews) {
        new Chart(ctxViews, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Views',
                        data: [120, 190, 150, 220, 300, 450, 420],
                        borderColor: '#2563EB',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        borderWidth: 3,
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#2563EB',
                        pointBorderWidth: 2,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [2, 2] } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // 2. Traffic Sources (Doughnut Chart)
    const ctxSources = document.getElementById('sourcesChart');
    if (ctxSources) {
        new Chart(ctxSources, {
            type: 'doughnut',
            data: {
                labels: ['Browse Features', 'Suggested Videos', 'External', 'Direct'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: ['#2563EB', '#10B981', '#F59E0B', '#8B5CF6'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: { position: 'right' }
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
