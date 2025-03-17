import mongoose,{Schema,Document} from 'mongoose'

export interface Iuser extends Document{
       name:string,
       email:string,
       password:string,
       createdAt: Date,
       updatedAt: Date
}

const userSchema:Schema=new Schema({
   name:{
       type:String,
       required:[true,"name is required"]
   },
   email:{
       type:String,
       required:[true,"email is required"]
   },
   password:{
       type:String,
       required:[true,"password is required"]
   }
},{timestamps:true})

const Users=mongoose.model<Iuser>("Users",userSchema)
export default Users
