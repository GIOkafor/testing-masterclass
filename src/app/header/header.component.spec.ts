import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ 
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
       ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login for unauthed user', () => {
    let a: HTMLElement = fixture.nativeElement.querySelector('.login');
    expect(a.textContent).toContain('Login');
  });

  it('should show logout for authed users', () => {
    component.loggedIn = true;
    fixture.detectChanges();
    let a: HTMLElement = fixture.nativeElement.querySelector('.logout');
    expect(a.textContent).toContain('Logout');
  });
  
});
