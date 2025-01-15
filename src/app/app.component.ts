import { Component } from '@angular/core';
import { FooComponent } from './components/foo/foo.component';

@Component({
  selector: 'app-root',
  imports: [FooComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interview-app';

  protected readonly model = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 42,
    address: {
      country: 'Russia',
      city: 'Moscow',
    },
    phones: ['+71111111111', '+71111111112', '+71111111113'],
  };
}
