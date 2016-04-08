import {BaseComponent} from '../../frameworks/core.framework/index';
import {OnInit} from 'angular2/core';
// import { PeopleService } from './../../frameworks/app.framework/services/person.service';
import { Chart, Person} from './../../frameworks/app.framework/models/models';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import {NgFor, NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/common';


@BaseComponent({
    selector: 'sd-person',
    templateUrl: './components/person/person.component.html',
    styleUrls: ['./components/person/person.component.css'],
    directives: [CHART_DIRECTIVES, NgSwitch, NgSwitchWhen, NgSwitchDefault]
})
export class PersonComponent implements OnInit {
    months: string[] = moment.monthsShort();
    date: Date = new Date();
    people: Array<Person> = [];
    person: Person;
    month: any;
    selectedYear: any = this.date.getFullYear();
    selectedMonth: any;
    dataFormatted: boolean;
    days: string[] = moment.weekdaysShort();
    colors = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'rose'];
    lineChart = new Chart();

    constructor() {
        //
    }

    ngOnInit() {
        this.get(this.date);
        this.selectedMonth = this.date.getMonth();
        this.month = moment.months(this.selectedMonth);
        this.people = [
            {
                FullName: 'amy',
                Id: 101,
                Days: [1, 1, 1, 1, 0, 0, null]
            },
            {
                FullName: 'oscar',
                Id: 102,
                Days: [1, 0, 1, 1, 0, 1, null]
            },
            {
                FullName: 'dexter',
                Id: 103,
                Days: [0, 1, 0, 1, 0, 0, null]
            }
        ];
  this.dataFormatted = true;
  this.formatChartData();
    }


    changeValue(people: any) {
        this.people = [...people];
        this.formatChartData();
    }

    changeYear(amount: any) {
        this.date.setFullYear(this.date.getFullYear() + amount);
        this.selectedYear = this.date.getFullYear();
        this.get(this.date);
    }

    changeMonth(amount: any) {
        this.date.setMonth(this.date.getMonth() + amount);
        // this.date.setFullYear(this.date.getFullYear() + amount);
        this.selectedMonth = this.date.getMonth();
        this.get(this.date);
        this.month = moment.months(this.selectedMonth);
        console.log(moment.months(this.selectedMonth));
    }

    get(date: Date): any {
        // this.peopleService.get(date)
        //     .subscribe((pple: any) => {
        //         this.people = pple;
        //         this.formatChartData();
        //     });
        return this.people;
    }

    formatChartData() {
        let _lineChartData: any = [];
        let _lineChartSeries: any = [];

        this.formatColors();

        this.people.forEach((person) => {
            _lineChartSeries.push(person.FullName);
            _lineChartData.push(person.Days.map((w: any) => {
                return w;
            }));
        });

        this.lineChart.chartType = 'Line';
        this.lineChart.chartData = _lineChartData;
        this.lineChart.chartSeries = _lineChartSeries;
        this.lineChart.chartLabels = this.days;
        this.lineChart.chartOptions = {
            animation: true,
            multiTooltipTemplate: `<%if (datasetLabel){%><%=datasetLabel %>: <%}%><%= value %>`,
            responsive: true
        };

        this.dataFormatted = true;
    }

    formatColors() {
        this.lineChart.chartColors = this.colors.map((color) => {
            return {
                fillColor: 'rgba(220,220,220, 0.1)',
                strokeColor: color,
                pointColor: color,
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: color
            };
        });
    }

    create() {
        // let person = {
        //     FullName: 'eddie',
        //     Id: 101,
        //     Weights: [100, 200]
        // };
        // this.people.push(person);
        // this.peopleService.create(person, this.selectedYear)
        //     .subscribe((pson) => {
        //         console.log(`successfully added person`, person);
        //         // this.people = [...this.people, pson];
        //     }
        //     );
    }

    put(people: any) {
        // this.peopleService.put(people)
        //     .subscribe((pple) => {
        //         console.log(`successfully updated people`);
        //     }
        //     );
    }

    delete(person: any) {
        // this.peopleService.delete(person)
        //     .subscribe((pson) => {
        //         this.people = _.remove(this.people, (p) => {
        //             return p.Id !== pson.Id;
        //         });
        //         console.log(`successfully deleted person`);
        //     });
    }

}
