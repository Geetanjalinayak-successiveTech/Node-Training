# Backend Training Repository

Welcome to the Backend Training repository! This guide will help you set up your development environment with Node.js LTS and get started with backend development.

## Node.js LTS Installation Guide

### Step 1: Update Package Lists

First, update your system's package lists to ensure you have the latest package information:

```bash
sudo apt update
```

### Step 2: Install Required Dependencies

Install curl, which is needed to download the Node.js setup script:

```bash
sudo apt install curl
```

### Step 3: Add NodeSource Repository

Download and execute the NodeSource setup script to add the official Node.js LTS repository:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

**What this command does:**

- `curl -fsSL`: Downloads the script silently with follow redirects
- `sudo -E bash -`: Executes the script with elevated privileges while preserving environment variables

### Step 4: Install Node.js and npm

After the repository is added, install Node.js and npm:

```bash
sudo apt install nodejs
```

**Note:** This command installs both Node.js and npm (Node Package Manager) automatically.

### Step 5: Verify Installation

Check that Node.js and npm are installed correctly:

```bash
node -v
npm -v
```

You should see version numbers for both commands, indicating successful installation.

## Expected Output

After successful installation, you should see output similar to:

```
$ node -v
v22.16.0


$ npm -v
10.9.2

```

## What is Node.js LTS?

**LTS (Long Term Support)** versions are:

- Stable and reliable releases
- Supported for 30 months from release date
- Recommended for production environments
- Updated with security patches and bug fixes

## Common Troubleshooting

### Permission Issues

If you encounter permission errors when installing global packages:

```bash

mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Repository Issues

If the NodeSource repository fails to add:

1. Remove any existing Node.js installations:

   ```bash
   sudo apt remove nodejs npm
   ```

2. Clean the package cache:

   ```bash
   sudo apt autoremove
   sudo apt autoclean
   ```

3. Retry the installation steps

## Next Steps

Now that you have Node.js installed, you can:

1. **Create your first Node.js project:**

   ```bash
   mkdir my-first-node-app
   cd my-first-node-app
   npm init -y
   ```

2. **Install packages:**
   ```bash
   npm install express
   ```



   # Postman Installation 

This guide provides instructions for installing the latest stable version of Postman on Linux systems.



##  Installation Method 

### Prerequisites
- Ubuntu/Debian-based Linux distribution
- Terminal access with sudo privileges

### Installation Steps

1. **Open a terminal**
   ```bash
   # Use Ctrl+Alt+T or search for "Terminal" in your applications
   ```

2. **Add the Postman repository**
   ```bash
   sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
   ```

3. **Import the Postman GPG Key**
   ```bash
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
   ```

4. **Update the package list**
   ```bash
   sudo apt-get update
   ```

5. **Install Postman**
   ```bash
   sudo apt-get install postman
   ```

