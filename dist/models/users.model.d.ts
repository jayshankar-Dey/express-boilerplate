import mongoose, { Document } from 'mongoose';
export interface Iuser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const Users: mongoose.Model<Iuser, {}, {}, {}, mongoose.Document<unknown, {}, Iuser> & Iuser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Users;
