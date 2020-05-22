export const differenceForNow = (date: Date) => {
  const dRefNow = new Date();

  const now = new Date(
    `${dRefNow.getMonth() + 1}/${dRefNow.getDate()}/${dRefNow.getFullYear()}`,
  );

  const past = new Date(
    `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
  );

  const diff = Math.abs(now.getTime() - past.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const isPast = now.getTime() > past.getTime();

  return [days, isPast];
};
