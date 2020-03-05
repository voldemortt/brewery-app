import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule,MatInputModule,
MatCardModule,MatTableModule,MatDialogModule,MatIconModule,
MatToolbarModule,MatSidenavModule,MatListModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'; 

import { BreweryDetailComponent } from './brewery-detail.component';

describe('BreweryDetailComponent', () => {
  let component: BreweryDetailComponent;
  let fixture: ComponentFixture<BreweryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryDetailComponent ],
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
    fixture = TestBed.createComponent(BreweryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
