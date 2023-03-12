import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClient } from "@prisma/client"


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit(){
        await this.$connect()
    }
    
    async enableShotDownHooks(app:INestApplication){
        this.$on('beforeExit', async ()=>{await app.close()})

    } 

}