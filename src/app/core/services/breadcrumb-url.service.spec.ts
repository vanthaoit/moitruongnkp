import { TestBed } from '@angular/core/testing';

import { BreadcrumbUrlService } from './breadcrumb-url.service';

describe('BreadcrumbUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadcrumbUrlService = TestBed.get(BreadcrumbUrlService);
    expect(service).toBeTruthy();
  });
});
