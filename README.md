# What is this?

This is a basic project that demonstrates how to quickly get started developing a HipChat integration using [ac-koa-hipchat](https://bitbucket.org/rbergman/ac-koa-hipchat).

It uses a basic [Vagrant](https://www.vagrantup.com) configuration to provide one option for quickly getting started with a basic setup using the following dependencies:

* Node.js 0.11.13
* Redis
* MongoDB
* ngrok
* nodemon
* a simple example addon

# How do I use it?

Make sure that you have both [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads) installed, then start by cloning this project from git:

```
git clone https://bitbucket.org/rbergman/ac-koa-hipchat-vagrant hipchat-example
```

Edit the `package.json` file and give your project unique name and author fields, at least.

You'll also need to install [Vagrant](https://www.vagrantup.com).  When that's done, run the following commands:

```
> cd /path/to/hipchat-example
> vagrant up
# a few minutes later....
> vagrant ssh
# ...
Last login: Tue Sep  9 06:53:21 2014 from 10.0.2.2

Tunnel established at https://xxxxxxxx.ngrok.com

Run 'cd project && npm run web-dev' to start your add-on.

$ cd project
$ npm run web-dev
info: Atlassian Connect add-on started at https://xxxxxxxx.ngrok.com
```

You should now have an installable HipChat integration running at some unique url, like `https://xxxxxxxx.ngrok.com`, where the `xxxxxxxx` value will be a unique id for your server.

The `project` directory in /home/vagrant in the guest VM is a share that mounts the cloned git repository on your host OS.  You can do your development either in the VM or, more likely, using your favorite editor or IDE running in the host OS.

Now, to install the add-on at hipchat.com, see the instructions [here](https://bitbucket.org/rbergman/ac-koa-hipchat/src/master/README.md), starting with the section titled "Manually installing the add-on using HipChat's admin UI".  The remainder of that document will also be useful for learning how to modify the starter add-on included with this project.