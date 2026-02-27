import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrl: './addform.component.css',
})
export class AddformComponent implements OnInit {
  suggform!: FormGroup;
  category: string[] = ['sport', 'sante', 'eductaion'];
  ngOnInit(): void {
    this.suggform = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-zA-Z]*$'),
        Validators.maxLength(10),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      category: new FormControl('', Validators.required),
      date: new FormControl(new Date(), Validators.required),
      status: new FormControl('', [
        Validators.required,
        Validators.pattern('^en-attente*$'),
      ]),
      nbLikes: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }

  add() {
    console.log(this.suggform.value);
  }
}
