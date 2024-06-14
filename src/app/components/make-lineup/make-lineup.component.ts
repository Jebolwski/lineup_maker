import { Component } from '@angular/core';
import { Formations } from '../../interfaces/formations';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-make-lineup',
  standalone: true,
  imports: [NgFor],
  templateUrl: './make-lineup.component.html',
  styleUrl: './make-lineup.component.scss',
})
export class MakeLineupComponent {
  url: string = 'assets/formations.json';
  public selected: string = 'f_3_5_2';
  public data: Formations = {
    formations: {
      f_3_5_2: {
        defender_count: 3,
        midfield_count: 5,
        attacking_count: 2,
        defenders: [
          { left: '30', top: '25', name: 'CB' },
          { left: '30', top: '50', name: 'CB' },
          { left: '30', top: '75', name: 'CB' },
        ],
        midfielders: [
          { left: '48', top: '10', name: 'LWB' },
          { left: '46', top: '30', name: 'LM' },
          { left: '43', top: '50', name: 'CM' },
          { left: '46', top: '70', name: 'RM' },
          { left: '48', top: '90', name: 'RWB' },
        ],
        attackers: [
          { left: '65', top: '40', name: 'ST' },
          { left: '65', top: '60', name: 'ST' },
        ],
      },
      f_3_4_3: {
        defender_count: 3,
        midfield_count: 4,
        attacking_count: 3,
        defenders: [
          { left: '30', top: '25', name: 'CB' },
          { left: '30', top: '50', name: 'CB' },
          { left: '30', top: '75', name: 'CB' },
        ],
        midfielders: [
          { left: '48', top: '15', name: 'LM' },
          { left: '48', top: '40', name: 'CM' },
          { left: '48', top: '60', name: 'CM' },
          { left: '48', top: '85', name: 'RM' },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW' },
          { left: '65', top: '50', name: 'ST' },
          { left: '65', top: '75', name: 'RW' },
        ],
      },
      f_3_6_1: {
        defender_count: 3,
        midfield_count: 5,
        attacking_count: 2,
        defenders: [
          { left: '30', top: '25', name: 'CB' },
          { left: '30', top: '50', name: 'CB' },
          { left: '30', top: '75', name: 'CB' },
        ],
        midfielders: [
          { left: '52', top: '10', name: 'LWB' },
          { left: '47', top: '25', name: 'LM' },
          { left: '43', top: '40', name: 'CM' },
          { left: '43', top: '55', name: 'CM' },
          { left: '47', top: '70', name: 'RM' },
          { left: '52', top: '85', name: 'RWB' },
        ],
        attackers: [{ left: '65', top: '50', name: 'ST' }],
      },
      f_4_3_3_Defansif: {
        defender_count: 4,
        midfield_count: 3,
        attacking_count: 3,
        defenders: [
          { left: '33', top: '15', name: 'LB' },
          { left: '30', top: '35', name: 'CB' },
          { left: '30', top: '65', name: 'CB' },
          { left: '33', top: '85', name: 'RB' },
        ],
        midfielders: [
          { left: '45', top: '25', name: 'CDM' },
          { left: '48', top: '50', name: 'CM' },
          { left: '45', top: '75', name: 'CDM' },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW' },
          { left: '68', top: '50', name: 'ST' },
          { left: '65', top: '75', name: 'RW' },
        ],
      },
      f_4_3_3_Atak: {
        defender_count: 4,
        midfield_count: 3,
        attacking_count: 3,
        defenders: [
          { left: '33', top: '15', name: 'LB' },
          { left: '30', top: '35', name: 'CB' },
          { left: '30', top: '65', name: 'CB' },
          { left: '33', top: '85', name: 'RB' },
        ],
        midfielders: [
          { left: '48', top: '25', name: 'CM' },
          { left: '52', top: '50', name: 'CAM' },
          { left: '48', top: '75', name: 'CM' },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW' },
          { left: '68', top: '50', name: 'ST' },
          { left: '65', top: '75', name: 'RW' },
        ],
      },
      f_4_3_3_Normal: {
        defender_count: 4,
        midfield_count: 3,
        attacking_count: 3,
        defenders: [
          { left: '33', top: '15', name: 'LB' },
          { left: '30', top: '35', name: 'CB' },
          { left: '30', top: '65', name: 'CB' },
          { left: '33', top: '85', name: 'RB' },
        ],
        midfielders: [
          { left: '48', top: '25', name: 'CM' },
          { left: '48', top: '50', name: 'CM' },
          { left: '48', top: '75', name: 'CM' },
        ],
        attackers: [
          { left: '65', top: '25', name: 'LW' },
          { left: '68', top: '50', name: 'ST' },
          { left: '65', top: '75', name: 'RW' },
        ],
      },
    },
  };

  onOptionsSelected(value: string) {
    this.selected = value;
    console.log(this.data.formations[this.selected].defenders);
  }

  // constructor(public http: HttpClient) {}

  // ngOnInit() {
  //   console.log('messi');

  //   this.http.get(this.url).subscribe((res) => {
  //     this.data = res;
  //     console.log(res);
  //   });
  // }
}
