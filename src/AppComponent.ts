import { Component } from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <h1>{{title}}</h1>
        <calendar></calendar>
    `
})
export default class AppComponent{
    title = "Tech Office Angular Calendar";
}



