export type RunnerState = {
  y: number;
  velocity: number;
  distance: number;
  spawnIn: number;
  obstacles: { x: number; width: number; height: number }[];
  over: boolean;
};

export const createRunner = (): RunnerState => ({
  y: 0, velocity: 0, distance: 0, spawnIn: 1.5, obstacles: [], over: false,
});

export function jumpRunner(state: RunnerState) {
  if (!state.over && state.y === 0) state.velocity = 570;
}

export function stepRunner(state: RunnerState, dt: number, random = Math.random) {
  if (state.over) return;
  const speed = Math.min(420, 220 + state.distance / 100);
  state.distance += speed * dt;
  state.y = Math.max(0, state.y + state.velocity * dt - 850 * dt * dt);
  state.velocity = state.y > 0 ? state.velocity - 1700 * dt : 0;
  state.spawnIn -= dt;
  if (state.spawnIn <= 0) {
    state.obstacles.push({ x: 650, width: 20 + Math.floor(random() * 12), height: 28 + Math.floor(random() * 16) });
    state.spawnIn = 1.3 + random() * 0.7;
  }
  for (const obstacle of state.obstacles) {
    obstacle.x -= speed * dt;
    // A forgiving body hitbox inside the 44 × 44 rat sprite, excluding its tail.
    if (obstacle.x < 120 && obstacle.x + obstacle.width > 98 && state.y + 5 < obstacle.height) {
      state.over = true;
    }
  }
  state.obstacles = state.obstacles.filter((obstacle) => obstacle.x + obstacle.width > 0);
}
