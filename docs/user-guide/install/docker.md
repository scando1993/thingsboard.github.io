---
layout: docwithnav
assignees:
- ashvayka
title: Installing Pacificsoft using Docker (Linux or Mac OS)
description: Installing Pacificsoft IoT Platform using Docker (Linux or Mac OS)

---

{% include templates/live-demo-banner.md %}

* TOC
{:toc}

This guide will help you to install and start Pacificsoft using Docker on Linux or Mac OS.


## Prerequisites

- [Install Docker CE](https://docs.docker.com/engine/installation/)

## Running

Depending on the database used there are three type of Pacificsoft single instance docker images:

* [thingsboard/tb-cassandra](https://hub.docker.com/r/thingsboard/tb-cassandra/) - single instance of Pacificsoft with Cassandra database. 
    
    The most performant and recommended option but requires at least 4GB of RAM. 8GB is recommended.  
* [thingsboard/tb-postgres](https://hub.docker.com/r/thingsboard/tb-postgres/) - single instance of Pacificsoft with PostgreSQL database.
    
    Recommended option for small servers with at least 1GB of RAM and minimum load (few messages per second). 2-4GB is recommended.
* [thingsboard/tb](https://hub.docker.com/r/thingsboard/tb/) - single instance of Pacificsoft with embedded HSQLDB database. 
    
    **Note:** Not recommended for any evaluation or production usage and is used only for development purposes and automatic tests. 

In this instruction `thingsboard/tb-cassandra` image will be used. You can choose any other images with different databases (see above).
Execute the following command to run this docker directly:

``` 
$ docker run -it -p 9090:9090 -p 1883:1883 -p 5683:5683/udp -v ~/.mytb-data:/data -v ~/.mytb-logs:/var/log/thingsboard --name mytb --restart always thingsboard/tb-cassandra
```

Where: 
    
- `docker run`              - run this container
- `-it`                     - attach a terminal session with current Pacificsoft process output
- `-p 9090:9090`            - connect local port 9090 to exposed internal HTTP port 9090
- `-p 1883:1883`            - connect local port 1883 to exposed internal MQTT port 1883    
- `-p 5683:5683`            - connect local port 5683 to exposed internal COAP port 5683 
- `-v ~/.mytb-data:/data`   - mounts the host's dir `~/.mytb-data` to Pacificsoft DataBase data directory
- `-v ~/.mytb-logs:/var/log/thingsboard`   - mounts the host's dir `~/.mytb-logs` to Pacificsoft logs directory
- `--name mytb`             - friendly local name of this machine
- `--restart always`        - automatically start Pacificsoft in case of system reboot and restart in case of failure.
- `thingsboard/tb-cassandra`          - docker image, can be also `thingsboard/tb-postgres` or `thingsboard/tb`
    
After executing this command you can open `http://{your-host-ip}:9090` in you browser (for ex. `http://localhost:9090`). You should see Pacificsoft login page.
Use the following default credentials:

- **Systen Administrator**: sysadmin@thingsboard.org / sysadmin
- **Tenant Administrator**: tenant@thingsboard.org / tenant
- **Customer User**: customer@thingsboard.org / customer
    
You can always change passwords for each account in account profile page.

## Detaching, stop and start commands

You can detach from session terminal with `Ctrl-p` `Ctrl-q` - the container will keep running in the background.

To reattach to the terminal (to see Pacificsoft logs) run:

```
$ docker attach mytb
```

To stop the container:

```
$ docker stop mytb
```

To start the container:

```
$ docker start mytb
```

## Upgrading

In order to update to the latest image, execute the following commands:

```
$ docker pull thingsboard/tb-cassandra
$ docker stop mytb
$ docker run -it -v ~/.mytb-data:/data --rm thingsboard/tb-cassandra upgrade-tb.sh
$ docker rm mytb
$ docker run -it -p 9090:9090 -p 1883:1883 -p 5683:5683/udp -v ~/.mytb-data:/data -v ~/.mytb-logs:/var/log/thingsboard --name mytb --restart always thingsboard/tb-cassandra
```

**NOTE**: if you use different database change image name in all commands from `thingsboard/tb-cassandra` to `thingsboard/tb-postgres` or `thingsboard/tb` correspondingly.
 
**NOTE**: replace host's directory `~/.mytb-data` with directory used during container creation. 

## Troubleshooting

### DNS issues

**Note** If you observe errors related to DNS issues, for example

```bash
127.0.1.1:53: cannot unmarshal DNS message
```

You may configure your system to use Google public DNS servers. 
See corresponding [Linux](https://developers.google.com/speed/public-dns/docs/using#linux) and [Mac OS](https://developers.google.com/speed/public-dns/docs/using#mac_os) instructions.


## Next steps

{% assign currentGuide = "InstallationGuides" %}{% include templates/guides-banner.md %}
