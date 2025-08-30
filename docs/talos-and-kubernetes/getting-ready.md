---
sidebar_position: 2
id: getting-ready
---

# Getting Ready

Before we dive in, we need to get some resources in place.

## Download Talos ISO

The perfect image for you depends on the environment you're deploying to.

The [Talos Linux Image Factory](https://factory.talos.dev/) provides a nice, step-by-step guide to help you choose the right image for your needs.

:::tip
If you are deploying to Proxmox, it could be nice to include the `qemu-guest-agent` package, when prompted, on the "System Extensions" section.
:::

Once you've selected the appropriate image, you can download it and proceed with the installation, so upload the image to your hypervisor, or use something like [Rufus](https://rufus.ie/) or [balenaEtcher](https://www.balena.io/etcher/).

## Download `talosctl` and `kubectl`

`talosctl` and `kubectl` are the cli tools that you'll use to manage your Talos cluster and Kubernetes resources, respectively. You can download them from the following locations:

- [`talosctl`](https://docs.siderolabs.com/omni/getting-started/how-to-install-talosctl)
- [`kubectl`](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

To run these tools, I used a separate VM, but you can run them on your local machine as well, just make sure you have connectivity to your Talos cluster.

You can verify that `talosctl` and `kubectl` are installed correctly by running the following commands:

```bash
talosctl version
kubectl version --client
```