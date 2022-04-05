const uwufy = (text: string): string => {
	text = text.replace(/(?:l|r)/g, "w");
	text = text.replace(/(?:L|R)/g, "W");
	text = text.replace(/!+/g, ` >w< `);
	let f = Math.random() < 0.25;

	if (f) {
		let c = text.charAt(0);
		text = c + "-" + text;
	}

	return text;
};

export { uwufy };
