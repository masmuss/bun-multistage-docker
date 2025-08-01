import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { serve } from "bun";
import app from "../src/index";

function request(path: string): Promise<Response> {
	return fetch(`http://localhost:3001${path}`);
}

let server: ReturnType<typeof serve>;

beforeAll(() => {
	server = serve({
		fetch: app.fetch,
		port: 3001,
	});
});

afterAll(() => {
	server.stop();
});

describe("API Endpoints", () => {
	it("GET /api/ should return Hello, World!", async () => {
		const res = await request("/api/");
		expect(res.status).toBe(200);
		const json = await res.json();
		expect(json.message).toBe("Hello, World!");
		expect(typeof json.timestamp).toBe("string");
	});

	it("GET /api/health should return status ok", async () => {
		const res = await request("/api/health");
		expect(res.status).toBe(200);
		const json = await res.json();
		expect(json.status).toBe("ok");
		expect(typeof json.timestamp).toBe("string");
	});
});
