import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagBadgeListComponent } from './tag-badge-list.component';

describe('TagBadgeComponent', () => {
  let component: TagBadgeListComponent;
  let fixture: ComponentFixture<TagBadgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagBadgeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagBadgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
