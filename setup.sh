#!/bin/bash
echo "Hello VYCanisMajoris"
echo "Setting up your developer enviornment"
sudo apt install curl
echo "curl installed"
curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
echo "installed nodejs"
sudo npm install -g @angular/cli
echo "installed angular cli"
sudo apt install git
git --version
git config --global user.name "Karan Galgat"
git config --global user.email "kgalgat117@gmail.com"
echo "installed git"
ssh-keygen -t rsa -b 4096 -C "kgalgat117@gmail.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
sudo apt-get install xclip
xclip -sel clip < ~/.ssh/id_rsa.pub
echo "paste the ssh to your github account"
echo "finish setting up ssh for github"
sudo snap install --classic heroku
echo "installed heroku cli"
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
echo "installed google chrome"
sudo apt install python3-pip
pip3 --version
echo "installed pip3"
sudo apt install python-pip
pip --version
echo "installed pip"
pip3 install awsebcli --upgrade --user
export PATH=/usr/local/bin:$PATH
eb --version
echo "installed aws eb cli"
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt install code
echo "installed visual code studio"
sudo npm install -g nodemon
sudo npm install pm2 -g
