import { Component, OnInit } from '@angular/core';
import { EmplService } from '../empl.service';
import { Empl } from '../empl';

@Component({
  selector: 'app-empls-list',
  templateUrl: './empls-list.component.html',
  styleUrls: ['./empls-list.component.css']
})
export class EmplsListComponent implements OnInit {

  title = 'Новости';
  empls: Empl[] = [];

  constructor(private emplServise: EmplService) { }

  ngOnInit(): void {
    this.getEmpls();
  }

  getEmpls(): void {
    this.emplServise.getEmpls().subscribe(empls => this.empls = empls);
  }

}
