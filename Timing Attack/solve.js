import crypto from "crypto";

export function checkToken(userToken) {
  const account = account.retrieve(userToken);
  if (account) {
    if (crypto.timingSafeEqual(account.token, user.service.token)) {
      return true;
    }
  }
  return false;
}
