import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-generator',
    templateUrl: './form-generator.component.html',
    styleUrls: ['./form-generator.component.css']
})

export class FormGeneratorComponent implements OnInit {
    private text: String;

    constructor() { }

    ngOnInit() {
        this.text = 'Form Generator';
    }
}
