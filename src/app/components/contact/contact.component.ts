import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ric-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public contactFGroup: FormGroup;
  private isFormSubmitted = false;

  constructor() {
    this.contactFGroup = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'query': new FormControl('', [Validators.required])
    });
  }

  public SendNotification(): void {
    this.isFormSubmitted = true;
    console.log(this.contactFGroup.valid, this.errorMessage);
  }

  public get errorMessage(): string | undefined {

    if (!this.isFormSubmitted) {
      return undefined;
    }

    const emailErrors = this.contactFGroup.controls['email'].errors;
    const queryErrors = this.contactFGroup.controls['query'].errors;

    if (emailErrors) {
      const emailKeys: string[] = Object.keys(emailErrors);
      return emailKeys.includes('email') ?
        'Not a valid email address' :
        emailKeys.includes('required') ? 'Email is required' : undefined;
    }
    if (queryErrors) {
      const queryKeys: string[] = Object.keys(queryErrors);
      return queryKeys.includes('required') ? 'Please enter your query or a message' : undefined
    }

    return undefined;
  }
}
