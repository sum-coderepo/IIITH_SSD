#!/bin/bash

input=$1
while IFS= read -r line
do
  #echo "$line"
  arrIN=(${line// / })
  for i in "${arrIN[@]}"
  do
	  echo $i | grep '^a' | grep -v '.*txt'
  done

done < "$input"
