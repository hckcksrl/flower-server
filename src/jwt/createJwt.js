import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
const CreateJwt = email => {
  const token = jwt.sign(
    {
      email
    },
    process.env.JWT_SECRET || "",
    {
      algorithm: "HS256"
    }
  );
  return token;
};

export default CreateJwt;
