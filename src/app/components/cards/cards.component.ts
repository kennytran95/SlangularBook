import { Component, ɵɵsetComponentScope } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { SlangsService } from 'src/app/services/slangs.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, switchMap } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  constructor(private slangService: SlangsService) {}

  url: string = 'http://localhost:5016/api/word';
  slangData$: any; //use $ for observables
  refreshWords = new BehaviorSubject<boolean>(true);

  public async ngOnInit(): Promise<void> {
    this.fetchWords();
    this.slangService.WordAdded.subscribe(() => {
      this.fetchWords();
    });
    // this.slangService.getSlangData().subscribe((slangData: any) => {
    //   this.slangData = slangData;
    // });
    // this.slangData = this.refreshWords.pipe(
    //   switchMap(() => this.slangService.getSlangData())
    // );
  }

  fetchWords() {
    console.log('Fetching Data...');
    this.slangService.getSlangData().subscribe((slangData: any) => {
      this.slangData$ = slangData;
    });
  }

  async deleteWord(id: number) {
    this.slangService.deleteSlangData(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
    // await firstValueFrom(this.http.delete(this.url + `/${id}`)).then(
    //   (result) => {
    //     console.log(result);
    //     this.ngOnInit();
    //     // this.refreshWords.next(true);
    //   }
    // );
  }
}
