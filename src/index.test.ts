import { useSocket } from "./index";
import { renderHook, act } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe("useSocket", () => {
	it("updates every second", () => {
		const socket = renderHook(() => useSocket());
	});
});
