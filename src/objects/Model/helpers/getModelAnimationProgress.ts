import { Easing } from '@tweenjs/tween.js';

export function getModelAnimationProgress(time: number, period: number) {
  const progress = (time % period) / period;

  return Math.sin(Easing.Quadratic.InOut(progress) * Math.PI);
}
