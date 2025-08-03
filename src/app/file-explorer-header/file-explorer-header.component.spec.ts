import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExplorerHeaderComponent } from './file-explorer-header.component';

describe('FileExplorerHeaderComponent', () => {
  let component: FileExplorerHeaderComponent;
  let fixture: ComponentFixture<FileExplorerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileExplorerHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileExplorerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
