import { Component, OnInit } from '@angular/core';
import { DataSoruceRadio } from 'src/app/shared/components/buttons/radio-button/radio-button.component';


@Component({
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  radioItems: DataSoruceRadio[] = []

  constructor(
  ) { }

  ngOnInit(): void {
    this.radioItems = [
      {
        text: 'Teste 1'
      },
      {
        text: 'Teste 2'
      },
      {
        text: 'Teste 3s'
      },
    ]
  }

  showAlert() {
    alert("AAAAAAAAAAAAAA")
  }

}
