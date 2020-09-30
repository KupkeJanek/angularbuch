import { TestBed, inject } from '@angular/core/testing';

import { ButtonChooserService } from './button-chooser.service';

describe('ButtonChooserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonChooserService]
    });
  });

  it('should be created', inject([ButtonChooserService], (service: ButtonChooserService) => {
    expect(service).toBeTruthy();
  }));
});
