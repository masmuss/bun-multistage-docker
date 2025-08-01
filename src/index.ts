import { Hono } from "hono";

const app = new Hono();

app.get("/api/", (c) => {
	return c.json({
		message: "Hello, World!",
		timestamp: new Date().toISOString(),
	});
});

app.get("/api/health", (c) => {
	return c.json({
		status: "ok",
		timestamp: new Date().toISOString(),
	});
});

app.use((c, next) => {
	console.log(`Request: ${c.req.method} ${c.req.url}`);
	return next();
});

export default app;
