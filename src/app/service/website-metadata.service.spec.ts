import { TestBed } from '@angular/core/testing';

import { WebsiteMetadataService } from './website-metadata.service';

describe('WebsiteMetadataService', () => {
  let service: WebsiteMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
