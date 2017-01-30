$(function() {
  var chart = Highcharts.chart('drugs', {

    title: {
      text: 'Drugs'
    },

    subtitle: {
      text: 'Includes the word "drugs" as well as any specific drugs or paraphenalia.'
    },

    xAxis: {
      categories: ['10 Day', 'Acid Rap', 'Coloring Book']
    },

    series: [{
      type: 'column',
      colorByPoint: true,
      data: [29.9, 71.5, 106.4],
      showInLegend: false
    }]

  });


  $('#plain').click(function() {
    chart.update({
      chart: {
        inverted: false,
        polar: false
      },
      subtitle: {
        text: 'Plain'
      }
    });
  });

  $('#inverted').click(function() {
    chart.update({
      chart: {
        inverted: true,
        polar: false
      },
      subtitle: {
        text: 'Inverted'
      }
    });
  });

  $('#polar').click(function() {
    chart.update({
      chart: {
        inverted: false,
        polar: true
      },
      subtitle: {
        text: 'Polar'
      }
    });
  });

});

