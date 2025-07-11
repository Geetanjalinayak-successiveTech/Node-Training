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
