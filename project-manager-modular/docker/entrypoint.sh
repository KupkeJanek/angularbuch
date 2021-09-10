#!/bin/bash

set -e
set -o pipefail

./environment.sh

nginx -g "daemon off;"
