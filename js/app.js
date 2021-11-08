// sidebar menu 
$('.show-sidebar').click(function(){
    $('.sidebar').animate({marginLeft : 0});
});
$('.hide-sidebar').click(function(){
    $('.sidebar').animate({marginLeft : "-100%"});
})
// =====counter up =========
$('.counterUp').counterUp({
    delay: 10,
    time: 1000
});
// ===== card url location
function local(url){
    setTimeout(function(){
        location.href = `${url}`;
    },800);
};
// ======= chart js ======
let months= ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Set','Oct','Nov','Dec'];
let data = [20,18,4,14,4,10,14,5,3,1,21,10];
let viewer = [10,4,25,11,22,4,5,3,8,18,21,0];
const ctx = document.getElementById('viewer').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
            label: 'Order of Votes',
            data: data,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            tension : .1
        },
        {
            label: 'Viewer of Votes',
            data: viewer,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            tension : .1
        }
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                girdLines:[
                    {display: false}
                ]
            }
        },
        legend:{
            display:true,
            position: "bottom",
            labels: {
                usePointStyle: true,
                fontColor: 'red'
            }
        }
    }
});
