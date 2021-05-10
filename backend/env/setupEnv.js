import dotenv from "dotenv";

// set environment variables
process.env.NODE_ENV = process.env.NODE_ENV || "development";
if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
}

console.log("env", process.env.NODE_ENV);

console.log("env", process.env.FIREBASE_DATABASE_URL);
