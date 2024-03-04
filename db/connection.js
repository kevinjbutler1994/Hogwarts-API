import mongoose from 'mongoose'
import chalk from 'chalk';

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/hogwarts_api").catch((err) => {
    console.log(`Error connection to MongoDB: ${err.message}`);
});

// line 6 howarts_api is the portion needed to swap out with new APIs, all other connection.js code remains unchanged 
// 

mongoose.connection.on("disconnect", ()=> {
    console.log("disconnected")
})
 mongoose.connection.on("error", (err) => {
    console.log(chalk.bold('MongoDB connection error: ${err}'));
 });


export default mongoose.connection

