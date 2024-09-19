#/bin/bash

PWD="$(pwd)"
LEAN_ROOT="$(cd $PWD && lean --print-prefix)"
LEAN_PATH="$(cd $PWD && lake env printenv LEAN_PATH)"

# # print commands as they are executed
set -o xtrace
set -e


mkdir -p ./leantmp

if command -v bwrap >/dev/null 2>&1; then
  (exec bwrap\
    --ro-bind "$PWD" /project \
    --ro-bind "$LEAN_ROOT" /lean \
    --dev /dev \
    --proc /proc \
    --symlink usr/lib /lib\
    --symlink usr/lib64 /lib64\
    --symlink usr/bin /bin\
    --symlink usr/sbin /sbin\
    --clearenv \
    --setenv TMPDIR "/leantmp/" \
    --setenv PATH "/lean/bin" \
    --setenv LAKE "/no" `# tries to invoke git otherwise` \
    --setenv LEAN_PATH "$LEAN_PATH" \
    --unshare-user \
    --unshare-pid  \
    --unshare-net  \
    --unshare-uts  \
    --unshare-cgroup \
    --die-with-parent \
    --chdir "/project/" \
    lean 
  )
else
  echo "bwrap is not installed. Running without container." >&2
  (exec
    cd $1
    lean --server
  )
fi
