$(document).ready(function() {

    
    $('#profile_ripples').ripples({
        resolution: 512,
        dropRadius: 10
    });
});


const bars = document.querySelectorAll('.progress_bar');

bars.forEach(function(bar) {
    const percentage = bar.dataset.percent;
    const tooltip = bar.querySelector('.tooltip'); // Use querySelector for the tooltip

    tooltip.innerText = percentage + '%';
    bar.style.width = percentage + '%';

    console.log(percentage);
});
