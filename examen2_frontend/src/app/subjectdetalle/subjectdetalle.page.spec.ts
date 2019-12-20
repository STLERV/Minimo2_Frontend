import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectdetallePage } from './subjectdetalle.page';

describe('SubjectdetallePage', () => {
  let component: SubjectdetallePage;
  let fixture: ComponentFixture<SubjectdetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectdetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
