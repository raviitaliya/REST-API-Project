import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected to mongodb.");
    });

    mongoose.connection.on("error",()=>{
        console.log("data base connnection error.");
    })

    const connect = await mongoose.connect(
      "mongodb+srv://italiyaravi:4zEevCSAsBLroL88@bookdata.nnbycdk.mongodb.net/book?retryWrites=true&w=majority&appName=bookdata"
    );

  } catch (error) {
    console.error("database not connected", error);
  }
};

export default connect;
