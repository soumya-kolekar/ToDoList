import { Component,OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import id from '@angular/common/locales/id';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit  {

  constructor(){}
  todos!: Todo[];
  inputTodo:string='';
  ngOnInit():void{
  this.todos=[]
  
  }
  
    toggleDone(id:number) {
      this.todos.map((v,i)=>{
        if(i == id) v.completed = !v.completed;
        return v;
      })
    }
    deleteTodo(id:number){
      this.todos=this.todos.filter((v,i)=>i !== id);
    }
    addTodo () {
      this.todos.push({
        content:this.inputTodo,
        completed:false
      });
  
      this.inputTodo ='';
    }
}
