export const isValidSiret = (address) => {
  const reg = /^[0-9]{14}$/;
  return reg.test(address);
};
