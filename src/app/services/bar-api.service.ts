import { Injectable } from '@angular/core';
import { Bar, Foo } from '../types';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BarApiService {
  public getBar(id: number): Observable<Bar> {
    return of({ id, email: 'bar@bar.com' }).pipe(delay(3000));
  }
}
