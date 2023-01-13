import { Component } from '@angular/core';
import { take } from 'rxjs';
import { SlangsService } from 'src/app/services/slangs.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  constructor(private slangService: SlangsService, private http: HttpClient) {}

  url: string = 'http://localhost:5016/api/word';

  ngOnInit(): void {
    this.slangService
      .getSlangData()
      .pipe(take(1))
      .subscribe((slangData: any) => {
        this.slangData = slangData;
      });
  }
  slangData: any;

  async deleteWord(id: number) {
    await firstValueFrom(this.http.delete(this.url + `/${id}`)).then(
      (result) => {
        console.log(result);
      }
    );
  }
}
