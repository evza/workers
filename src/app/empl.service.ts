import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EMPLS } from './mock-empls';
import { Empl } from './empl';

@Injectable({
  providedIn: 'root'
})
export class EmplService {

  constructor() { }

  getEmpls(): Observable<Empl[]> { 
    const empls: Empl[] = EMPLS;
    return of(empls);
  }

  getEmpl(key: string): Observable<Empl> {
    const empls: Empl[] = EMPLS.filter(e => e.key === key);
    return of(empls[0]);
  }
}
