---
layout: docwithnav
assignees:
- ashvayka
title: Installing Pacificsoft on Raspberry Pi 3 Model B
description: Installing Pacificsoft IoT Platform on Raspberry Pi 3 Model B

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide describes how to install Pacificsoft on a Raspberry Pi 3 running Raspbian Jessie.

### Third-party components installation

#### Java

Pacificsoft service is running on Java 8. Oracle Java 8 is already pre-installed on Raspbian.
You can check java version using the following command

```bash
$ java -version
java version "1.8.0_65"
Java(TM) SE Runtime Environment (build 1.8.0_65-b17)
Java HotSpot(TM) Client VM (build 25.65-b01, mixed mode)
```

Any Java version higher than or equal to 1.8 is fine. 

#### External database installation

{% include templates/install-db.md %}

###### SQL Database: PostgreSQL

{% include templates/optional-db.md %}

Instructions listed below will help you to install PostgreSQL.

```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

{% include templates/postgres-post-install.md %}

{% include templates/create-tb-db.md %}

### Pacificsoft service installation

Download installation package or [build it from source](/docs/user-guide/install/building-from-source).

```bash
# Download the package
$ wget https://github.com/thingsboard/thingsboard/releases/download/v2.3.1/thingsboard-2.3.1.deb
# Install Pacificsoft as a service
$ sudo dpkg -i thingsboard-2.3.1.deb
# Update Pacificsoft memory usage and restrict it to 150MB in /etc/thingsboard/conf/thingsboard.conf
export JAVA_OPTS="$JAVA_OPTS -Dplatform=rpi -Xms256M -Xmx256M"
```

### Configure Pacificsoft to use PostgreSQL
 
Edit Pacificsoft configuration file 

```bash 
sudo nano /etc/thingsboard/conf/thingsboard.yml
```
{% include templates/disable-hsqldb.md %}

{% include templates/enable-postgresql.md %}

{% include templates/run-install.md %} 

{% include templates/start-service.md %}

**NOTE**: Please allow up to 2 minutes for the Web UI to start

### Troubleshooting

Pacificsoft logs are stored in the following directory:
 
```bash
/var/log/thingsboard
```

You can issue the following command in order to check if there are any errors on the backend side:
 
```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
