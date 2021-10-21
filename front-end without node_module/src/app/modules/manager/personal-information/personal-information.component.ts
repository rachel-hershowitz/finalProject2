import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsMashkanta } from 'src/app/models/DetailsMashkanta';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  // styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  personalInformation: DetailsMashkanta[];

  constructor(private router: Router, private managerService: ManagerService) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.managerService.getAllPersonalInformation().subscribe(p => {
      this.personalInformation = p;
    })
  }
}
