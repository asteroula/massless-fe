(function () {
    angular
        .module('app')
        .controller('SummaryController', [
            '$scope','$http',
            SummaryController
        ]);

    function SummaryController($scope, $http) {
        var _this = this;
        $http.get('https://rest.coinapi.io/v1/exchangerate/BTC?apikey=935CA65B-5024-4E92-94F3-EC2C4F0BA18D').
        then(function(response) {
            var data = response.data.rates[0].rate;
            var vm = _this;
            // TODO: move data to the service
            vm.memoryChartData = [ {key: 'buy', y: 0.15}, { key: 'sell', y: 0.85} ];

            vm.chartOptions = {
                chart: {
                    type: 'pieChart',
                    height: 210,
                    donut: true,
                    pie: {
                        startAngle: function (d) { return d.startAngle/2 -Math.PI/2 },
                        endAngle: function (d) { return d.endAngle/2 -Math.PI/2 }
                    },
                    x: function (d) { return d.key; },
                    y: function (d) { return d.y; },
                    valueFormat: (d3.format(".0%")),
                    color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
                    showLabels: false,
                    showLegend: false,
                    tooltips: false,
                    title: data,
                    titleOffset: 30,
                    margin: { bottom: -80, left: -20, right: -20 }
                }
            };
        });
        
    }
})();
