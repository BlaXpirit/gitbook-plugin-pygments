#!/bin/sh

set -o errexit

cd "$(dirname "$0")"

mkdir -p css

theme() {
    pygmentize -S $1 -f html | sed -r "s/^/$2 code>/"
}

theme default '.book section'               > css/website.css
theme autumn  '.book.color-theme-1 section' >>css/website.css
theme monokai '.book.color-theme-2'         >>css/website.css

theme default > css/ebook.css
