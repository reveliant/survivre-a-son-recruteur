#!/bin/bash

install_tidy () {
    TIDY_VERSION="5.4.0"

    echo "Download Tidy HTML5, version ${TIDY_VERSION}"
    wget --no-clobber "https://github.com/htacg/tidy-html5/releases/download/${TIDY_VERSION}/tidy-${TIDY_VERSION}-64bit.deb" \
        || exit 0

    echo "Unarchive package"
    dpkg -x "tidy-${TIDY_VERSION}-64bit.deb" $(pwd)/tmp

    echo "Removes deb file"
    rm "tidy-${TIDY_VERSION}-64bit.deb"

    echo "Move tidy binary"
    mv $(pwd)/tmp/usr/bin/tidy tidy

    echo "Clean workspace"
    rm -R $(pwd)/tmp
}

main () {
    echo "Build with Hugo"
    hugo

    # Installing / getting HTML Tidy
    if [ ! -f ./tidy ]
    then
        tidypath=`which tidy`
        if [ -n "$tidypath" ]
        then
            echo "Link local Tidy executable"
            ln -s "$tidypath" ./tidy
        else
            echo "Download Tidy executable"
            install_tidy
        fi
    fi

    echo "Tidy HTML files"
    find public/ -name '*.html' -exec ./tidy -config assets/tidy.conf -quiet -modify {} \;
}

main
exit 0
