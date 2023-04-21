#!/bin/bash

# example of using arguments to a script
ss=$1

input=$1
while IFS= read -r line
do
  #echo "$line"
  arrIN=(${line// / })
  for i in "${arrIN[@]}"
  do
	  #echo $i
	  if  [[ $i =~ ^de.* ]] && [[ $i != *.js ]];
      then
    echo $i
    fi
  done

done < "$input"

echo "My first name is $2"
