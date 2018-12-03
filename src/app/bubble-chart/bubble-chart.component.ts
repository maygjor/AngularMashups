import { Component, OnInit } from '@angular/core';
import { single ,multi} from '../data';
@Component({
  selector: 'bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent {
single: any[];
multi: any[];

view: any[] = [700, 400];

// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Country';
showYAxisLabel = true;
yAxisLabel = 'Population';

colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};

constructor() {
  Object.assign(this, { multi })
}

onSelect(event) {
  console.log(event);
}
}