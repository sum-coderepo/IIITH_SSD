#!/bin/bash

#input=$1
input=/etc/shells
echo $input
IFS=$'\n' lines=(`awk -F '/'  '/usr/ {print $NF}' $input`)

for i in "${lines[@]}"
  do
  echo $i
    done

