import { Component } from '@angular/core';
import { Formations } from '../../interfaces/formations';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-make-lineup',
  templateUrl: './make-lineup.component.html',
  styleUrl: './make-lineup.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class MakeLineupComponent {
  url: string = 'assets/formations.json';
  public playerName!: string;
  id!: number;
  public inputValue: string = '';
  public selected: string = 'f_3_5_2';
  public data: Formations = {
    formations: {
      f_3_5_2: {
        defender_count: 3,
        midfield_count: 5,
        attacking_count: 2,
        defenders: [
          { left: '30', top: '25', name: 'CB', id: 1 },
          { left: '30', top: '50', name: 'CB', id: 2 },
          { left: '30', top: '75', name: 'CB', id: 3 },
        ],
        midfielders: [
          { left: '48', top: '10', name: 'LWB', id: 4 },
          { left: '46', top: '30', name: 'LM', id: 5 },
          { left: '43', top: '50', name: 'CM', id: 6 },
          { left: '46', top: '70', name: 'RM', id: 7 },
          { left: '48', top: '90', name: 'RWB', id: 8 },
        ],
        attackers: [
          { left: '65', top: '40', name: 'ST', id: 9 },
          { left: '65', top: '60', name: 'ST', id: 10 },
        ],
      },
      f_3_4_3: {
        defender_count: 3,
        midfield_count: 4,
        attacking_count: 3,
        defenders: [
          { left: '30', top: '25', name: 'CB', id: 11 },
          { left: '30', top: '50', name: 'CB', id: 12 },
          { left: '30', top: '75', name: 'CB', id: 13 },
        ],
        midfielders: [
          { left: '48', top: '15', name: 'LM', id: 14 },
          { left: '48', top: '40', name: 'CM', id: 15 },
          { left: '48', top: '60', name: 'CM', id: 16 },
          { left: '48', top: '85', name: 'RM', id: 17 },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW', id: 18 },
          { left: '65', top: '50', name: 'ST', id: 19 },
          { left: '65', top: '75', name: 'RW', id: 20 },
        ],
      },
      f_3_6_1: {
        defender_count: 3,
        midfield_count: 5,
        attacking_count: 2,
        defenders: [
          { left: '30', top: '25', name: 'CB', id: 21 },
          { left: '30', top: '50', name: 'CB', id: 22 },
          { left: '30', top: '75', name: 'CB', id: 23 },
        ],
        midfielders: [
          { left: '52', top: '10', name: 'LWB', id: 24 },
          { left: '47', top: '25', name: 'LM', id: 25 },
          { left: '43', top: '40', name: 'CM', id: 26 },
          { left: '43', top: '55', name: 'CM', id: 27 },
          { left: '47', top: '70', name: 'RM', id: 28 },
          { left: '52', top: '85', name: 'RWB', id: 29 },
        ],
        attackers: [{ left: '65', top: '50', name: 'ST', id: 30 }],
      },
      f_4_3_3_Defansif: {
        defender_count: 4,
        midfield_count: 3,
        attacking_count: 3,
        defenders: [
          { left: '33', top: '15', name: 'LB', id: 31 },
          { left: '30', top: '35', name: 'CB', id: 32 },
          { left: '30', top: '65', name: 'CB', id: 33 },
          { left: '33', top: '85', name: 'RB', id: 34 },
        ],
        midfielders: [
          { left: '43', top: '25', name: 'CDM', id: 35 },
          { left: '48', top: '50', name: 'CM', id: 36 },
          { left: '43', top: '75', name: 'CDM', id: 37 },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW', id: 38 },
          { left: '68', top: '50', name: 'ST', id: 39 },
          { left: '65', top: '75', name: 'RW', id: 40 },
        ],
      },
      f_4_3_3_Atak: {
        defender_count: 4,
        midfield_count: 3,
        attacking_count: 3,
        defenders: [
          { left: '33', top: '15', name: 'LB', id: 41 },
          { left: '30', top: '35', name: 'CB', id: 42 },
          { left: '30', top: '65', name: 'CB', id: 43 },
          { left: '33', top: '85', name: 'RB', id: 44 },
        ],
        midfielders: [
          { left: '52', top: '25', name: 'CAM', id: 45 },
          { left: '45', top: '50', name: 'CM', id: 46 },
          { left: '52', top: '75', name: 'CAM', id: 47 },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW', id: 48 },
          { left: '68', top: '50', name: 'ST', id: 49 },
          { left: '65', top: '75', name: 'RW', id: 50 },
        ],
      },
      f_4_3_3_Normal: {
        defender_count: 4,
        midfield_count: 3,
        attacking_count: 3,
        defenders: [
          { left: '33', top: '15', name: 'LB', id: 51 },
          { left: '30', top: '35', name: 'CB', id: 52 },
          { left: '30', top: '65', name: 'CB', id: 53 },
          { left: '33', top: '85', name: 'RB', id: 54 },
        ],
        midfielders: [
          { left: '48', top: '25', name: 'CM', id: 55 },
          { left: '48', top: '50', name: 'CM', id: 56 },
          { left: '48', top: '75', name: 'CM', id: 57 },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW', id: 58 },
          { left: '68', top: '50', name: 'ST', id: 59 },
          { left: '65', top: '75', name: 'RW', id: 60 },
        ],
      },
    },
  };

  onOptionsSelected(value: string) {
    this.selected = value;
    console.log(this.data.formations[this.selected].defenders);
  }

  toggleInput(id: number) {
    this.id = id;
    let kisi_ekle = document.querySelector('.kisi-ekle');
    if (kisi_ekle?.classList.contains('hidden')) {
      kisi_ekle?.classList.toggle('hidden');
    }
  }

  addPlayer(name: string, place: any) {
    console.log(name, place);
  }

  public addPlayerForm: FormGroup = new FormGroup({
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
    ]),
  });

  // constructor(public http: HttpClient) {}

  // ngOnInit() {
  //   console.log('messi');

  //   this.http.get(this.url).subscribe((res) => {
  //     this.data = res;
  //     console.log(res);
  //   });
  // }
}
