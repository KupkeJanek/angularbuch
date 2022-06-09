import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';
import { SuperSecretCalculationService } from '../super-secret-calculation.service';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, SharedModule],
  providers: [SuperSecretCalculationService]
})
export class TasksComponent {
  constructor() {
  }
}
