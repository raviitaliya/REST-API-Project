
import connect  from "./src/db";
import  app  from "./src/App";

const startserver= async()=>{

    await connect();

    const port=process.env.PORT || 3000;

    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })

}

startserver();