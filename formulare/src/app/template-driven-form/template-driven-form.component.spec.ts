
import {FormsModule} from '@angular/forms';
import {TestBed, fakeAsync, tick, async, discardPeriodicTasks} from '@angular/core/testing';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {TaskService} from '../services/task-service/task.service';
import {UserService} from '../services/user.service';
import {ShowErrorComponent} from '../show-error/show-error.component';
import {dispatchEvent, setInputValue} from '../testing/test-helper';
import {APPLICATION_VALIDATORS} from '../models/app-validators';
import {Observable} from 'rxjs';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [FormsModule],
    providers: [TaskService, UserService],
    declarations: [TemplateDrivenFormComponent,
      ShowErrorComponent,
      APPLICATION_VALIDATORS]
  });
});

describe('Template driven form', () => {

  it('should validate the title correctly', ((done) => {

    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {

      const form = fixture.componentInstance.ngForm.form;

      const titleControl = form.get('title');
      expect(titleControl.errors['required']).toBeTruthy();

      titleControl.setValue('Task');
      expect(titleControl.errors['required']).toBeUndefined();
      const minError = {requiredLength: 5, actualLength: 4};
      expect(titleControl.errors['minlength']).toEqual(minError);

      titleControl.setValue('Task 1');
      expect(titleControl.errors).toBeNull();
      done();
    }) ;
  }));

  it('should validate the email field', ((done) => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {
      const element = fixture.nativeElement;
      const emailInput = element.querySelector('#assignee_email');
      setInputValue(emailInput, 'foo');
      expect(element.querySelector('.alert-danger').textContent)
        .toContain('Bitte geben Sie eine gültige E-Mail-Adresse an');
      done();
    });
  }));

  it('should show no error for valid email adresses', ((done) => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {
      const element = fixture.nativeElement;
      const emailInput = element.querySelector('#assignee_email');
      setInputValue(emailInput, 'foo@bar.de');
      expect(element.querySelector('.alert-danger')).toBeNull();
      done();
    });
  }));

  xit('should show no error for valid email adresses', async(() => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {
      const element = fixture.nativeElement;
      const emailInput = element.querySelector('#assignee_email');
      setInputValue(emailInput, 'foo@bar.de');
      expect(element.querySelector('.alert-danger')).toBeNull();
    });
  }));


});
