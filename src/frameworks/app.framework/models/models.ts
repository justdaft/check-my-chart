export class Person {
    Id: number;
    FullName: string;
    Days: Array<any>;
}

export class Weight {
    Id: number;
    Kg: number;
    Date: Date;
    PersonId: number;
}

export class Chart {
    chartData: any[];
    chartLabels: any[];
    chartSeries: any[];
    chartColors: any[];
    chartOptions: Object;
    chartType: string;
}
