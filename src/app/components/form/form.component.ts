import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:5016/api/word';

  nameInput: string = '';
  definitionInput: string = '';
  isSlang: boolean = false;

  async addWord() {
    const data = {
      name: this.nameInput,
      definition: this.definitionInput,
      slang: this.isSlang,
    };
    await firstValueFrom(this.http.post(this.url, data)).then((result) => {
      console.log(result);
    });
    this.nameInput = '';
    this.definitionInput = '';
  }
}
