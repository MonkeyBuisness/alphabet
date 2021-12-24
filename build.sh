#!/bin/bash

input=$1
output=$2
ext=$3

for template in ./_draft/$input/*.md; do
    filename=${template##*/}
    celli convert t2b $template > $output/"${filename%.*}"$ext
done
