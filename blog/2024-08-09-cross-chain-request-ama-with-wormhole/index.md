---
slug: ama-with-wormhole-for-cross-chain-requests-pre-pip
title: 'Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3'
authors: [push]
image: './cover-image.webp'
description: 'Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3'
text: 'Last week, we debuted Pre-PIP 3 (Push Improvement Proposal) for Cross Chain Requests on the [Push DAO forum and invited the team to chat about it, since their tech is a major part of this upgrade.'
tags: [Push Protocol, Web3, Blockchain Technology]
---

![Cover Image of Push Protocol x Wormhole AMA for the Cross Chain Request Feature in Push V3](./cover-image.webp)

<!--truncate-->

Last week, we debuted Pre-PIP 3 (Push Improvement Proposal) for [Cross Chain Requests](https://push.org/blog/cross-chain-requests-pre-pip/) on the [Push DAO forum](https://gov.push.org/t/pre-pip-3-cross-chain-request-feature-in-push-smart-contracts-v3/1794) and invited the [Wormhole](https://wormhole.com/) team to chat about it, since their tech is a major part of this upgrade.

Here’s a 3-minute recap for those who couldn’t join in:

We kicked off the [spaces](https://x.com/PushChain/status/1819017203284578483) with a bit of alpha on Push’s V3 Smart Contracts and what else is coming up from our side as the 2024 rolls on:

1. **Launch of On-Chain Governance**: The V3 contracts will introduce on-chain governance, allowing the community to govern smart contract execution.
2. **Optimized Contracts:** Push’s V3 contracts will be more efficient. They’ll be capable of handling requests from any chain, which will then be relayed to the Ethereum-based Push core contracts for validations and state changes.
3. **Upgraded Incentivized Chats:** Users will be able to initiate and receive paid chats from any chain to any chain, as long as both are supported by the framework.
4. **Cross-Chain Requests (CCR):** This feature allows users to perform actions like creating channels or requests on any blockchain, rather than just on Ethereum. This move is essential for Push to reach a broader audience across different blockchains, including Layer 2 (L2), Layer 3 (L3), and app-specific chains, without increasing friction in the user’s experience with our tech.
5. A new hub for builders: All of this will enable a new hub for builders to experiment and widen the boundaries of innovation with web3-based consumer apps.

We then moved on to Wormhole’s views on the significance of the integration of Push’s smart contracts with their tech:

### Why Push x Wormhole?

The integration centers on making the $PUSH token natively fungible across all of the connected chains that Push wants, while enabling native-messaging of all sorts on all involved. We came up with this new multi-chain framework, the Native Token Transfer framework, to enable seamless token transfers across different chains without the need for liquidity pools or complex bridging mechanisms. We both agree that the industry needs to involve into one that is truly interoperable. This is a major step in that direction.

### Why is Pre-PIP 3/CCR important?

The proposal includes detailed research and considerations, focusing on minimal changes to the existing architecture, a security-first approach, and how the technical aspects of Wormhole will enable CCR. This includes the deployment of manager and transceiver contracts on different chains and how these contracts interact with Push’s existing infrastructure.

### Why did Push choose Wormhole for this integration?

1. **Native Token Transfer (NTT) Framework:** This framework allows for seamless token transfers across different chains without the need for liquidity pools or complex bridging mechanisms.
2. **Security:** Wormhole’s framework is battle-tested and includes additional security measures like rate limiting.
3. **Future-Proofing:** The NTT framework allows Push to maintain governance control over its tokens across multiple chains, which is crucial for its ecosystem and the evolution of its DAO.

### Overview of the Wormhole Transceiver and Security Framework:

1. **Wormhole Transceiver:** This utilizes the general message passing layer of Wormhole, which relies on a security model with 19 independent "guardians" who verify messages. At least 13 of the 19 guardians must agree to validate a message, making the system highly secure.
2. **Flexibility and Future-Proofing: Wormhole’s** system allows for the adding of other transceivers or message verification protocols, such as off-chain processes or ZK transceivers for enhanced security.
3. **Overall Security and Reliability:** Wormhole has processed over a billion messages while maintaining consistently high security and resilience across its network. The platform already provably supports the future of secure message and token transfers across chains.

### Push Protocol and Wormhole Integration:

1. **Security-First Approach:** Push Protocol has always and continues to prioritize security, ensuring that the deployment of tokens and messages on multiple chains is always protected and that protection always increases.
2. **Cross-Chain Request (CCR):** With CCR live, users will be able to execute actions (e.g., creating channels) across different chains without leaving their native chain or bridging tokens. The integration with Wormhole makes this process more seamless and efficient.
3. **User Experience:** Post-CCR’s launch, actions like channel creation will become more straightforward, with users able to operate across chains without the hassle of managing tokens or gas fees on multiple networks to get to their intended destination.

### The Greater Implications of CCR for Developers and Builders:

1. **Unified API and Multi-Chain Notifications:** Developers can build once and notify everywhere, simplifying cross-chain interactions and enhancing user engagement. This reduces development complexity and improves resource management.
2. **Enhanced Functionality and Interoperability:** The integration allows for smart contracts on one chain to trigger notifications on another, improving the overall functionality of decentralized applications (dApps).
3. **Security Enhancements:** Wormhole’s security features, like rate-limiting, access control, and defense mechanisms, ensure that cross-chain communications remain verifiably secure.

The integration of Push Protocol's Cross-Chain Requests (CCR) with Wormhole represents a pivotal advancement in decentralized technology. This advancement strengthens Push’s security, raises its scalability, and broadens its reach across multiple blockchains, paving the way for a more connected and user-friendly Web3 experience for all. As Push continues to innovate, its partnership with Wormhole ensures that it remains on the forefront.

To any of you who are looking to build the future of consumer applications, reach out to our team across our networks, and we’ll help you get started as CCR takes off!
