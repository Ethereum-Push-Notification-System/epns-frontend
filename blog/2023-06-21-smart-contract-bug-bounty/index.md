---
slug: 100-000-of-push-x-immune-fi-bug-bounty-program-goes-live
title: '$100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲'
authors: [push]
image: './cover-image.webp'
text: "Are you a skilled security researchers looking for an exciting challenge and the opportunity to earn big? Look no further!
We are thrilled to announce the launch of the Push’s collaborative Bug Bounty Program with Immunefi and calling all hackers to participate!"
tags: [Push Protocol, Web3, Bounty Program, Immuenfi, Bug bounty]
---

![Cover image of $100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲](./cover-image.webp)

<!--truncate-->

<!--customheaderpoint-->

# Push Smart Contract v2 Bug Bounty Program

Are you a skilled security researchers looking for an exciting challenge and the opportunity to earn big? Look no further!

We are thrilled to announce the launch of the Push’s collaborative Bug Bounty Program with [Immunefi](https://immunefi.com/) and calling all hackers to participate!

[See the full Immunefi report👉 here.](https://immunefi.com/bounty/pushprotocol/)

Your objective will be to identify and report vulnerabilities in Push’s smart contracts V2, read more about [Pushv2](https://medium.com/push-protocol/push-protocol-v2-fee-pool-incentivized-chats-launching-in-june-959a3eab4966). It’s your chance to contribute to the security of the Push ecosystem while being rewarded for your efforts.

Time to sharpen your hacking tools and join us in this exciting adventure!

## Exciting Rewards are Waiting for You

Are you up for the challenge? This is your chance to showcase your research and hacking skills and earn exciting rewards. The Push x ImmuneFi Bug Bounty Program offers payouts based on the severity of the identified vulnerabilities.

The rewards by threat/severity level are as follows:

🔴 <b>Critical Severity Level:</b> USD 80,000 up to USD 100,000

🟠 <b>High Severity Level:</b> USD 10,000 up to USD 50,000

🟡 <b>Medium Severity Level:</b> USD 1,500

⚪ <b>Low Severity Level:</b> USD 1,000

## Assets in Scope

There are 5 Push smart contract assets you can identify and report potential vulnerabilities for. To aid you in your bug-hunting journey, we have made all of these assets easily accessible right here:

[PushCoreV2 Github](https://github.com/push-protocol/push-smart-contracts/blob/bug_bounty_dev/contracts/EPNSCore/PushCoreV2.sol) 👉Smart Contract — PushCoreV2.sol

[CoreStorageV2 Github](https://github.com/push-protocol/push-smart-contracts/blob/bug_bounty_dev/contracts/EPNSCore/EPNSCoreStorageV2.sol)👉Smart Contract — EPNSCoreStorageV2.sol

[CoreStorageV1_5 Github](https://github.com/push-protocol/push-smart-contracts/blob/bug_bounty_dev/contracts/EPNSCore/EPNSCoreStorageV1_5.sol)👉Smart Contract — EPNSCoreStorageV1_5.sol

[PushCommV2 Github](https://github.com/push-protocol/push-smart-contracts/blob/bug_bounty_dev/contracts/EPNSComm/PushCommV2.sol)👉Smart Contract — PushCommV2.sol

[CommStorageV1_5.sol](https://github.com/push-protocol/push-smart-contracts/blob/bug_bounty_dev/contracts/EPNSComm/EPNSCommStorageV1_5.sol)👉Smart Contract — EPNSCommStorageV1_5.sol

## Developer Resources

1. All Push Protocol code can also [be found at this page here](https://github.com/push-protocol/push-smart-contracts/blob/bug_bounty_dev/contracts/EPNSComm/EPNSCommStorageV1_5.sol).
2. Deep dive into [Push v2 contract features at this page here](https://docs.google.com/document/d/1GZsrj1XiiwFCPv453Ct-TziZyoLuwLjCdQuaF1AJ-V8/edit).
3. Join our Discord for technical support https://discord.com/invite/pushprotocol
4. Additional resources to learn more about Push Contracts: [Push Smart Contracts](https://comms.push.org/docs/notifications/push-smart-contracts/ 'Guide to Push smart contracts')

## Impacts in Scope

You’re now ready to start some bug-hunting! But before you start, take a look at the impacts considered in the scope for the Bounty Program and the severity level of each impact:

### Critical Security Level:

- Direct theft of any user funds, whether at-rest or in-motion, other than unclaimed yield
- Permanent freezing of funds
- Drain of Funds from contract
- Loss of funds due to bridging of tokens

### High Security Level:

- Theft of unclaimed yield
- Permanent freezing of unclaimed yield
- Temporary freezing of funds
- User/Stakers being able to harvest more tokens than they should be able to.
- User/Stakers being able to harvest without staking for at least 1 complete epoch.

### Medium Security Level:

- Smart contract unable to operate due to lack of token funds
- Griefing (e.g. no profit motive for an attacker, but damage to the users or the protocol)
- Unbounded gas consumption
- Unfair reward distribution between users with equal staking details like token weight, stake duration etc.

### Low Security Level:

- Contract fails to deliver promised returns, but doesn’t lose value

All other impacts are not considered as in-scope, even if they affect something within the assets listed in the scope table. You can find all other details about the severity levels, bug impacts, program guidelines, and [rules in the report provided by Immunefi](https://immunefi.com/bounty/pushprotocol/).

Hackers and devs, it’s your time to shine! Join us in securing the Push ecosystem and earn big for your valuable contributions. We look forward to seeing what you uncover.
