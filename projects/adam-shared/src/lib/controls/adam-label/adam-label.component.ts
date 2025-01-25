import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'adam-lib-label',
  standalone: false,
  templateUrl: './adam-label.component.html',
  styleUrl: './adam-label.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamLabelComponent implements OnInit {
  @Input() text: any = "label";
  @Input() id: any;
  @Input() fontSize: string;
  @Input() height: string;
  @Input() width: string;
  @Input() fontColor: string;
  @Input() fontFamily: string;
  @Input() textAlign: string;
  @Input() class: string;
  @Input() isMarkAsterisk: boolean = false;

  @Input() public style: object = {};
  constructor() { }

  ngOnInit() { }

}