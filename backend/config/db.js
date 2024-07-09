import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://n190057:sssm12345@food-delivery.hxcqwpn.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}