export class Breakpoint {
	value: number

	constructor(value: number) {
		this.value = value
	}

	valueOf() {
		return this.value
	}
}

export const SM = new Breakpoint(640)
export const MD = new Breakpoint(768)
export const LG = new Breakpoint(1024)
export const XL = new Breakpoint(1280)
export const _2XL = new Breakpoint(1536)

const allbreakpoints = {
	SM,
	MD,
	LG,
	XL,
	_2XL,
}

export default allbreakpoints
