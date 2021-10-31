export type TColor = 'hex' | 'rgb' | 'rgba'

export interface IAddress {
  [city: string]: {
    [district: string | number]: string | string[] | {
      [town: string | number]: string | string[] | {
        [village: string | number]: string | string[]
      }
    }
  }
}