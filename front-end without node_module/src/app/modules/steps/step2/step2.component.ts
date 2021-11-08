import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'step2',
  templateUrl: './step2.component.html',
  // styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(private _router: Router) { }

  statusBank: number = 0

  ngOnInit(): void {
  }

  goToStep3() {
    this._router.navigate(['/StepsComponent/step3']);
  }
}
