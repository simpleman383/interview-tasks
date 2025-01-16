import { Injectable } from '@angular/core';
import { Foo } from '../types';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FooApiService {
  public getFoo(id: number): Observable<Foo> {
    return of({ id, name: 'Foo' }).pipe(delay(3000));
  }
}
