import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const planes = [
      {id: 1, name: 'Boeing'},
      {id: 2, name: 'Airbus'}
    ];
    return {planes};
  }
}
