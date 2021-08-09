/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReposService } from './repos.service';

describe('Service: Repos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReposService]
    });
  });

  it('should ...', inject([ReposService], (service: ReposService) => {
    expect(service).toBeTruthy();
  }));
});
