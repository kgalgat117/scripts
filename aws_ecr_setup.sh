curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
aws --version
aws configure
aws ecr get-login-password --region us-east-1 | sudo docker login --username AWS --password-stdin 243805558127.dkr.ecr.us-east-1.amazonaws.com
aws ecr create-repository --repository-name rpg-manager --image-scanning-configuration scanOnPush=true --region us-east-1
