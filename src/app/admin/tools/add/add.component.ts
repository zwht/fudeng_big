import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { CodeService } from '../../../share/restServices/CodeService';
import { NzMessageService } from 'ng-zorro-antd';
import { RegExpService } from '../../../share/services/reg-exp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  loading = false;

  constructor(
    private _message: NzMessageService,
    private regExpService: RegExpService,
    private fb: FormBuilder,
    private CodeService: CodeService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      description: [null, []],
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      groups: [null, [Validators.required]],
    });
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.CodeService['add']({
        data: {
          groups: this.regExpService.replace('前后空格',this.validateForm.value.groups, ''),
          code: this.regExpService.replace('前后空格',this.validateForm.value.code, ''),
          name: this.regExpService.replace('前后空格',this.validateForm.value.name, ''),
          description: this.regExpService.replace('前后空格',this.validateForm.value.description, ''),
          roles:'[1,2]'
        }
      })
        .then(response => {
          this.loading = false;
          if (response.code === 200) {
            this.router.navigate(['/admin/tools'])
          } else {
            this._message.create('error', response.msg, { nzDuration: 4000 });
          }
        });
    }

  }
  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

}
