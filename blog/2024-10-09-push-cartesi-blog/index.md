---
slug: how-developers-can-integrate-cartesi-and-push-protocol
title: 'How developers can integrate Cartesi and Push Protocol.'
authors: [push]
image: './cover-image.webp'
description: 'How developers can integrate Cartesi and Push Protocol.'
text: 'We’re thrilled to share that contributors at Cartesi have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi.'
tags: [Announcements]
---

![Cover Image of How developers can integrate Cartesi and Push Protocol.](./cover-image.webp)

<!--truncate-->

We’re thrilled to share that contributors at [Cartesi](https://cartesi.io/) have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi.

### **What is Cartesi?**

Cartesi is an innovative modular blockchain protocol that empowers developers by providing a complete Linux environment along with high-performance rollups. This combination is designed to facilitate the development of advanced next-generation DApps. With it, decentralized applications should be easier, faster, and more scalable than ever before. 

Cartesi overcomes the constraints of traditional blockchains by providing developers with a complete Linux operating system and scalable rollups, tailored for real-world applications. This opens up exciting new possibilities for DApps in gaming, DeFi, and other cutting-edge industries, unlocking the future of innovation.

Cartesi-built projects have consistently excelled in [ETHGlobal](https://ethglobal.com/) hackathons with innovative projects like [Cartenix](https://ethglobal.com/showcase/cartenix-7xxe6), [Doom Arena](https://ethglobal.com/showcase/doom-arena-hmu4j), and [ChainGPT](https://ethglobal.com/showcase/chaingpt-and-accountability-for-ai-agents-doquk) gaining considerable traction. These projects not only showcase their commitment to decentralized computation but also highlight Cartesi’s unique ability to unlock new possibilities for scalable, high-performance DApps across various real-world use cases. Other Cartesi Mainnet DApps like [Rives](https://rives.io/) and [Bug Buster](https://bugbuster.app/) also showed new unforeseen possibilities.

### How Developers can Integrate Cartesi and Push Protocol:

Developer advocacy contributors at Cartesi have demonstrated how developers can integrate push notifications into their Cartesi dApps, enabling users to receive updates related to their activities within the Cartesi rollups environment. Developers can deliver finalized on-chain messages or simple in-app notifications that users care about.

This integration enhances the interactivity of Cartesi DApps, so users can receive timely updates—whether for verified outputs or simple messages—without monitoring epoch finalization.

This is particularly useful when managing on-chain assets, where users need to execute a voucher once an epoch is finalized. Vouchers serve as transaction instruments on the base layer blockchain, facilitating operations like asset transfers. They enable modifications to the base layer by reflecting the application's state changes. Read [here](https://docs.cartesi.io/cartesi-rollups/1.5/development/retrieve-outputs/#vouchers-on-chain-actions) to learn more about vouchers. With notifications powered by Push, Cartesi users can also stay informed about unexecuted vouchers, ensuring they don't miss critical updates, like withdrawing assets.

### **Technical Deep Dive: The Cartesi Push Notification Server**

The [Cartesi Push Notification Server](https://github.com/Mugen-Builders/push-cartesi/) is a crucial tool that enhances the user experience of Cartesi DApps by providing real-time push notifications. This service is powered by a simple cron job that allows Cartesi DApp creators to notify users of important events, such as those mentioned above, verified outputs, or the availability of vouchers for asset withdrawal, without requiring users to monitor blockchain events like epoch finalization manually.

**Addressing the On-Chain Asset Challenge:**
One key challenge in decentralized applications involving on-chain assets is the need for users to execute a voucher after an epoch has been finalized. Without notifications, users may miss the execution of vouchers, potentially delaying their withdrawal of assets. The Cartesi Push Notification Server directly solves this problem by alerting users when important events—such as unexecuted vouchers—occur, ensuring they remain informed and can act promptly in response to them.

**How It Works: Push Notifications for Cartesi DApps:**

The Push Cartesi Notification server operates through a cron job that regularly queries the Graphql server of the Cartesi dApp node to check for new or verified outputs. Here’s how developers can implement it:

1. **Push Notification Architecture:** 
The Push Cartesi Notification Server leverages a cron job that filters for [notices](https://docs.cartesi.io/cartesi-rollups/1.5/development/retrieve-outputs/#notices-off-chain-events) and verified proofs, sending timely notifications to users about these critical outputs. However, vouchers are intentionally excluded from the cron job, as they are deleted after execution. Instead, the system focuses on notifying users when a proof is available—triggering them to take action, such as executing a voucher.

Here’s the architecture of how the Push Cartesi Notification Server works:

![Push Cartesi Notification Server](cover-image1.webp)

2. **Creating a Push Notification Channel:**
To start, developers must set up a Push notification channel using [Push Protocol’s official guide](https://comms.push.org/docs/notifications/tutorials/create-your-channel/). The rest of the setup process is explained below. 

3. **Efficient Notification Management Using Notices:**
Developers can include a "notice" alongside vouchers to ensure users are properly informed about important, on-chain events. For example, when an NFT is minted, a notice can be generated to notify the user of this event, while the voucher handles the asset’s actual minting process. A notice is a verifiable data statement that confirms off-chain events or conditions, supported by accompanying proof.

4. **Two Types of Notifications: Instant vs. Proofed:**
Developers have control over when notifications are sent to users through two types of notices:
- Instant Notifications: These notifications are sent immediately after a notice is created, allowing users to get real-time updates.
- Proofed Notifications: These notifications are sent only when a proof is available, i.e., when the epoch finalizes, ensuring that users are alerted once the output is verified and actionable.

5. **Streamlined Asset Withdrawals:**
The Push/Cartesi notification system is particularly valuable in managing on-chain assets. When users need to withdraw assets, they are alerted when a voucher is ready for execution. By receiving these timely notifications, users can act quickly, avoiding delays or missed withdrawals.

### Setting up Notifications for Cartesi DApps:

Disclaimer: *This integration is currently in its alpha stage and relies on certain trust assumptions regarding the Notifications server. Developers are encouraged to use this as an experimental step for integrating push notifications but should not consider it a final, mainnet-ready solution.*

First, make sure you have created a channel for Push. Once you’ve done so, continue with the below steps to build and run the Notifications server with a sample Cartesi dApp on your local machine.:

**Replace addresses in the code for the cron-job as follows:**

Inside notification.sender.js change the address to the address of your channel

```
pushChannelAdress = "0x41070EfeD9Ead91380AAE5e164DAC1001F64C991";
```

Inside graphql/config.js,  update the endpoint with the graphql route of your node.

```
endpoint: 'http://localhost:8080/graphql'
```

**Add private key**

Disclaimer: *This is just for test purposes. Do not try this with any real private key.*

Start the process by creating a .env file from the given sample and filling it with the private key of the channel creator or delegated messenger. 

`cp .env.sample .env`

Now you can start testing and launching the sending function for notifications!

### Sending Notifications for Cartesi DApps:

From inside your cron-job folder, use the following input:

```
npm start
```

Then, you can start the simple-node DApp inside its directory with the below command:

```
cartesi build
```

To fully initiate testing, follow the above up with the below:

```
cartesi run
```

**Send test inputs**

On another terminal window, type:

```
cartesi send generic
```

Then, send a string encoding as follows:

```
{“type”:”instant”,”message”:”sample message”,”target”:”*”}
```

The field marked “type” can be filled with one of two values either ‘instant’ or ‘proof’

The target field for the destination of the message can be a wallet address or * for broadcasts to everyone who subscribes to the channel.

Once you are ready to deploy you can generate a container with the Dockerfile inside the cron-job folder and deploy it to [fly.io](https://fly.io/docs/launch/deploy/)

[Here’s](https://www.youtube.com/watch?v=SO-xhHT85Bk) a demo video showing the ins and outs of how Cartesi DApps can integrate Push Notifications using [Cartesi Push Notification Server](https://github.com/Mugen-Builders/push-cartesi/blob/main/README.md).

This integration is being tested out with [Comet](https://x.com/Comet_ing/status/1837041254166589535) - a Cartesi DApp.

Got any questions? Feel free to drop us a line on our [Discord](http://discord.gg/pushprotocol); our team will help you.