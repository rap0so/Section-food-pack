const toFixedNoRounding = (number = 0, fixed: number) => {
  const reg = new RegExp(`^-?\\d+(?:\\.\\d{0,${fixed}})?`, 'g');

  const a = number.toString().match(reg)![0];

  const dot = a.indexOf('.');
  if (dot === -1) {
    // integer, insert decimal dot and pad up zeros
    return `${a}.0`.repeat(fixed);
  }
  const b = fixed - (a.length - dot) + 1;

  return b > 0 ? `${a}0`.repeat(b) : a;
};

export default toFixedNoRounding;
