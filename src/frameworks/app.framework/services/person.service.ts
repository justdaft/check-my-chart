import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PeopleService {
    headers: Headers;
    // api: string = `http://pigofthemonthapi.azurewebsites.net/api`;
    api: string = `http://localhost:1428`;

    peeps: Array<any> = ['Amy', 'Oscar', 'Dexter'];

    constructor(public _http: Http) {
        this.makeHeaders();
    }

    makeHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.headers = headers;
    }

    // example 
    // getFoods() {
    //     this.http.get('/app/food.json')
    //         .map((res: Response) => res.json())
    //         .subscribe(
    //         data => { this.foods = data },
    //         err => console.error(err),
    //         () => console.log('done')
    //         );
    // }

    get(date: Date): any {
        // return this._http.get(`${this.api}/people/${date.toISOString()}`)
        //     .map((response: Response) => response.json());

        return Observable.of(this.peeps);
    }

    create(person: any, year: any) {
        // return this._http.post(`${this.api}/people/${year}`, JSON.stringify(person),
        //     { headers: this.headers })
        //     .map((response: Response) => response.json());
        this.peeps.push(person);
        console.log(this.peeps);
        return Observable.of(this.peeps);
    }

    put(people: any) {
        // return this._http.put(`${this.api}/people`, JSON.stringify(people),
        //     { headers: this.headers })
        //     .map((response: Response) => response.json());
                return this.peeps;
    }

    delete(person: any) {
        // return this._http.delete(`${this.api}/people/${person.Id}`,
        //     { headers: this.headers })
        //     .map((response: Response) => response.json());
        console.log('delete', person);
    }

}
