#!/bin/bash

input=$1
#echo $input
number_of_lines=`wc -l < $input`

#echo "Number of lines in file "$number_of_lines

if [ `expr $number_of_lines % 2` == 1 ];
then
  number_of_lines=`expr $number_of_lines + 1`
fi

#echo $number_of_lines

ans=`expr $number_of_lines / 2`
#echo $ans


halfLines=`head -$ans $input | tail -1 `
echo $halfLines

