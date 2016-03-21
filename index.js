var child_process = require('child_process');


function highlight(lang, code) {
    if (!lang) {
        return {body: code, html: false};
    }

    try {
        code = child_process.execFileSync(
            'pygmentize', ['-l', lang, '-g', '-f', 'html', '-O', 'nowrap', '-v'],
            {input: code, encoding: 'utf-8'}
        );
    } catch(e) {
        if (e instanceof TypeError) {
            console.error("`pygmentize` may be missing!");
        }
        if (!e.stderr || e.stderr.indexOf("no lexer") == -1) {
            throw e;
        }
    }

    return code;
}


module.exports = {
    book: {
        assets: './css',
        css: ['website.css']
    },
    ebook: {
        assets: './css',
        css: ['ebook.css']
    },
    blocks: {
        code: function(block) {
            return highlight(block.kwargs.language, block.body);
        }
    }
};
