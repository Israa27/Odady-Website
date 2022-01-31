import { BaseService } from "../../Helpers/classes/BaseHttp"

export class RegisterService extends BaseService {
    constructor() {
        super('')
    }
    async register(body){
        return  await this.http.post("/odday/api/ragister",body)
    }
}