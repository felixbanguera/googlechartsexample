import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() title = 'demography-viewer';
  @Input() type = 'PieChart';
  @Input() data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  @Input() columnNames = ['Browser', 'Percentage'];
  @Input() options = {
  };
  @Input() width = 550;
  @Input() height = 400;

  constructor() { }

  ngOnInit() {
  }

}
