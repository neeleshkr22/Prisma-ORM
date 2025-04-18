import { PrismaClient } from "../generated/prisma";

const prisma  =  new PrismaClient();

async function insertUser(username:string,password:string, firstName:string, lastName:string){
    const res = await prisma.user.create({
        data:{
            email: username,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            firstName:true,
            password:true
        }
    })
    console.log(res)
}
insertUser("neeleshrana22@gmail.com","password","Neelesh","Rana")

interface UpdateParams{
    firstName: string,
    lastName:string
}

async function updateUser(username: string, {firstName,lastName}:UpdateParams){
    const res =  await prisma.user.update({
       where:{
         email : username,
       },
       data:{
        firstName,
        lastName,
       }
    })
}
updateUser('neeleshrana22@gmail,com',{
    firstName: "Neelesh",
    lastName:"Kumar"
})


async function getUser(username:string){
    const res = await prisma.user.findFirst({
        where:{
            email:username
        },
    })
    console.log(res)
}
getUser("neeleshrana22@gmail.com")