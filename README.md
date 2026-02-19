
# CodeConclave v2.0

> **Run While you sleep.**

CodeConclave is an AI-native development environment designed to multiply engineering output. It combines a full cloud terminal, intelligent refactoring agents, and a global edge network into a single, cohesive workspace. 

We built this because switching between your IDE, terminal, and AI tools breaks flow. CodeConclave brings them all together—your code never leaves your private VPC, but your capacity to ship scales infinitely.

---

### ⚡ Core Capabilities

- **Cloud Terminal**: A fully persistent bash environment. Install packages, run servers, and deploy instantly without configuring local environments.
- **AI Co-Pilot**: Context-aware code generation that understands your entire file structure, not just the open file.
- **Jupyter Integration**: Native support for `.ipynb` notebooks for data science workflows alongside your web application code.
- **Global Edge**: Low-latency workspace streaming from the nearest edge node.

### 🛠️ Architecture

Built with a modern stack designed for performance and security:
- **Frontend**: React + Vite for sub-millisecond interaction.
- **Editor**: Custom implementation of Monaco Editor (VS Code core).
- **Styling**: Styled-components for themeable, component-scoped CSS.
- **Backend**: Node.js microservices handling auth, file systems, and LLM orchestration.
- **Infrastructure**: Dockerized containers orchestrated for isolation and security.

### 🚀 Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/yourusername/CodeConclave.git
   cd CodeConclave
   npm install
   ```

2. **Environment Setup**
   Copy `.env.example` to `.env` and add your keys. You'll need a MongoDB URI and JWT Secret at minimum.

3. **Launch**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to enter the enclave.

---

### 🔒 Security Code

Your code integrity is paramount.
- **Zero-Knowledge**: We don't train on your private repos.
- **VPC Isolation**: Each workspace runs in an isolated container.

---

### Contributing

We are open-source at heart. If you want to improve the terminal emulation or add new AI agents:
1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/amazing-agent`).
3. Commit your changes.
4. Open a generic Pull Request.

### License

MIT © 2024 CodeConclave. Created by Mohak.
