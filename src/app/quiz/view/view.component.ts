import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Quiz } from '../quiz.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'qz-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  private quizDocList: AngularFirestoreCollection<Quiz>;
  quizList: Quiz[] = [];

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.db.collection('Quiz')
    .snapshotChanges()
    .subscribe((res: DocumentChangeAction<Quiz>[]) => {
      res.forEach((record: DocumentChangeAction<Quiz>) => {
        const data = record.payload.doc.data();
        this.quizList.push({
          id: record.payload.doc.id,
          title: data.title,
          questions: data.questions,
        });
      });
    });

  }

  onQuizClick(quizId: string): void {
    this.router.navigateByUrl(`quiz/${quizId}/question/1`);
  }

  createQuiz(): void {
    this.router.navigateByUrl('quiz/create');
  }

  getQuestion() {

  }
}
