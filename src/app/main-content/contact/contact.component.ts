import { NgClass, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [ReactiveFormsModule, NgClass, TranslateModule, NgStyle],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	fb = inject(FormBuilder);
	http = inject(HttpClient);
	mailTest = false;
	notificate = false;

	contactForm = this.fb.nonNullable.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		email: ['', [Validators.required, Validators.email]],
		message: ['', [Validators.required, Validators.minLength(3)]],
		privacy: [false, Validators.requiredTrue],
	});

	post = {
		endPoint: 'https://simon-kral.de/sendMail.php',
		body: (payload: any) => JSON.stringify(payload),
		options: {
			headers: {
				'Content-Type': 'text/plain',
				responseType: 'text',
			},
		},
	};

	onSubmit() {
		if (this.contactForm.valid && !this.mailTest) {
			this.http
				.post(
					this.post.endPoint,
					this.post.body(this.contactForm.getRawValue())
				)
				.subscribe({
					next: () => {
						this.contactForm.reset();
					},
					error: (error) => {
						console.error(error);
					},
					complete: () => this.notificateUser(),
				});
		} else if (this.contactForm.valid && this.mailTest) {
			this.contactForm.reset();
		}
	}

	notificateUser() {
		this.notificate = true;
		setTimeout(() => {
			this.notificate = false;
		}, 3000);
	}

	formInvalid(formControl: FormControl<string> | FormControl<boolean>) {
		return formControl.invalid && formControl.touched;
	}
}
