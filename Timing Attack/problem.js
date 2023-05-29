export function checkToken(userToken) {
  const account = account.retrieve(userToken);
  if (account) {
    // timing attacks
    if (account.token === user.service.token) {
      return true;
    }
  }
  return false;
}
