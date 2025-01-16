import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interview-app';

  // Параллельно выполнить два запроса через FooApiService и BarApiService + вывести результат в консоль
  protected handleLoadClick(id: number): void {
    return;
  }
}
