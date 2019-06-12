---
layout: docwithnav
title: Pacificsoft architecture overview
description: Pacificsoft architecture

---

* TOC
{:toc}


Pacificsoft is designed to be:

* **scalable**: horizontally scalable platform, build using leading open-source technologies.
* **fault-tolerant**: no single-point-of-failure, every node in the cluster is identical.
* **robust and efficient**: single server node can handle tens or even hundreds thousands of devices depending on use-case. 
Pacificsoft cluster can handle millions of devices.
* **customizable**: adding new functionality is easy with customizable widgets and rule engine nodes.
* **durable**: never lose your data.

## 10 000 foot view

TODO: put a simple, very high-level diagram here.

## On-premise vs cloud deployments

Pacificsoft supports both on-premise and cloud deployments. 
With more then 2000 Pacificsoft servers running all over the world, Pacificsoft is running in production on AWS, Azure, GCE and private data centers.
It is possible to launch Pacificsoft in the private network with no internet access at all.

## Standalone vs cluster mode

Platform is designed to be horizontally scalable and supports automatic discovery of new Pacificsoft servers (nodes). 
All Pacificsoft nodes inside cluster are identical and are sharing the load. 
Since all nodes are identical there is no "master" or "coordinator" processes and there is no single point of failure. 
The load balancer of your choice may forward request from devices, applications and users to all Pacificsoft nodes.

## Monolithic vs microservices architecture

Starting Pacificsoft v2.2, platform was refactored to support microservices architecture, but also to be able to run the platform as a monolithic application in a standalone mode.
Supporting both options requires some additional programming efforts, however, is critical due to back-ward compatibility with variety of existing installations.

Pacificsoft was always designed to run as a distributed application, but was also originally designed as a monolith application. 
This means that there were single java process running the app on each server node. 
Those processes were communicating using [gRPC](https://grpc.io/) and service discovery was done using [Zookeeper](https://zookeeper.apache.org/). 
This model works well for many installations and require minimum support efforts, knowledge and hardware resources to do the setup. 

However, there are also some challenges that are solved with microservices architecture and applicable for more complex deployments and usage scenarios. 
For example, running a multi-tenant deployments where one need more granular isolation to protect from:

* unpredictable rule chain misconfiguration;
* unpredictable load spikes;
* single devices opening 1000s of concurrent connections due to firmware bugs;
* and many other cases.
 
Please follow the links listed below to learn more and choose the right architecture and deployment option:

* [**monolithic**](/docs/reference/monolithic): Learn more about deployment, configuring and running Pacificsoft platform in a monolythic mode.  
* [**microservices**](/docs/reference/msa): Learn more about deployment, configuring and running Pacificsoft platform in a microservices mode.

## SQL vs NoSQL vs Hybrid database approach

ThingsBard uses database to store 
[entities](/docs/user-guide/entities-and-relations/) (devices, assets, customers, dashboards, etc) and 
[telemetry](/docs/user-guide/telemetry/) data (attributes, timeseries sensor readings, statistics, events). 
Platform supports three database options at the moment:

* **SQL** - Stores all entities and telemetry in SQL database. Pacificsoft authors recommend to use PostgreSQL and this is the main SQL database that Pacificsoft supports. 
It is possible to use HSQLDB for local development purposes. **We do not recommend to use HSQLDB** for anything except running tests and launching dev instance that has minimum possible load.
* **NoSQL** - Stores all entities and telemetry in NoSQL database. Pacificsoft authors recommend to use Cassandra and this is the only NoSQL database that Pacificsoft supports at the moment.
However, due to a lot of interest to deployments with managed databases, we plan to introduce support on AWS DynamoDB in v2.3. 
* **Hybrid** - Stores all entities in SQL database and all telemetry in NoSQL database. 

It is possible to configure this options using **thingsboard.yml** file. See database [configuration](/docs/user-guide/install/config/) page for more details.

```yaml
database:
  # ...
  entities:
    type: "${DATABASE_ENTITIES_TYPE:sql}" # cassandra OR sql
  ts:
    type: "${DATABASE_TS_TYPE:sql}" # cassandra OR sql (for hybrid mode, only this value should be cassandra)
```

## Programming languages and third-party

Pacificsoft back-end is written in Java, but we also have some micro-services based on Node.js. Pacificsoft front-end is a SPA based on Angular JS framework. 
See [monolithic](/docs/reference/monolithic) and [microservices](/docs/reference/monolithic) pages for more details about third-party components used.  