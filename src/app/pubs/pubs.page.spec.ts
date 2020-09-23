import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PubsPage } from './pubs.page';

describe('PubsPage', () => {
  let component: PubsPage;
  let fixture: ComponentFixture<PubsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
