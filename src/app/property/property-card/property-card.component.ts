import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

@Component( {
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css']
} )

export class PropertyCardComponent {

  @Input() property : IProperty = {
    Id: 0,
    SellRent: 1,
    Name: "",
    Type: "",
    Price: 0
  };

  constructor() {}

}
