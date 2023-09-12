import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  taskArray = [{ taskName: 'Brush teeth', iscompleted: false }];
  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      iscompleted: false,
    });
    form.reset();
  }
  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }
  oncheck(index: number){
    console.log(this.taskArray);

    this.taskArray[index].iscompleted = !this.taskArray[index].iscompleted;
  }
}

