import mongoose from 'mongoose'

const mongoose_connect = () => {
    
    mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true })
    .then(() => {
      console.log('mongodb Connection successful')
    })
    .catch(error => {
      // Handle error
      console.log('error while connecting database')
    });
  
}
export default mongoose_connect;