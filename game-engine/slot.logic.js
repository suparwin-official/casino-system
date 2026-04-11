export function spinSlot(bet) {
  const rtp = 0.95;
  const roll = Math.random();

  if (roll < 0.05 * rtp) return bet * 10;
  if (roll < 0.25 * rtp) return bet * 2;
  return 0;
}
