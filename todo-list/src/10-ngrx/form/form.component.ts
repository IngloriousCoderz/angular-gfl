import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() formSubmit = new EventEmitter<string>();

  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    this.formSubmit.emit(this.form.value.text ?? '');
    this.form.patchValue({ text: '' });
  }
}
