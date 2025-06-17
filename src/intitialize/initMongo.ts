import mongoose from "mongoose";
import { globalShared } from "@src/global";

const initMongo = () => {
  const connect = () => {
    mongoose
      .connect(globalShared.config.DATABASE_URL)
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1);
      });
  };
  connect();
};

export default initMongo;
