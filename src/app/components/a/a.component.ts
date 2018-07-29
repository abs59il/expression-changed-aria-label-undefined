import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  openBottomSheet() {
    // this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
