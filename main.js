// ==UserScript==
// @name         Remove Solution Button learnpython.org
// @namespace    https://github.com/builderpepc/LearnPython-Solution-Hider
// @version      1.0
// @description  Removes the solution button from learnpython.org challenges for any sneaky learners.
// @author       builderpepc
// @match        https://www.learnpython.org/*
// @icon         https://www.google.com/s2/favicons?domain=learnpython.org
// @grant        none
// @updateURL    https://raw.githubusercontent.com/builderpepc/LearnPython-Solution-Hider/main/main.js
// @downloadURL  https://raw.githubusercontent.com/builderpepc/LearnPython-Solution-Hider/main/main.js
// ==/UserScript==

(function() {
    'use strict';

    var solutionButtons = document.querySelectorAll('[ng-show="solutionButtonShown"]');
    for (let i = 0; i < solutionButtons.length; i++) {
        solutionButtons[i].hidden = true;
    }
})();