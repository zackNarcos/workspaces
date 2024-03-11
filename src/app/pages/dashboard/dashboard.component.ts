import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from "chart.js";
import Scrollbar from "smooth-scrollbar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild('chartBarsCanvas') chartBarsCanvas!: ElementRef<HTMLCanvasElement>;


  constructor() {
  }

  ngOnInit() {
    const win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      const options = {
        damping: '0.5'
      }
      // @ts-ignore
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  }

  ngAfterViewInit() {
    /*const ctx = this.chartBarsCanvas.nativeElement.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
    });


    // @ts-ignore
    const ctx2 = document.getElementById("chart-line").getContext("2d");

    const gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    const gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

    // @ts-ignore
    new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Mobile apps",
          tension: 0.4,
          pointRadius: 0,
          borderColor: "#cb0c9f",
          borderWidth: 3,
          backgroundColor: gradientStroke1,
          fill: true,
          data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          // maxBarThickness: 6

        },
          {
            label: "Websites",
            tension: 0.4,
            pointRadius: 0,
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            // maxBarThickness: 6
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              // drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              // borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              // drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              // borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });*/
  }
}
