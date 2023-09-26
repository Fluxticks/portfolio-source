/**
 *
 * @param {number} number
 * @param {number} inMin
 * @param {number} inMax
 * @param {number} outMin
 * @param {number} outMax
 * @returns number
 */
export function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export const minWaveOpacity = 0.8;
