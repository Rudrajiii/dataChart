const actx = document.getElementById('myChart');
const Utils = {
    generateRandomNumbers: (count, min, max) => {
        const numbers = [];
        let i = 0
        while (i < count) {
            numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
            i++;
        }
        return numbers;
    },
    CHART_COLORS: {
        red: 'rgb(255, 99, 132)',
        blue: 'rgb(54, 162, 235)',
    },
    transparentize: (color, alpha) => {
        const rgbaColor = color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
        return rgbaColor;
    }
};
const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
const data = {
    labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Dataset 1',
            data: Utils.generateRandomNumbers(NUMBER_CFG.count, NUMBER_CFG.min, NUMBER_CFG.max),
            fill: false,
            borderColor: Utils.CHART_COLORS.red,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
            label: 'Dataset 2',
            data: Utils.generateRandomNumbers(NUMBER_CFG.count, NUMBER_CFG.min, NUMBER_CFG.max),
            fill: false,
            borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
    ]
};

new Chart(actx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart with Tick Configuration'
            }
        },
        scales: {
            x: {
                ticks: {
                    callback: function (val, index) {
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';

                    },
                    color: 'red',
                }
            }
        }
    },
});
const btns = document.querySelectorAll('button');
const body = document.querySelector('body');
const subMain = document.querySelector('.subMain');
const belowPart = document.querySelector('.belowPart');
function alignStart() {
    btns[0].addEventListener('click', function () {
        body.style.background = "white";
        body.style.color = 'black';
        subMain.style.background = 'rgb(191, 225, 255)';
        belowPart.style.background = 'rgb(191, 225, 255)';
        body.style.transition = '.7s';
    })
}
function alignCenter() {
    location.reload();
    btns[1].style.background = 'skyblue';
}
function alignEnd() {
    btns[2].addEventListener('click', function () {
        body.style.background = '#1D232A';
        body.style.color = 'white';
        subMain.style.background = '#2A323C';
        belowPart.style.background = '#2A323C';
        body.style.transition = '.7s';
    })
}