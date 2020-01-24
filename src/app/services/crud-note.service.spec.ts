import { TestBed } from '@angular/core/testing';

import { CrudNoteService } from './crud-note.service';

describe('CrudNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudNoteService = TestBed.get(CrudNoteService);
    expect(service).toBeTruthy();
  });
});
