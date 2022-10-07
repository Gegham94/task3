import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection-page',
  templateUrl: './selection-page.component.html',
  styleUrls: ['./selection-page.component.scss']
})
export class SelectionPageComponent implements OnInit {

  public loading: false;
  isSubmitted = false;
  Class: any = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'];
  Section: any = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5', 'Section 6', 'Section 7', 'Section 8'];

  constructor(
    public fb: FormBuilder,
    public router: Router,
    ) {}

  registrationForm = this.fb.group({
    className: ['', [Validators.required]],
    sectionName: ['', [Validators.required]],
  });

  changeClass(e: any) {
    this.className?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeSection(e: any) {
    this.sectionName?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get className() {
    return this.registrationForm.get('className');
  }
  get sectionName() {
    return this.registrationForm.get('sectionName');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(this.registrationForm.value);
      this.router.navigate(['status-page']);
    }
  }

  ngOnInit(): void {

  }

}
