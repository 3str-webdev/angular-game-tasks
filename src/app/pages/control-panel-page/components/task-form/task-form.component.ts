import { EditableFields } from '@shared/types/tasksTypes';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less'],
})
export class TaskFormComponent {
  @Input() initialValues!: EditableFields;
  @Input() label: string = '';
  public taskFormGroup!: FormGroup;

  constructor() {
    this.createForm();
  }

  private createForm() {
    this.taskFormGroup = new FormGroup({
      title: new FormControl(this.initialValues['title']),
      theme: new FormControl(this.initialValues['theme']),
      level: new FormControl(this.initialValues['level']),
      text: new FormControl(this.initialValues['text']),
      answer: new FormControl(this.initialValues['answer']),
    });
  }
}
