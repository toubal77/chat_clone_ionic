import { TestBed } from '@angular/core/testing';

import { HomeChatService } from './home-chat.service';

describe('HomeChatService', () => {
  let service: HomeChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
