import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Question } from '../quiz.model';

@Component({
  selector: 'qz-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  quizForm: FormGroup;
  options: FormGroup = this.fb.group({
    a: [''],
    b: [''],
    c: [''],
    d: [''],
  });
  question: FormGroup = this.fb.group({
    text: [''],
    options: this.options,
  });
  questions: FormArray = this.fb.array([
    this.question
  ]);

  currentQuestionIndex = 0;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      title: [''],
      questions: this.questions,
    });
  }

  ngOnInit() {
  }

  onSubmitForm() {

  }

  prevQuestion() {
    this.currentQuestionIndex--;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  addQuestion() {
    const questionList = this.quizForm.controls.questions as FormArray;
    questionList.push(this.question);
    this.currentQuestionIndex = questionList.length - 1;
  }



}
