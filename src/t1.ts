import { interval, of } from "rxjs";


const source = of(1,2,3);
// source.subscribe(item=>console.log(item))


const observable  = interval(1000);
observable.subscribe(x=>console.log(x))