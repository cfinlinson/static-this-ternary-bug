import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLibService {
  public static add ( a: number, b: number ): number {
      return a + b;
  }

  public static addAll ( values: number[] ): number {
    return values.length ? values.slice ( 1 ).reduce ( this.add, values[ 0 ] ) : 0;
  }
}