export interface Formations {
  formations: { [key: string]: Formation };
}

export interface Formation {
  defender_count: number;
  midfield_count: number;
  attacking_count: number;
  defenders: Position[];
  midfielders: Position[];
  attackers: Position[];
}

export interface Position {
  left: string;
  top: string;
  name?: string;
}
