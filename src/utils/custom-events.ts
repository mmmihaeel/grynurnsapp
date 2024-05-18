function subscribeToEvent(
	eventName: string,
	listener: (data?: object) => void
) {
	document.addEventListener(eventName, listener);
}

function unsubscribeToEvent(
	eventName: string,
	listener: (data?: object) => void
) {
	document.removeEventListener(eventName, listener);
}

function publishEvent(eventName: string, data = {}) {
	const event = new CustomEvent(eventName, { detail: data });
	document.dispatchEvent(event);
}

export { publishEvent, subscribeToEvent, unsubscribeToEvent };
