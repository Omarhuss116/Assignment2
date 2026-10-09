// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

const startedButtons = new WeakSet();

export function renderItems(list) {
	const listElement = document.querySelector("#list");
	listElement.innerHTML = "";

	for (const item of list) {
		const li = document.createElement("li");
		li.className = "listing";
		li.textContent = `${item.name} (${item.category})`;
		listElement.append(li);
	}
}

export function matching() {
	return items.filter((item) => item.inStock === true);
}

export function start() {
	renderItems(items);

	const button = document.querySelector("#run-filter");
	if (startedButtons.has(button)) {
		return;
	}
	startedButtons.add(button);

	button.addEventListener("click", () => {
		renderItems(matching());
	});
}
