import { Component } from '@angular/core';
import { SlangsService } from 'src/app/services/slangs.service';
// import { HttpClient } from '@angular/common/http';
// import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private slangService: SlangsService) {}

  nameInput: string = '';
  definitionInput: string = '';
  isSlang: boolean = false;

  async addWord() {
    const data = {
      name: this.nameInput,
      definition: this.definitionInput,
      slang: this.isSlang,
    };
    this.slangService.postSlangData(data).subscribe(() => {});
    // await firstValueFrom(this.http.post(this.url, data)).then((result) => {
    //   console.log(result);
    // });
    this.nameInput = '';
    this.definitionInput = '';
  }
}
