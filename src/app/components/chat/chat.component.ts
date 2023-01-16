import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  answers = [
    'Il tuo nome?',
    'quale è il tuo colore preferito?',
    'quale animale ti piace di più',
  ];
  selectedAnswer: string = '';
  value = 'Clear me';

  selectRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * this.answers.length);
    this.selectedAnswer = this.answers[randomIndex];
  }

  constructor() {}

  ngOnInit(): void {}
}
