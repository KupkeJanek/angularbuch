export abstract class SearchService {
  abstract getAll(): any[];
  abstract search(keyword: string): any[];
}
