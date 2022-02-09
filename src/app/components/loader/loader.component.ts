import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() isEmpty = false;
  @Input() emptyMessage = 'Aucun élément';
  constructor() {}

  ngOnInit(): void {}
}
