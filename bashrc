alias ...='../..'
alias ....='../../..'
alias gcm='git commit -m ""'
alias gsc='git add -Av && echo && git status && echo && echo -e "\033[36mCommit Message Input. Confirm with Enter.\033[m \n" &&  read -i -p msg && echo "$msg" &&  git commit -m "$msg"'alias gscp='echo -e "\033[36m # # # GSCP - Git Stage Commit Push # # # \nThere will be changes pushed with this tool!\033[m" && git add -Av && echo && git status && echo && echo -e "\033[36mCommit Message Input. Confirm with Enter.\033[m\n\n\033[41mYou are using gscp. There will be a push to origin after confirmation. \033[m \033[m" &&  read -i -p msg && git commit -m "$msg" && echo "Confirm push with "y" && read -s -n 1 key && key=y &&  echo "Pushing to origin..." && git push origin && echo "You pressed $key. Pushed to origin successfully." || echo "You pressed the wrong key. Operation canceled."'
~                                                                                                                                                                               
~                                                                                                                                                                               
~                                                                                                                                                                               
~                                                                                                                                                                               
~                                                                                                                                                                               
~                                                                                                                                                                               
~                                                                                                         
