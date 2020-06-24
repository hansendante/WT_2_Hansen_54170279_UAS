import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class HarryService {
    baseUrlHP = `http://hp-api.herokuapp.com/api`;

    constructor(private http: HttpClient){

    }

    getHarrys(){
        return this.http.get(`${this.baseUrlHP}/characters`);
    }



}
