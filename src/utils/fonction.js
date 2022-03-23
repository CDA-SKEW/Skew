export const isValidSiret = (address) => {
  const reg = /^[0-9]{14}$/;
  console.log("reg test siret", reg.test(address));
  return reg.test(address);
};
