import { Service } from '@angular/core';

@Service()
export class Values {

    private message = '';
    setData(value:string){
        this.message = value;
    }

    getData(){
        return this.message;
    }


}
