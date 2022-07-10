// IF WE ARE BINDING AN OBJECT,USE NG

import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  template: `
    <h3>{{ name | uppercase }}</h3>
    <h3>{{ name | lowercase }}</h3>
    <h3>{{ name | titlecase }}</h3>
    <h3>{{ name | slice: 2:5 }}</h3>
    <h3>{{ person | json }}</h3>
    <h3>{{ 5.678 | number: "1.2-3" }}</h3>
    <h3>{{ 5.678 | number: "2.3-4" }}</h3>
    <h3>{{ 5.678 | number: "2.4-5" }}</h3>
    <h3>{{ 0.25 | percent }}</h3>
    <h3>{{ 25 | currency }}</h3>
    <h3>{{ 25 | currency: "GBP" }}</h3>
    <h3>{{ 25 | currency: "INR" }}</h3>
    <h3>{{ 25 | currency: "INR":"code" }}</h3>
    <h3>{{ date }}</h3>
    <h3>{{ date | date: "short" }}</h3>
    <h3>{{ date | date: "shortDate" }}</h3>
    <h3>{{ date | date: "shortTime" }}</h3>
  `,

  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  public name = "Biswa Bhusan Gupta";
  public person = {
    firstname: "Yash",
    lastname: "Gupta"
  };
  public date = new Date();
}
