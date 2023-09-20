
$(document).ready(function() {
    // Ripples Effect
    $('#profile_ripples').ripples({
        resolution: 512,
        dropRadius: 10
    });

    // Progress Bar
    const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar) {
        const percentage = bar.dataset.percent;
        const tooltip = bar.querySelector('.tooltip');

        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';

        console.log(percentage);
    });

    // Counter
    const counters = document.querySelectorAll('.counter');

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;

            let target = +counter.dataset.count;

            let step = target / 100;

        
            let countIt = function() {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {

                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 1); 
                } else {
                    counter.innerText = target;
                }
            }
            countIt();
        });
    }

    runCounter(); 
});
