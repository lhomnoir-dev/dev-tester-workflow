# Dev Tester Workflow with Concord MCP

This project demonstrates a simple collaboration workflow between two AI coding agents:

- **Developer Agent**: implements a discount function.
- **Tester Agent**: writes and runs unit tests.
- **Concord MCP**: coordinates ownership, messaging, handoffs, and review evidence.

## Workflow


1. The Developer Agent claims `src/discount.ts`.
2. It implements `applyDiscount(price, promoCode)`.
3. It hands off the task to the Tester Agent.
4. The Tester Agent claims `tests/discount.test.ts`.
5. It writes and runs Vitest tests.
6. If tests fail, it sends feedback to the Developer Agent.
7. If tests pass, it marks the task review-ready.

## Technologies

- TypeScript
- Node.js
- Vitest
- Concord MCP

## How to run

```bash
npm install
npm test
```

## What Concord MCP demonstrates

- Agent presence
- File ownership and overlap prevention
- Agent-to-agent messaging
- Task handoff
- Review evidence