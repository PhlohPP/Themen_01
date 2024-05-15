#!/bin/bash

# test -f ~/.bash_test && . ~/.bash_test || cp .bash_test ~/ && . ~/.bash_test
test -f ~/.bash_profile && . ~/.bash_profile || cp -v .bash_profile ~/ && . ~/.bash_profile
test -f ~/.bashrc && . ~/.bashrc || cp -v .bashrc ~/ && . ~/.bashrc
test -f ~/.bash_aliases && . ~/.bash_aliases || cp -v .bash_aliases ~/ && . ~/.bash_aliases