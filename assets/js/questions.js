// Questions array with one object for each question.
var questions = [
	{
		question: 'Inside which HTML element do we put the JavaScript?',
		choices: {
            a: 'js',
			b: 'script',
			c: 'javascript',
            d: 'scripting',
        },
        correct: 'b',
	},
    {
		question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
		choices: {
            a: 'script src="xxx.js"',
			b: 'script href="xxx.js"',
			c: 'script name="xxx.js"',
            d: 'script code="xxx.js"',
        },
        correct: 'a',
	},
    {
		question: 'JavaScript the same as Java.',
		choices: {
            a: 'False',
			b: 'True',
        },
        correct: 'a',
	},
    {
		question: 'How do you declare a JavaScript variable?',
		choices: {
            a: 'variable carName;',
			b: 'v carName;',
            c: 'var carName; ',
            d: 'carName = variable;',
        },
        correct: 'c',
	},
    {
		question: 'What is the correct way to write a JavaScript array?',
		choices: {
            a: 'var colors = "red", "green", "blue"',
			b: 'var colors = ["red", "green", "blue"]',
            c: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            d: 'var colors = (1:"red", 2:"green", 3:"blue")',
        },
        correct: 'b',
	},
    {
		question: 'How does a FOR loop start?',
		choices: {
            a: 'for (i = 0; i <= 5)',
			b: 'for i = 1 to 5',
            c: 'for (i <= 5; i++)',
            d: 'for (i = 0; i <= 5; i++)',
        },
        correct: 'd',
	},
    {
		question: 'How does a WHILE loop start?',
		choices: {
            a: 'while (i <= 10)',
			b: 'while (i <= 10; i++)',
            c: 'while i = 1 to 10',
        },
        correct: 'a',
	},
    {
		question: 'What is the correct syntax for creating a function in JavaScript?',
		choices: {
            a: 'create function myFunction()',
			b: 'myfunction()',
            c: 'new function myFunction()',
            d: 'function myFunction()',
        },
        correct: 'd',
	},
    {
		question: 'Which event occurs when the user clicks on an HTML element?',
		choices: {
            a: 'onchange',
			b: 'onmouseclick',
            c: 'onclick',
            d: 'onmouseover',
        },
        correct: 'c',
	},
    {
		question: 'What will the following code return: Boolean(10 > 9)',
		choices: {
            a: 'False',
			b: 'True',
            c: 'NaN',
        },
        correct: 'b',
	}
]


