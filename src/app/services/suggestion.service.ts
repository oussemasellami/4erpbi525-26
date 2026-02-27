import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http:HttpClient) { }

  getallsuggestion(){
    return this.http.get('http://localhost:3000/suggestions')
  }
   getsuggestion(id:any){
    return this.http.get('http://localhost:3000/suggestions'+'/'+id)
  }
   deletesuggestion(id:any){
    return this.http.delete('http://localhost:3000/suggestions'+'/'+id)
  }
   createsuggestion(sugg:Suggestion){
    return this.http.post('http://localhost:3000/suggestions',sugg)
  }
   updatesuggestion(id:any,sugg:Suggestion){
    return this.http.put('http://localhost:3000/suggestions'+'/'+id,sugg)
  }

}
