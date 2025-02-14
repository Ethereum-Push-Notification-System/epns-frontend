---
slug: explaining-push-nodes
title: "Explaining Push Nodes: Everything You Need To Know"
authors: [push]
image: "./cover-image.webp"
description: "Explaining Push Nodes: Everything You Need To Know"
text: "We’re extremely excited to announce that Push Nodes are here! An all-new decentralized infrastructure for web3’s leading communication layer, the Push Protocol Network.

This new and improved decentralized infrastructure for Push is a long-awaited move that we’re only now executing thanks to extensive research and development.
"
tags: [Push Protocol, Web3, Blockchain Technology, EthGlobal]
---

![Cover Image of Explaining Push Nodes: Everything You Need To Know](./cover-image.webp)

<!--truncate-->

We’re extremely excited to announce that Push Nodes are here! An all-new decentralized infrastructure for web3’s leading communication layer, the Push Protocol Network.

This new and improved decentralized infrastructure for Push is a long-awaited move that we’re only now executing thanks to extensive research and development.

So what does this new decentralized infrastructure look like?

In this article, we'll explore:

- What is decentralization in web3 and how will the new Push Network look
- Exploring types of nodes and explanation of Push Nodes
- Why is it necessary

### Understanding Different Types of Decentralization - Which Will Push Become

Decentralization can mean different things depending who you ask because it is a very complex topic that can exist in many different forms and structures. This is why many modern blockchains and protocols have tight discussions on what it means to be fully decentralized.

So to begin with, we’ll explore the different types of architecture at a high level as a way of best communicating what Push is working towards

Client-Server – Linear system <br />
Distributed – Different nodes hold different responsibilities and contribute to one another <br />
Peer-toPeer – Data is passed directly from user to user with no intermediaries<br />
Decentralized – Collective and shared control over data and decision making<br />

![First Image of Explaining Push Nodes: Everything You Need To Know](./image-1.webp)

As we’ve outlined in the image above, Push is moving towards the right. A fully decentralized network wherein no single node or entity has complete control of the network. Access is open and shared.

Keep in mind, decentralization can also be applied at different layers of an organization. Just as you can decentralize software architecture, you too can decentralize teams and organizational structures (DAOs).

While the Push Network already has a DAO and $PUSH token, we are now taking the final step towards decentralization by decentralizing our software architecture, completing what you might call ‘full stack decentralization’.

Our goal is to build a permissionless, trustless, proof-of-stake protocol with different node types that provide a decentralized API for notifications processing, indexing, and delivery. Ultimately, we’re aiming to wrap the whole system in a developer-friendly SDK package and a dApp that can leverage the power of this network.

### Push Nodes As The Key: How Do They Work

The Push Network will comprise three different types of Nodes. This includes:

- Validator nodes - Batching notifications into blocks, validating them, and providing all the required APIs for SDK
- Storage nodes - Indexing notifications
- Delivery nodes - Sending notifications to the end-user device based on his/her 0xwallet, not his/her hardware credentials.

The network is guarded by a smart contract to maintain node staking and slashing. This is where the PUSH token is used.

In our proposed architecture, the storage network is sharded by a smart contract, which assigns specific shards to specific nodes to ensure a high amount of redundancy. This is done on top of storage nodes.

We’re targeting fast delivery of ~15s on average for delivery of Notifications.

Abstract architecture

![Second Image of Explaining Push Nodes: Everything You Need To Know](./image-2.webp)

The basic use-case:

A javascript SDK locates the right validator, posts a notification, and this notification will be included in the block. The block list of validator nodes for processing is determined by a combined network random number (randao).

A more detailed version of the architecture looks like this:

![Third Image of Explaining Push Nodes: Everything You Need To Know](./image-3.webp)

We’ll now explore each of the three Node types in more detail.

#### Validator Nodes

Every validator can be slashed, in case his vote on the new block differs from the majority of their validators, which voted for the block as valid.

![Fourth Image of Explaining Push Nodes: Everything You Need To Know](./image-4.webp)

#### Storage nodes

Originally, Push Storage Nodes validate and index all communications and link them to a user’s wallet address and multi-chain identity.

The new Push decentralized system maps every wallet notification data to a specific shard.

This shard maintains X copies in the network. The smart contract dynamically computes x.
Whenever new nodes join, the contract recomputes which storage nodes are assigned to which shards.

![Fifth Image of Explaining Push Nodes: Everything You Need To Know](./image-5.webp)

![Sixth Image of Explaining Push Nodes: Everything You Need To Know](./image-6.webp)

#### Delivery Nodes

Delivery nodes are a pivotal component of the decentralized Push Notification infrastructure. They ensure notifications are securely and efficiently delivered to the end-user’s device while serving as a decentralized solution for connecting web3 and web2. These nodes can be hosted by trusted third parties, bringing reliability and professionalism to the system. Their operation hinges on a few key principles and functionalities:

- <b>Integration with Established APIs</b>: To leverage robust, widely-accepted infrastructure for sending Push Notifications.
- <b>Privacy-Centric Mapping</b>: To maintain the privacy and security of the users, delivery nodes store a mapping between a registered crypto wallet and the end-user device ID.
- <b>Hosting by Trusted Entities</b>: Recognizing the importance of reliability and trust in the notification delivery process, delivery nodes can be hosted by trusted third parties.
- <b>Collaboration with Wallet Providers</b>: In addition to being hosted by trusted third parties, delivery nodes can also be hosted by wallet providers themselves. This collaboration brings an added layer of integration and convenience, as wallet providers have a direct interest in ensuring that their users receive notifications promptly and securely.

![Seventh Image of Explaining Push Nodes: Everything You Need To Know](./image-7.webp)

#### Why Push Nodes? Why Decentralization?

You can read more about Push Delivery Nodes [here](https://push.org/blog/empower-your-wallet-app-or-platform-with-push-delivery-nodes/).

We believe that communication tools should be a public good. Builders should have open and free access to enhance their dApps with web3-native communication, without needing to rely on centralized providers.

As an extension of this, those same builders should not just have access to these tools, but a say in how these tools get developed and improved over time.

As the accessibility of these tools grows, so does the quality of dApps that build with them. When we achieve the goal of building better projects, we move closer towards a reality where we can onboard the next billion users to web3.

We are excited for this new era for the Push Protocol Network and we are extremely excited to have you be a part of it.

For more questions or queries, join us in Discord 👉https://discord.com/invite/pushprotocol

You can also get started building with Push tools 👉https://comms.push.org/docs/
