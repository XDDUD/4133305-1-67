import { PrismaClient } from "@prisma/client";
import { hash, hashSync } from "bcrypt";

export async function POST(req){
try{
    const {email, name ,password} = await req.json();
    //const hashedPassword = await hash(password, 10);
    const hashedPassword = hashSync(password, 10);

    const newUser = await Prisma.user.create({
        data:{
            email,
            name,
            password : hashedpassword,
        },
    });

    return Response.json({
      msg: "User create !!",
      newUser,
    });
    } catch (err){
    return Response.json(err,{status: 500 });
    }
}
