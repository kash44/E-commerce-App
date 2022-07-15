import jwt from "jsonwebtoken";
import logger from "./logger";
import config from "config";

const publicKey = config.get<string>("publicKey");
const privateKey = config.get<string>("privateKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

// export function signJwt(object: Object, expiresIn: string) {
//   return jwt.sign(object, privateKey, { algorithm: "RS256", expiresIn: "15m" });
// }

// Why doesn't this work
// export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
//   return jwt.sign(object, privateKey, {
//     ...(options && options),
//     algorithm: "RS256",
//   });
// } 

export async function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, privateKey);
    // const decoded = jwt.verify(token, publicKey);
    return { valid: true, expired: false, decoded };
  } catch (error: any) {
    logger.info({ error });
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}

// export async function verifyJwt(token: string) {
//   const decoded = jwt.verify(
//     token,
//     privateKey,
//     { algorithms: ['RS256', 'HS256'] },
//     (err, payload) => {
//       if (err) {
//         // Not a valid token
//         console.log("Error:", err);
//         return {
//           valid: false,
//           expired: err.message === "jwt expired",
//           decoded: null,
//         };
//       }
//       // Token successfully verified
//       console.log("Payload:", payload);
//       return payload
//     }
//   );
//   console.log(decoded);
//   return { valid: true, expired: false, decoded };
// }


