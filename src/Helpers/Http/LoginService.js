import { BaseService } from "../../Helpers/classes/BaseHttp"

export class LoginService extends BaseService {
    constructor() {
        super('')
    }
    async login(body){
        return  await this.http.post("/odday/api/login",body)
    }
}