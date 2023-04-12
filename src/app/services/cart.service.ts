import { Injectable } from '@angular/core';
import { Training } from '../models/training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addTraining(Training: Training) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
