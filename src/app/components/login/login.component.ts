import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public fullName: string = '';
  constructor(private fb: FormBuilder,
     private pagesService: PagesService,
     private router: Router) { }
     
  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      'fullName': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    }
    );

    this.onChanges();
  }

  public onChanges(): void {
    this.loginFormGroup.valueChanges.subscribe(() => {
       this.fullName = this.loginFormGroup.value['fullName']

    });
  }

  public start(){
    this.pagesService.setUser(this.fullName);
    this.router.navigate(['/board'])

  }
}
