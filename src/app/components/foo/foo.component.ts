import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  standalone: true,
})
export class FooComponent {
  @Input()
  public model: object | null = null;
}
