import crypto from "crypto";

export function checkToken(userToken) {
  const account = account.retrieve(userToken);
  if (account) {
    if (timingSafeEqual(account.token, user.service.token)) {
      return true;
    }
  }
  return false;
}

function timingSafeEqual(userToken, serviceToken) {
  try {
    crypto.timingSafeEqual(Buffer.from(userToken), Buffer.from(serviceToken));
  } catch (err) {
    return false;
  }
}
