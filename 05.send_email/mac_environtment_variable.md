## Tutorial to set an environmental variable for mac

https://www.youtube.com/watch?v=dl_jgYr0rxU

terminal:
printenv 
echo $HOME
echo $USER
Email_password=prtnqdrjqonijddi
echo $Email_password


Open another terminal:
command +t
echo EMAIL_PW 
Check the variable is not visible:
ls -al ~/
# Check Shell interpreter
echo $SHELL 
"export Email_password=prtnqdrjqonijddi" >> ~/.zshrc
# Confirm the variable
cat ~/.zshrc
# Set variable permanent
source ~/.zshrc
# Check is the variable is permanent
env | grep "Email_password"