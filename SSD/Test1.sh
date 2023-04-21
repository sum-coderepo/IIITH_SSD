#!/bin/bash

#
# nameArr=("Leia", "Darth Vader", "Anakin", "Han Solo", "Yoda")
#
# IFS=$'\n'           ## only word-split on '\n'
# nameArr=( $(printf "%s\n" ${nameArr[@]} | sort -r ) )  ## reverse sort
#
# MY_ARRAY=(1 31 21 22)
# for str in ${MY_ARRAY[@]}; do
# echo $str
# done
#
#   readarray -t sorted < <(for a in "${arr[@]}"; do echo "$a"; done | sort)  ## reverse sort
#   nameArr=( $(printf "%s\n" ${MY_ARRAY[@]} | sort ) )
#
# declare -p sorted  ## simply output the array
# x=${sorted[2]}${sorted[1]}
# echo $x
# echo $((x+500))
arr=()


digits=({2..9})
lower=({a..k} {m..n} {p..z})
upper=({A..N} {P..Z})
special=('~' '`' '#' '$' '&' '(' ')' '\' '|' '[' ']' '{' '}' ';' "'" '"' '<' '>' '/' '?' '!')

CharArray=(${digits[*]} ${lower[*]} ${upper[*]})

check_start(){
  index=$1
  prev_index=$((index-1))
  value=$2
  flag="True"

  if [ ! "${digits[*]}" =~ "${value}" ] then
      if [ ! "${lower[*]}" =~ ${arr[$prev_index]}  ] ; then
        flag="False"
        echo $flag
        fi
  elif [ ! "${lower[*]}" =~ "${value}" ]; then
      if [  $value -eq ${arr[$prev_index]} ] | [ ! "${digits[*]}" =~ ${arr[$prev_index]} ]    ; then
    flag="False"
    echo $flag
    fi
  elif [ ! "${special[*]}" =~ "${value}" ]; then
        if [ ! "${special[*]}" =~ ${arr[$prev_index]} ] ; then
        flag="False"
        echo $flag
        fi
  fi

}




for str in ${special[@]}; do
echo -e "$str"
#password=${password}${str}
done
echo $password

variable='*'
echo $variable
echo "$variable"

#echo $CharArray

#for str in ${CharArray[@]}; do
#echo $str
#done

#ArrayLength=${#CharArray[*]}
#echo $ArrayLength
#
#x=$RANDOM
#echo $x
#index=$(($RANDOM%$ArrayLength))
#echo $index

#for str in ${digits[@]}; do
#echo $str
#done
#
#for str in ${lower[@]}; do
#echo $str
#done
#for str in ${upper[@]}; do
#echo $str
#done
#