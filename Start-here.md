# 🧭 Start Here — How to Use This Repository

This document explains **how to progress through this repository without getting lost**.

This is **not** a quick tutorial. It is a **long-term systems learning path**.

---

## 🧠 How to Think While Using This Repo

When reading or coding, always ask:

- What problem does this solve?
- Why was it designed this way?
- What are the trade-offs?
- What happens under the hood?
- What breaks if I misuse it?

---

## 🗺️ Recommended Learning Order

### 1️⃣ Foundations

Start with:

```output
00-foundations/
```

Focus on:

- JavaScript runtime behavior
- OS basics (processes, threads)
- Unix concepts

Do **not** rush this step.

---

### 2️⃣ Node.js Architecture

```output
01-node-architecture/
```

Learn:

- Event loop phases
- libuv’s role
- V8 vs Node responsibilities

This is the **mental model** for everything else.

---

### 3️⃣ Core Modules (Slow & Deep)

```output
02-core-modules/
```

Recommended order:

1. `process`, `events`, `timers`
2. `fs`, `path`, `os`
3. `buffer`
4. `stream`
5. `net` → `http`
6. `crypto`

Write experiments for each module.

---

### 4️⃣ Networking & Protocols

```output
03-networking/
```

Understand:

- TCP/UDP lifecycle
- HTTP internals
- DNS resolution

Build at least **one raw TCP app**.

---

### 5️⃣ Streams & Performance

```output
04-streams-performance/
```

Focus on:

- Backpressure
- Memory usage
- Throughput vs latency

---

### 6️⃣ Concurrency

```output
05-concurrency/
```

Understand:

- Event-driven concurrency
- Worker threads
- Clustering

---

### 7️⃣ Binary & Crypto

```output
06-binary-and-crypto/
```

Manipulate bytes. Implement protocols. Break encodings.

---

### 8️⃣ Optimization & Internals

```output
07-optimization/
08-internals/
```

Read Node source code alongside notes.

---

## 🧪 Rule of Thumb

> If you cannot explain it without a framework, you don’t understand it yet.

---

Move slowly. Revisit earlier sections often.
