"use strict";

// This is a workaround used alongside the webpack-dev-server hot-module-reload feature
//  - it's quite chatty on the console, and there's no currently no configuration option
//    to silence it. Only used in development.
// Prevent messages starting with [HMR] or [WDS] from being printed to the console
let test = [];
let testUpdates = [];

(function (global) {
    let console_info = global.console.info

    global.console.info = function () {
        if (
            arguments.length == 1 && typeof arguments[0] === 'string' &&
            arguments[0].match(/Recompiling/)
        ) {
            if (test.length === 0) {
                test.push('x');
                console_info.apply(global.console, ['Updating Service 1 \n.'])

                // console_info.apply(global.console, ['.'])

                console_info.apply(global.console, ['..'])

            } else {
                if (testUpdates.length === 0) {
                    testUpdates.push('x');

                    console_info.apply
                        (global.console, ['...'])
                }
            }
        } else if (
            arguments.length == 1 && typeof arguments[0] === 'string' &&
            arguments[0].match(/\[WDS\] Nothing changed/)
        ) {
            console_info.apply(global.console, ['No Updates'])
        }
        else if (!(
            arguments.length == 1 &&
            typeof arguments[0] === 'string' &&
            arguments[0].match(/^\[WDS\]/)
        )) {
            console_info.apply(global.console, arguments)
        } else {
            if (testUpdates.length > 0) {
                console_info.apply
                    (global.console, ['....'])
            }
        }
    }
})(window)