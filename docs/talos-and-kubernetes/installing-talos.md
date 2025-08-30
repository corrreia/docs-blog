---
sidebar_position: 3
id: installing-talos
---

# Installing Talos

It's time to install Talos on your chosen infrastructure.

## Specs

I’m deploying Talos on Proxmox as a 5-node cluster (3 control planes + 2 workers). For HA, use at least 3 machines. Three control-plane nodes is the common production baseline.

With only 3 machines you are limited to 3 control plane nodes, that will also run your workloads. Your control plane will also work as worker nodes, which can lead to resource contention and impact the performance of your control plane components.

I will be using 5 machines in total (3 + 2), but this guide will also have instructions for deploying with 3 machines.

Here are the specs I will be using:

| Node          | CPU     | RAM | Disk | Number |
|---------------|---------|-----|------|--------|
| Control Plane | 2 vCPUs | 4GB | 40GB | 3      |
| Worker        | 4 vCPUs | 8GB | 120GB| 2      |

These specs should provide a good balance of performance and resource availability for a Talos cluster.

## IP Allocation

This is an important step in the setup process. 

Make sure you reserve a sizable range of IP addresses for your cluster nodes, ideally you should place them in a separate VLAN or subnet.

In my case, I created a new VLAN for my homelab and assigned a subnet of `10.10.0.0/24` to it.
I reserved `10.10.0.49` for the utility VM, `10.10.0.51` to `10.10.0.53` for the control plane nodes, and `10.10.0.54` to `10.10.0.55` for the worker nodes.
I also reserved `10.10.0.50` for the control plane VIP, and a range in the `10.10.0.60's` for future use.

I'm using static DHCP reservations to ensure that the VMs always receive the same IP addresses.

## Boot the machines

Set the boot order to the USB/ISO and boot from it. Simple as that.

The Talos OS will boot up and wait for some initial configuration. That is the next step.

## Generating the configuration files for Talos

Let's start by generating the secrets file, this file is responsible for holding the keys and certificates for the cluster.

On the machine where you have `talosctl` installed, run the following command:

1. **Generate the secrets file:**

```bash
talosctl gen secrets -o secrets.yaml
```

This generated the `secrets.yaml` file, which contains the necessary secrets for the cluster.

2. **Generate the configuration files:**

```bash
talosctl gen config name-of-cluster https://<ip-reserved-for-vip>:6443 \ 
  --with-secrets secrets.yaml \
  --install-disk /dev/sda \
  --output ./clusterconfig
```

This will:
- Generate the necessary configuration files for the cluster.
- Set the kubeconfig endpoint to the VIP (where the kubernetes api is accessible).
- Include the secrets in the configuration.
- Specify the installation disk for each node.
- Output the configuration files to the specified directory.

:::warning
This documentation is still a work in progress and may be updated with more information in the future.
:::