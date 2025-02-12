---
slug: introducing-push-protocol-v1-5
title: Introducing Push Protocol v1.5 🎊
authors: [push]
image: './cover-image.webp'
text: 'Push Protocol is elated to announce the successful completion of the security audit of our smart contracts v1.5 with Chainsafe.'
tags:
  [
    Web3,
    Blockchain Technology,
    Blockchain Development,
    Push Notification,
    Communication Tools,
  ]
---

![Cover image of Introducing Push Protocol v1.5 🎊](./cover-image.webp)

<!--truncate-->

<!--customheaderpoint-->

# We’re proud to announce ChainSafe has successfully completed its audit of Push Smart Contracts v1.5! Here’s what to expect from the update.<br/>

Push Protocol is elated to announce the successful completion of the [security audit of our smart contracts v1.5](https://github.com/ChainSafe/audits/blob/main/EPNS/epns-protocol-11-2022.pdf) with Chainsafe.

The completion of this audit was one of the most significant roadmap items for this year. We couldn’t be happier to share with you all that our version 1.5 of Core and Communicator smart contracts have been successfully audited by Chainsafe.

Our [initial plan](https://medium.com/push-protocol/epns-contract-v2-features-e7887fac72a6) was to release Push v2 all at once in 2022. However, we decided to split up the upgrade into v1.5 and v2 in order to ensure adequate time for development, testing, and auditing. The decision allowed us to drive forward with this launch of v1.5 while continuing to build v2

Version 1.5 of Push smart contracts includes imperative functionalities that will provide better features to users and also improve the overall utility of the PUSH token. Below, we recap six of the most critical new functionalities of the Push Core and Communicator smart contracts in v1.5.

Let’s dive in!

<center><b>.  .  .</b></center>

## 1) Enhancing the PUSH token utility through channel creation

One of the most significant modifications in v1.5 of the Push smart contract can be found in the channel creation procedure. In v1 of the core contract design, channel creators were required to deposit DAI to launch a channel. In v1.5, the protocol removes the need to deposit DAI. <b>Instead, all channels will now be created using PUSH</b>.

Additionally, v1.5 of Push smart contracts will also deprecate the use of AAVE, which was previously used to deposit DAI tokens and earn interests.

All crucial transactions of core smart contracts like <i>channel creations, channel reactivation or deactivation, and channel details modifications</i> will require PUSH with the launch of v1.5.

## 2) Incentivizing the network with the PUSH Protocol Fee Pool

Version 1.5 of Push smart contracts will introduce the concept of <b>Protocol Fee Pool</b>. So, what exactly is a Protocol Fee Pool?

The protocol fee is a small fee amount deducted by the core smart contract for any imperative transaction like channel creation, channel reactivation, channel detail modification, and others.

As of now, the protocol fee is set to be equal to <b>10 PUSH tokens</b>. This value, however, can be changed by the community later using on-chain governance.

<b>Note for Channel Creators:</b>

It must be noted that this is not an additional fee that is charged on top of channel creation fees. Instead, the protocol fee is simply deducted from the same amount that a channel creator chooses to stake in the protocol. For example, if you chose to stake 50 PUSH during channel creation, 10 of those 50 PUSH tokens go into Protocol Fee Pool, while the remaining goes into Channel Pool Funds that are claimable by channel owners anytime they choose to deactivate their channel.

The Protocol Fee Pool is going to play an imperative role in the incentivization mechanism of the core smart contracts, which will allow PUSH holders and users of the protocol to also earn incentives from the protocol in the form of PUSH.

Since the incentives will be directly tied to the protocol’s fee pool, this would mean that the more the protocol expands its boundaries, the better the incentives for users that they can claim from the contracts.

## 3) Enabling more flexibility and customization with time-bound channels

With this new version of smart contracts, v1.5 will introduce another amazing feature that allows users to create time-bound channels.<b>Time-bound channels</b> are the ones that can be created for a specific duration of time and can easily be removed once the duration is over.

Diving a bit deeper into this function: while the underlying channel creation procedure is similar, this feature allows users to pass an additional parameter — the date of expiry of the channel — to the already existing channel creation function. This is what indicates that a time-bound channel with a predefined expiration date is to be created. Once the channel’s duration is over, the channel creator can destroy the channel and get the staked tokens back.

Finally, the original creator can recreate the channel using the same address after destroying the previous time-bound channel. This was not possible till now with permanent channels.

## 4) Allowing for upgrades and adjustments with channel edit features

V1.5 brings with it a much-awaited feature: the ability to modify your channel details! Descriptions, logo, information, etc.

While editing channels is a simple feature, there were a specific set of reasons why this wasn’t made available until v1.5.

Ideally, modifying channel details repeatedly is not a behaviour that is encouraged. Editing and modifying channel details could allow a malicious channel owner to update details and confuse subscribers, impersonating important DeFi or governance channels, for example.

However, since this feature was an important one for the community and users, we included this feature in v1.5 of the smart contracts along with the crucial steps to avoid the above-mentioned scenario.

<b>💰 Channel Edit Fees 💰:</b>

Editing channel details requires fees to be deposited. This fee shall keep increasing if the channel owner repeatedly updates their channel name, logo, description, etc.

<b>⚠️ Warning Sign ⚠️:</b>

Whenever a channel owner modifies any specific detail about their channel on the protocol, the channel shall appear with an additional note/warning in the dApp UI. This note will inform the rest of the users as well as subscribers about the channel’s old name or description.

## 5) Enabling notifications using The Graph subgraph

Push has developed an in-house helper function specifically for The Graph protocol that allows you to read events from the subgraph and define notifications accordingly. Once defined, they will be stored on the Subgraph in a “long string” format.

This function shall simply allow users to pass subGraph data, in the form of bytes, which is basically a combination of the Subgraph ID and Poll Interval. It emits out the event with the msg.sender and the bytes value.

The function shall only be accessible by the activated channels in the protocol.

## 6) Including of EIP-1271 in the Push Communicator contract

Alright, now that we have talked about quite a few new features in the Push Core smart contracts, it’s time to discuss the Push Communicator smart contract.

Although the communicator contract doesn’t have a lot of new features in this version, it has one major feature worth discussing. The v1.5 of Push Communicator smart contract implements <b>EIP-1271</b>.

<b>What is EIP-1271?</b>

In very simpler terms, EIP 1271 provides a standard to verify signatures that come from the account which is a smart contract address instead of an EOA address.

While externally-owned accounts (EOA) can easily sign messages with their associated private keys, smart contracts can’t do the same (since they don’t have any private keys). However, with the help of the EIP-1271 standard, we have an effective mechanism by which a contract can indicate whether a given signature is valid or not on its behalf. Read more about EIP-1271 [here](https://eips.ethereum.org/EIPS/eip-1271).

Some of the crucial features of the Push Protocol communicator contract are now carried out off-chain. For example, opting in or opting out of a channel or sending notifications are now fairly easy procedures as all you need to do is sign a message using your EOA.

However, now with EIP-1271 implementation in the communicator contract, it shall be fairly simple for wallets like Argent wallet, multi-sigs like Gnosis safe, or smart contracts to validate signatures on their behalf and use these features as well.

<b>Preparing for the future with Push v1.5</b>

A lot of development has gone into reaching this moment with Push v1.5. We’re thrilled by all the support from the community. V1.5 is one of the most important upgrades the protocol has undergone. Updates to channel creation and fees create more nuanced utility for the PUSH token and ecosystem. Time-bound and editable channels deliver much-requested customization to users. The integration with The Graph and EIP-1271 demonstrate Push’s commitment to best-in-class technology standards and partners. We’re thrilled for the Push community to welcome v1.5 soon, while we continue to build out Push v2 and deliver that to the community in the near future!

<b>Note:</b>

The Push Core and Communicator smart contracts will be upgraded to version 1.5 by January 2023. All the above-mentioned modifications and new features will come into effect post the upgrade.
