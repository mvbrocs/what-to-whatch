const SEC_IN_MIN = 60;
const MIN_IN_HR = 60;

export const addZero = (num: number) => (num.toString().length === 1 ? `0${num}` : `${num}`);

export const formatDuration = (sec: number) => {
  const totalSec = Math.floor(sec);
  const totalMin = Math.floor(totalSec / SEC_IN_MIN);
  const totalHr = Math.floor(totalMin / MIN_IN_HR);

  const manySec = totalSec - totalMin * SEC_IN_MIN;
  const manyMin = totalMin - totalHr * MIN_IN_HR;

  const durationSec = addZero(manySec);
  const durationMin = addZero(manyMin);
  const durationHr = addZero(totalHr);

  return `${durationHr}:${durationMin}:${durationSec}`;
};
