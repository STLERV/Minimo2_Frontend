import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectgeneralPage } from './subjectgeneral.page';

describe('SubjectgeneralPage', () => {
  let component: SubjectgeneralPage;
  let fixture: ComponentFixture<SubjectgeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectgeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectgeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
