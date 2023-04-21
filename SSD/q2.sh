#!/bin/bash
dir=$1
#ls -R $dir
for d in $dir/* ; do
    variab=$(stat -c "%a %n" $d)
    #echo $variab
    echo $variab | grep '^74'
    echo $variab | grep '^76' 
done