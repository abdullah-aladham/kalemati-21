import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Mainpage } from './mainpage.page';

describe('Tab1Page', () => {
  let component: Mainpage;
  let fixture: ComponentFixture<Mainpage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Mainpage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Mainpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
