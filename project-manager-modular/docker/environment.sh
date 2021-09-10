#!/bin/bash

set -e
set -o pipefail

templateFile="/usr/share/nginx/html/assets/config/config.tmpl.json"
targetFile="/usr/share/nginx/html/assets/config/config.json"

envsubst < "$templateFile" > "$targetFile"
