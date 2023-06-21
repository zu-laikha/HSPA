import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectedTabIndex = 0; // Default to the first tab
  tabs = ['One', 'Two', 'Three', 'Four', 'Five']; // Add the labels of all tabs here

  goToPreviousTab() {
    this.selectedTabIndex = Math.max(0, this.selectedTabIndex - 1);
  }

  goToNextTab() {
    this.selectedTabIndex = Math.min(this.tabs.length - 1, this.selectedTabIndex + 1);
    console.log("The value of tabs.length=", this.tabs.length);
    console.log("The value of this.selectedTabIndex=", this.selectedTabIndex);
    console.log("The value of this.selectedTabIndex + 1 =", this.selectedTabIndex + 1);

  }


  onToggleChange(event: any) {
    // Handle the selection change event
  }

  onSubmit() {

  }
}
