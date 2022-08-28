import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingBoardComponent } from './bowling-board.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { PagesService } from '../pages.service';

describe('BowlingBoardComponent', () => {
  let component: BowlingBoardComponent;
  let fixture: ComponentFixture<BowlingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ BowlingBoardComponent ],
      providers: [NgForm]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form', () => {
    const debugElement = fixture.debugElement;
    const form: NgForm = debugElement.children[0].injector.get(NgForm);
    const spy = spyOn(form, 'resetForm').and.callThrough();
    component.resetBoard();
    expect(spy).toBeDefined();
    expect(spy).toHaveBeenCalledTimes(0);

  });

  it('should call getCumulativeScore', () => {
    component.getCumulativeScore(1, 1);
  });


  it('should call onHitChange function', () => {
    let frameNumber=0;
    let action="bowling";
    let value:'12'
    spyOn(component, 'onHitChange').and.callThrough();
    component.onHitChange(frameNumber,action,value);
  });

});
