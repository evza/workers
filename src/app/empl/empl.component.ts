import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empl } from '../empl';
import { EmplService } from '../empl.service';

@Component({
  selector: 'app-empl',
  templateUrl: './empl.component.html',
  styleUrls: ['./empl.component.css']
})
export class EmplComponent implements OnInit {

  empl: Empl = new Empl();

  constructor(
    private route: ActivatedRoute,
    private  emplServise: EmplService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.emplServise.getEmpl(key).subscribe(empl => {
        if (empl === undefined) {
           this.router.navigateByUrl('404');
          return;
        }
        this.empl = empl;
      });
    });
  }

}
