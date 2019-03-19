import jwt from "jsonwebtoken";
import Users from "../entity/user";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const DecodeJwt = async token => {
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET || "");
    const { email } = decode;
    const user = await Users.findOne({
      where: {
        email: email
      }
    });
    return user;
  } catch (error) {
    return error;
  }
};

export default DecodeJwt;
