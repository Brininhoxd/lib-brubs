import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid'


@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  constructor() { }

  public generateId(prefix: string = 'brubs'): string {
    return `${prefix}-${uuidv4()}`
  }
}
