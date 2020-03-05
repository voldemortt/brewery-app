import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule,MatInputModule,
MatCardModule,MatTableModule,MatDialogModule,MatIconModule,
MatToolbarModule,MatSidenavModule,MatListModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'; 

import { BreweriesComponent } from './breweries.component';

describe('BreweriesComponent', () => {
  let component: BreweriesComponent;
  let fixture: ComponentFixture<BreweriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweriesComponent ],
      imports : [
        HttpClientModule,
        HttpModule,
        MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
