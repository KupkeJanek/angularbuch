export interface Item {
  [key: string]: string;

}

export abstract class SearchService {
  abstract getAll(): Item[];
  abstract search(keyword: string): Item[];
}
