export type ValidOptions = 'valid' | 'equal' | 'invalid'

export interface RoundI {
  id: number
  values: RoundValueI[];
}

export interface RoundValueI {
  topic: string
  value: string;
  isValid: ValidOptions;
}

export class RoundValue implements RoundValueI {
  topic: string = ""
  value = '';
  isValid = null as any;
}

export class Round implements RoundI {
  id: number = null as any
  values: RoundValueI[] = [];
}
