#anfahrt:
alias adda='sudo chattr -i \~/.bash*aliases && vi \~/.bash*aliases && sudo chattr +i \~/.bash_aliases'
alias load='source \~/.bashrc'
alias lock='sudo chattr +i \~/.bashrc'
alias unlock='sudo chattr -i \~/.bashrc'

#movement aliases
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias root='cd /'
alias home='cd \~'

#abbreviations
alias o='cat'
alias meow='cat'
alias h='history'
alias t='time'
alias c='clear'
alias k='kill'

#conveniences (list, humanreadable, colors, showall...)
alias ls='ls --color=auto'
alias dir='dir -lAh --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias ll='ls -alFh'
alias lh='ls -aFh'
alias la='ls -A'
alias l='ls -CF'
alias lnew='ls -atlFh'

#dailies 
alias up='sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get autoremove -y'

alias e1='echo dd1002 && ssh -l flo.sch -i /home/flo/Documents/flo_sshk 172.16.16.208'
alias e2='echo dd5216 && ssh -l flo.sch -i /home/flo/Documents/flo_sshk 172.16.16.203'
alias e3='echo dd7500 && ssh -l flo.sch -i /home/flo/Documents/flo_sshk 172.16.16.207'
alias e4='echo dd18714 && ssh -l flo.sch -i /home/flo/Documents/flo_sshk 172.16.16.206'

#executables
alias music='/usr/bin/audacious 2>&1 &'
alias bob='sh -c /usr/bin/audacious'
alias auda='exec /usr/bin/audacious & exit'

#git 
alias gcm='git commit -m ""'
alias gsc='git add -Av && echo && git status && echo && echo -e "\033[36mCommit Message Input. Confirm with Enter.\033[m \n" &&  read -i -p msg && echo "$msg" &&  git commit -m "$msg"'
alias gscp='echo -e "\033[36m # # # GSCP - Git Stage Commit Push # # # \n\033[m\033[31mThere will be changes pushed with this tool! \033[m" && git add -Av && echo && git status && echo && echo -e "\033[36m Commit Message Input. Confirm with Enter.\033[m \n\n\033[41m You are using gscp. There will be a push to origin after confirmation. \033[m" &&  read -i -p msg && git commit -m "$msg";  echo "Confirm push with y" && read -s -n 1 key && if [ "$key" = "y" ] ; then (echo "Pushing to origin..." && git push origin &&  echo "You pressed $key. Pushed to origin successfully."); else echo "You pressed the wrong key. Operation canceled.";fi; unset key'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'