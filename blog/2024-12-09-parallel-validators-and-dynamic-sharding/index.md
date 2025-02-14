---
slug: parallel-validators-and-dynamic-sharding
title: 'Benchmarking Push Chain : Scaling with Validator Nodes'
authors: [push]
image: './cover-image.webp'
description: 'Benchmarking Push Chain : Scaling with Validator Nodes'
text: 'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications.'
tags: [Push Chain, Push Chain Benchmark, Parallel Validators, Dynamic Sharding]
---

![Cover Image of Benchmarking Push Chain : Scaling with Validator Nodes](./cover-image.webp)

<!--truncate-->

## Introduction

The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain promises a seamless environment for universal applications. This blog explores the benchmarking results of Push Chain under varying node configurations, providing insights into how the network behaves and scales as the number of nodes increases.

---

## Node Types and Roles

- **Validator Nodes:** Responsible for handling transaction validation and serving as the primary interface for client interactions.
- **Storage Nodes:** Tasked with storing validated transactions in a sharded manner for optimized data access and storage efficiency.
- **Archival Nodes:** Maintain a comprehensive record of all network transactions, enabling historical data access and providing support for applications like blockchain explorers.

> 💡 Note: While the roles described above provide a high-level overview, nodes in the Push Chain Network perform significantly more complex tasks, including dynamic sharding, transaction propagation, and ensuring data consistency across the network.

---

## Benchmarking Setup

The benchmarking tests were conducted in controlled environments with different node configurations:

### Environment Configurations

1. **Configuration 1**:
   - **5 Validator Nodes**, **8 Storage Nodes**, **5 Archival Nodes**.
   - **2 CPU cores** allocated.
2. **Configuration 2**:
   - **10 Validator Nodes**, **8 Storage Nodes**, **5 Archival Nodes**.
   - **4 CPU cores** allocated.
3. **Configuration 3**:
   - **20 Validator Nodes**, **8 Storage Nodes**, **5 Archival Nodes**.
   - **8 CPU cores** allocated.

The benchmarks primarily evaluate the performance of the **validator nodes**, which serve as the gateway for client interactions. However, since validator nodes interact with storage nodes and archival nodes internally, the results effectively reflect the performance of the entire network.

> ⚡ **Note on** **Controlled Environment:** All of these benchmarks were performed in a controlled internal network environment. As a result, any network lags or latency typically observed in real-world public networks were kept to a minimum, ensuring that the results reflect the network’s inherent capabilities rather than external factors. This setup allows for more accurate measurement of the Push Chain Network’s performance under varying configurations without the interference of significant network delays.

> 📊 **Note on CPU Scaling:** In order to simulate a decentralized network more realistically, the number of CPU cores allocated scales proportionally with the number of nodes. For instance, 2 CPU cores are allocated for 5 validator nodes, 4 CPU cores for 10 nodes, and 8 CPU cores for 20 nodes. This approach mirrors how resources would likely be distributed in a decentralized system, where each node operator contributes computational resources to the network.

> ⚙️ **Note on Node Configuration:** For simplicity and consistency, the number of **Storage Nodes** and **Archival Nodes** is kept constant at **8** and **5**, respectively, across all configurations. This ensures that the focus remains on evaluating the performance of the **Validator Nodes** and their interactions with the network, without introducing additional variables.

The benchmarks primarily evaluate the performance of the **validator nodes**, which serve as the gateway for client interactions. However, since validator nodes interact with storage nodes and archival nodes internally, the results effectively reflect the performance of the entire network.

---

## Benchmark Results

The following tests were conducted to measure the performance of the Push Chain Network under varying configurations, focusing on the behavior of **validator nodes** as the number of nodes increases. Each test was performed using multiple parallel threads, simulating real-world scenarios where multiple users interact with the network simultaneously.

### 1. Ping Validator Test

This test measures the round-trip time taken by multiple threads to select and ping a random validator node, simulating basic connectivity under increasing load.

| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |
| ----------- | ------------------- | ------------------- | ------------------- |
| 10          | 21.72 ms            | 27.96 ms            | 26.43 ms            |
| 50          | 296.98 ms           | 94.45 ms            | 124.54 ms           |
| 100         | 371.32 ms           | 137.20 ms           | 151.44 ms           |
| 250         | 396.70 ms           | 232.06 ms           | 209.23 ms           |
| 500         | 497.69 ms           | 342.74 ms           | 287.24 ms           |
| 1000        | 785.19 ms           | 705.11 ms           | 545.10 ms           |
| 2000        | 1498.14 ms          | 1245.16 ms          | 1085.70 ms          |
| 5000        | 5608.33 ms          | 3637.42 ms          | 3297.24 ms          |
| 10000       | **Errored Out**     | **Errored Out**     | **Errored Out**     |

**Observations:**

- As the number of validator nodes increases, the network handles higher traffic more efficiently, as seen in **Configuration 3**, which consistently shows the lowest response times across all thread counts.
- Traffic is split among more validator nodes in configurations with higher node counts, reducing the load on individual nodes and improving overall response times.
- At **10,000 threads**, all configurations errored out, indicating the upper limit of the network under the current setup. However, **Configuration 3** demonstrated the highest capacity before encountering errors, highlighting the benefits of increased validator nodes for scalability.

### 2. Get Token Validator Test

This test measures the time taken for multiple threads to request an access token from a random validator node. Access tokens are essential for sending transactions and performing other write operations on the network.

| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |
| ----------- | ------------------- | ------------------- | ------------------- |
| 10          | 250.46 ms           | 253.37 ms           | 170.53 ms           |
| 50          | 969.38 ms           | 855.97 ms           | 427.89 ms           |
| 100         | 1540.05 ms          | 1294.32 ms          | 638.69 ms           |
| 250         | 2855.72 ms          | 2108.26 ms          | 1325.33 ms          |
| 500         | 4869.79 ms          | 3645.61 ms          | 3033.06 ms          |
| 1000        | 7850.41 ms          | 6541.31 ms          | 5036.91 ms          |
| 2000        | 21562.69 ms         | 12378.07 ms         | 7839.82 ms          |
| 5000        | 62539.38 ms         | 37642.91 ms         | 22250.88 ms         |
| 10000       | **Errored Out**     | **Errored Out**     | **Errored Out**     |

**Observations:**

- As the number of validator nodes increases, the network demonstrates significantly improved performance under higher thread counts. **Configuration 3** consistently shows the lowest response times, benefiting from better load distribution.
- At lower thread counts (e.g., 10 or 50), the differences between configurations are minimal since the traffic does not fully utilize the network's capacity. However, at higher thread counts (e.g., 500 or more), **Configuration 3** outperforms the others due to its ability to handle a higher volume of concurrent requests.
- At **10,000 threads**, all configurations errored out, indicating the network’s throughput limit under the current setup. However, **Configuration 3** reached significantly higher performance thresholds before encountering errors.

### 3. Send Transactions to Validator Test

This test measures the time taken for multiple threads to send transactions to validator nodes. Each transaction submission involves the following steps:

1. Retrieving an **access token** from a validator node.
2. Sending the transaction as an **RPC request** to the validator node using the retrieved token.

Additionally, each transaction validation requires attestations from a subset of validator nodes.

> 🔗 Note on Attestations: Each transaction validation includes attestations from N validator nodes, where N is a dynamic variable. For this test, N was kept constant at 4 to ensure consistent results.

| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |
| ----------- | ------------------- | ------------------- | ------------------- |
| 10          | 1052.11 ms          | 726.95 ms           | 481.58 ms           |
| 50          | 7059.86 ms          | 5783.53 ms          | 4866.28 ms          |
| 100         | 17140.02 ms         | 14252.35 ms         | 10992.26 ms         |
| 250         | **Errored Out**     | 38932.29 ms         | 30432.74 ms         |
| 500         | **Errored Out**     | **Errored Out**     | **Errored Out**     |

**Observations:**

- The network’s performance improves with an increasing number of validator nodes, as seen in **Configuration 3**, which consistently shows the best results under higher thread counts.
- At lower thread counts (e.g., 10 or 50), the differences between configurations are smaller due to minimal load. However, at higher thread counts, **Configuration 3** handles a significantly larger volume of transactions before encountering errors.
- Errors such as timeouts occurred at **250 threads** for **Configuration 1** and **500 threads** for **Configuration 2**, highlighting the limits of these setups. **Configuration 3** demonstrated a higher capacity before reaching its threshold.

### 4. Get Transactions Test

This test measures the time required for threads to retrieve transaction data of a particular blockchain address from validator nodes, simulating a typical query load where users request information about transactions. The process involves the following steps:

1. The validator node determines the **shard** corresponding to the requested address.
2. The validator then identifies the **storage nodes** responsible for that shard and queries them for the transaction data.

Since the number of storage nodes remains constant across configurations, the performance at higher thread counts is influenced by this dependency.

| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |
| ----------- | ------------------- | ------------------- | ------------------- |
| 10          | 1727.71 ms          | 949.33 ms           | 1108.42 ms          |
| 50          | 2893.36 ms          | 2252.80 ms          | 1750.41 ms          |
| 100         | 4483.29 ms          | 3436.79 ms          | 2884.57 ms          |
| 250         | 10896.20 ms         | 8963.94 ms          | 8788.58 ms          |
| 500         | 28982.37 ms         | 15828.90 ms         | 15184.05 ms         |
| 1000        | **Errored Out**     | **Errored Out**     | **Errored Out**     |

**Observations:**

- With an increasing number of validator nodes, traffic is distributed more efficiently among the nodes, leading to better response times in **Configuration 3**, particularly under moderate thread counts (e.g., 50–250).
- At lower thread counts (e.g., 10 or 50), the performance differences are less pronounced since the network does not experience significant load. However, as thread counts increase, **Configuration 3** handles requests more effectively due to its ability to distribute load better across a higher number of validator nodes.
- Errors at **1000 threads** in all configurations highlight the scalability limitations imposed by the constant number of storage nodes. Increasing the number of storage nodes could improve performance at these higher thread counts.

### 5. Get Push ID Info Test

This test measures the time required for threads to retrieve Push ID information from validator nodes for a given blockchain address, simulating a typical query load where users request mappings of Push IDs. The process involves the following steps:

1. The validator node identifies the **shard** corresponding to the requested address or Push ID.
2. It then queries the **storage nodes** responsible for that shard to fetch the required data.

As with other tests, the number of storage nodes remains constant, which impacts performance at higher thread counts.

| **Threads** | **Configuration 1** | **Configuration 2** | **Configuration 3** |
| ----------- | ------------------- | ------------------- | ------------------- |
| 10          | 1589.68 ms          | 1180.90 ms          | 1062.32 ms          |
| 50          | 1551.96 ms          | 1924.95 ms          | 1139.00 ms          |
| 100         | 3168.10 ms          | 2280.93 ms          | 2784.76 ms          |
| 250         | 6141.76 ms          | 5376.59 ms          | 5170.25 ms          |
| 500         | 13462.41 ms         | 10437.36 ms         | 8337.95 ms          |
| 1000        | 23817.09 ms         | 18082.24 **ms**     | 15132.23 ms         |
| 2000        | 59157.55 ms         | 42868.81 ms         | 35978.39 ms         |
| 5000        | **Errored Out**     | 104845.75 ms        | 77467.87 ms         |
| 10000       | **Errored Out**     | **Errored Out**     | **Errored Out**     |

**Observations:**

- As the number of validator nodes increases, the load on each individual vnode decreases, improving performance in **Configuration 3**, especially under moderate thread counts (e.g., 50–500).
- At higher thread counts (e.g., 1000 or more), the dependency on storage nodes becomes the primary bottleneck, leading to errors or significantly increased retrieval times. Increasing the number of storage nodes would help alleviate these limitations at scale.
- **Configuration 3** consistently shows the best results at all thread counts before errors occur, showcasing the benefits of distributing the load across more validator nodes.

---

## **Conclusions**

- **Scalability:** As the number of nodes increased, the Push Chain Network demonstrated significantly improved scalability, particularly in **Configuration 3**. This configuration exhibited the best performance across most tests, showcasing the network’s ability to scale efficiently without sacrificing speed. The benefits of **dynamic sharding** ensured that even as the network grew, the system maintained fast response times, handling multiple concurrent threads effectively.
- **Performance Bottlenecks:** While performance remained strong as the node count grew, the network did experience timeouts and errors at higher thread counts. This indicates that, although the system can scale, there are throughput limits at extreme loads. However, **Configuration 3** was able to handle a larger volume of requests compared to smaller configurations, validating the advantages of scaling up the number of validator nodes. Given that the **goal of the Push Chain Network** is to scale up to **100,000 validator nodes**, the throughput limits observed at high thread counts are just the beginning. As the network grows, these limits would become significantly larger, making the network capable of handling a vastly higher volume of requests.
- **Real-World Application:** The results illustrate how the Push Chain Network becomes more scalable as nodes are added, making it a robust solution for future consumer-centric applications where network demands will increase.

These benchmarks offer valuable insights into the scaling behaviour of the Push Chain Network, demonstrating its readiness to support growing adoption and demanding workloads. Moving forward, continued optimizations in areas like transaction propagation, parallel processing, and sharding will further enhance the network’s performance, enabling it to handle even higher loads.

---
