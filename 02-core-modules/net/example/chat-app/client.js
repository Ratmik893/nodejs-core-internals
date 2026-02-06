import net from "net";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const client = net.createConnection({ port: PORT, host: HOST }, () => {
  console.log(`[CLIENT] Connected to ${HOST}:${PORT}`);
});

client.on("data", (data) => {
  console.log(`[DATA] Received: ${data.toString()}`);
});

client.on("error", (err) => {
  const errorCode = err.code || err.errors?.[0]?.code || "UNKNOWN";
  const errorMsg = err.message || err.errors?.[0]?.message || "Unknown error";
  console.error(`[CLIENT ERROR] ${errorCode}: ${errorMsg}`);
});

client.on("end", () => {
  console.log(`[CLIENT] Connection ended by server`);
});

client.on("close", (hadError) => {
  const status = hadError ? "with error" : "normally";
  console.log(`[CLIENT] Connection closed ${status}`);
});

// Handle Ctrl+C gracefully
process.on("SIGINT", () => {
  console.log(`\n[SHUTDOWN] Received SIGINT, closing connection...`);
  client.end(() => {
    console.log(`[SHUTDOWN] Client closed gracefully`);
    process.exit(0);
  });

  // Force exit if doesn't close in 2 seconds
  setTimeout(() => {
    console.error(`[SHUTDOWN] Forced exit after timeout`);
    process.exit(1);
  }, 2000);
});

process.on("SIGTERM", () => {
  console.log(`\n[SHUTDOWN] Received SIGTERM, closing connection...`);
  client.end(() => {
    console.log(`[SHUTDOWN] Client closed gracefully`);
    process.exit(0);
  });
});
