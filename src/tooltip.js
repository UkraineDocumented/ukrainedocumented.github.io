import Tooltip from "./Tooltip.svelte"; // reusable tooltip component

export function tooltip(element) {
	let content;
	let tooltipComponent;

	function mouseOver(event) {
		content = element.getAttribute("content");
		element.removeAttribute("content");

		tooltipComponent = new Tooltip({
			props: {
				content: content,
				x: event.pageX,
				y: event.pageY,
			},
			target: document.body,
		});
	}

	function mouseMove(event) {
		tooltipComponent.$set({
			x: event.pageX,
			y: event.pageY,
		});
	}

	function mouseLeave() {
		tooltipComponent.$destroy();
		element.setAttribute("content", content);
	}

	element.addEventListener("mouseover", mouseOver);
	element.addEventListener("mouseleave", mouseLeave);
	element.addEventListener("mousemove", mouseMove);

	return {
		destroy() {
			element.removeEventListener("mouseover", mouseOver);
			element.removeEventListener("mouseleave", mouseLeave);
			element.removeEventListener("mousemove", mouseMove);
		},
	};
}
