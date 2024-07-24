import { Component } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../quote';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quote-details',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './quote-details.component.html',
  styleUrl: './quote-details.component.css'
})
export class QuoteDetailsComponent {
  quotes: Quote[] = [];
  constructor (private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((data: Quote[]) => {
      this.quotes = data;
    });
  }

}
