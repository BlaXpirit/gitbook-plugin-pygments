# [Pygments] Code Highlighting in GitBook

This is an alternative syntax highlighting plugin.

Due to repeatedly calling an external process, this plugin slows down the build.


Requires [Pygments] to be installed and `pygmentize` to be accessible.

*book.json*:

```json
"plugins": ["pygments"]
```

Run `generate.sh` before use, unless [installing from npm].


[pygments]: http://pygments.org/
[installing from npm]: https://www.npmjs.com/package/gitbook-plugin-pygments
