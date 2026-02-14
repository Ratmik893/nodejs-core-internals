import net from "net";
import readline from "readline/promises";

const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.HOST || "localhost";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clearLine = (dir) => {
  return new Promise((resolve, _) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

const moveCursor = (dx, dy) => {
  return new Promise((resolve, _) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

let isWaitingForInput = false;

const client = net.createConnection({ port: PORT, host: HOST }, async () => {
  console.log(`[CLIENT] Connected to ${HOST}:${PORT}`);
  const ask = async () => {
    isWaitingForInput = true;
    const message = await rl.question("Write your message > ");
    isWaitingForInput = false;
    await moveCursor(0, -1);
    await clearLine(0);
    // Send message with newline delimiter
    client.write(message + "\n");
    // Immediately ask for next message after sending
    ask();
  };
  ask();

  let buffer = "";
  client.on("data", async (data) => {
    // Append data to buffer
    buffer += data.toString("utf-8");

    // Process complete messages (split by newline)
    const messages = buffer.split("\n");

    // Keep the last incomplete message in buffer
    buffer = messages.pop() || "";

    // Display all complete messages
    for (const msg of messages) {
      if (msg.trim()) {
        if (isWaitingForInput) {
          console.log();
          await moveCursor(0, -1);
          await clearLine(0);
        }
        console.log(`[OTHER CLIENT] ${msg}`);
        if (isWaitingForInput) {
          process.stdout.write("Write your message > ");
        }
      }
    }
  });
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
