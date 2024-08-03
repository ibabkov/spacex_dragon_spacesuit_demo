export function getModelAnimationProgress(time: number, period: number) {
	const progress = (time % period) / period;

	return Math.sin(easingQuadraticInOut(progress) * Math.PI);
}

function easingQuadraticInOut(amount: number) {
	if ((amount *= 2) < 1) {
		return 0.5 * amount * amount;
	}

	return -0.5 * (--amount * (amount - 2) - 1);
}
