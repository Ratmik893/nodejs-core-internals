# 🧠 Node.js Core & Internals — A Systems-Level Learning Path

> **Not a framework tutorial. Not a crash course.**
> This repository is a **deep, internals-first journey into Node.js**, backend engineering, operating systems, networking, performance, and runtime architecture.

If you are here to _"learn Express"_, this repo is **not for you**.
If you want to **understand what Node.js really is and how it works under the hood**, welcome.

---

## 🎯 Purpose of This Repository

This repository exists to:

- Understand **Node.js as a runtime**, not a web framework
- Learn **core Node.js modules** without relying on external NPM packages
- Build **low-level network, file, and streaming systems**
- Understand **OS, networking, and concurrency concepts** behind backend systems
- Learn how Node achieves **asynchronous I/O using libuv**
- Write **high-performance, memory-efficient, scalable backend code**
- Read and understand **Node.js documentation and source code** confidently

This is a **learning log + reference + code lab**.

---

## 🧠 Philosophy

```text
Frameworks come and go.
Internals stay forever.
```

Principles followed in this repo:

- ❌ No Express / Nest / Fastify
- ❌ No unnecessary NPM packages
- ✅ Core modules first
- ✅ Source-code curiosity
- ✅ Performance over convenience
- ✅ Understanding "why", not just "how"

Whenever possible, things are built **from scratch using Node core APIs**.

---

## 🗺️ Learning Scope

This repository covers **far more than just Node.js**:

- Node.js Architecture (V8, libuv, event loop)
- Asynchronous I/O internals
- Operating system fundamentals (processes, threads, syscalls)
- File system internals
- Streams & backpressure
- Networking (TCP, UDP, DNS, HTTP)
- Binary data & buffers
- Cryptography (OpenSSL-backed)
- Multithreading & multiprocessing in Node
- Performance profiling & optimization
- Native C++ addons (N-API)

Think of this as:

> **Systems Engineering with JavaScript**

---

## 📂 Repository Structure

```text
nodejs-core-internals/
│
├── 00-foundations/
│   ├── js-runtime-notes.md
│   ├── os-basics.md
│   └── unix-notes.md
│
├── 01-node-architecture/
│   ├── architecture.md
│   ├── event-loop.md
│   └── libuv-overview.md
│
├── 02-core-modules/
│   ├── fs/
│   │   ├── fs-notes.md
│   │   └── examples/
│   ├── net/
│   ├── http/
│   ├── stream/
│   ├── crypto/
│   └── ...
│
├── 03-networking/
│   ├── tcp.md
│   ├── udp.md
│   ├── dns.md
│   └── http-deep-dive.md
│
├── 04-streams-performance/
│   ├── streams-internals.md
│   ├── backpressure.md
│   └── large-data-processing.md
│
├── 05-concurrency/
│   ├── event-driven-model.md
│   ├── worker-threads.md
│   └── clustering.md
│
├── 06-binary-and-crypto/
│   ├── buffers.md
│   ├── binary-protocols.md
│   └── cryptography.md
│
├── 07-optimization/
│   ├── performance.md
│   ├── profiling.md
│   └── memory-management.md
│
├── 08-internals/
│   ├── module-loader.md
│   ├── async-hooks.md
│   ├── node-source-guide.md
│   └── cpp-addons.md
│
├── projects/
│   ├── raw-http-server/
│   ├── tcp-chat/
│   ├── stream-compressor/
│   └── worker-thread-pool/
│
└── README.md
```

---

## 📦 Core Rule: Core Modules First

Every module used here is **from Node.js itself**, including but not limited to:

- `fs`, `path`, `os`
- `net`, `dgram`, `dns`
- `http`, `https`, `tls`
- `stream`, `zlib`
- `buffer`, `crypto`
- `events`, `timers`, `process`
- `worker_threads`, `cluster`
- `perf_hooks`, `async_hooks`

External packages are only discussed **conceptually**, never relied on.

---

## 🧪 How to Use This Repository

### 1️⃣ Read

Each directory contains **Markdown notes** explaining:

- Concepts
- Internals
- Why things work the way they do

### 2️⃣ Code

Every concept is backed by:

- Small experiments
- Minimal examples
- Performance-oriented implementations

### 3️⃣ Experiment

Break things intentionally:

- Block the event loop
- Exhaust memory
- Flood sockets

Then understand **why it broke**.

---

## 🚀 Who This Repo Is For

This repository is ideal for:

- Backend engineers who want **real depth**
- Security engineers
- Systems programmers curious about Node
- Developers moving beyond frameworks
- Anyone who wants to read Node.js source code

This repo is **not beginner-friendly** — and that is intentional.

---

## 📌 Expected Outcome

After completing this repository, you should be able to:

- Explain Node.js architecture confidently
- Build servers without frameworks
- Write memory-efficient streaming systems
- Create TCP/UDP-based applications
- Debug event loop blocking issues
- Profile and optimize Node applications
- Understand how Node interacts with the OS
- Learn any Node.js framework effortlessly

---

## ⚠️ Disclaimer

This repository is:

- Opinionated
- Internals-focused
- Performance-oriented

It prioritizes **understanding over speed** and **depth over comfort**.

---

## 🏁 Final Words

```text
Most people use Node.js.
Very few understand it.
This repo is for the second group.
```

Happy Noding 🚀
