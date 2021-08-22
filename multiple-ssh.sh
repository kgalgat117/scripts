ssh-keygen -t rsa -b 4096 -C "kgalgat117@gmail.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_personal
xclip -sel clip < ~/.ssh/id_rsa_personal.pub

ssh-keygen -t rsa -b 4096 -C "kgalgat@innovito.in"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa_innovito
xclip -sel clip < ~/.ssh/id_rsa_innovito.pub

cd ~/.ssh/
touch config
nano config
#paste below content in above file
IdentityFile ~/.ssh/id_rsa_personal
IdentityFile ~/.ssh/id_rsa_innovito
IdentitiesOnly yes
#save file and exit

ssh-add -D
ssh-add -l
