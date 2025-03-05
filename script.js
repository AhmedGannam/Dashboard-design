
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('deviceChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active Devices', 'Inactive Devices'],
            datasets: [{
                data: [120, 22],
                backgroundColor: ['#6C63FF', '#4A4A4A'],
                borderWidth: 0,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white',
                        font: { 
                            size: 12,
                            family: "'Segoe UI', sans-serif"
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw} devices`;
                        }
                    }
                }
            }
        }
    });


    const setupInvoiceToggle = () => {
        document.querySelectorAll('.process-step').forEach(step => {
            step.addEventListener('click', function(e) {
                if (!e.target.closest('.action-btn')) {
                    const details = this.querySelector('.step-details');
                    if (details) details.classList.toggle('active');
                }
            });
        });
    };

    // Ripple Effect for Buttons
    const addRippleEffect = () => {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple element
                const ripple = document.createElement('div');
                ripple.classList.add('ripple-effect');
                
                // Position calculation
                const rect = button.getBoundingClientRect();
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                
                // Add to button and remove after animation
                button.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    };

    // Initialize all features
    setupInvoiceToggle();
    addRippleEffect();
});