import { TestBed, inject } from '@angular/core/testing';

import { YoutubeapiService } from './youtubeapi.service';

describe('YoutubeapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeapiService]
    });
  });

  it('should be created', inject([YoutubeapiService], (service: YoutubeapiService) => {
    expect(service).toBeTruthy();
  }));
});
