rsync --archive \
      --delete \
      --progress \
      --human-readable \
      --exclude node_modules \
      --exclude .idea \
      --exclude .DS_Store \
      --exclude dist \
      . ../buch-zip
