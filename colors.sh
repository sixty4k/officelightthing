#!/bin/bash

## A simple script to cycle light colors

colors="red orange yellow green blue indigo violet"
lighthost=bacon.local

while clear; do

	for color in $(echo ${colors}); do
		curl http://${lighthost}/light/all/color/$color
		sleep 50
	done

done
