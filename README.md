# Typescript-Katas

> This contains a number of typescript scripts that were created to solev some simple Katas

## alphabet_number_kata

> This function takes a string and return the position in the alphabet for each letter. It ignores anything that is not a letter from a to z.
> Calling the following :-
>
>      numberise("abcd efg %hi^ jk* lmn (opq) rstuv wxyz.")
>
> will return
>
>      1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26

## curried_function

> This shows an example of a type of function that accepts multiple parameters one parameter at a time and return a function after each parameter to accept the next parameter.

## morse_code_translator

> This takes a string of text and converts it to morse code or vice versa
> Calling the function morse.convertToMorseCode will convert to morse code
> Calling morse.convertFromMorseCode will convert from morse code

## pig_latin

> Returns a given in pig latin.
> Take the first letter of each word of the string and put it on the end then add "ay"
> So "Hello" would become "elloHay"

## sumofdigits_recursion

> This function takes a number and sums the digits then recursively reduces it to a single digit.
> For example start with 132189 and then sums the digits to get 24.
> As 24 is not a single digit these digits are summed to get 6

## sumofeverydigit

> Take a number and then sums every digit in the number
> So 123 would sum
> 1+2, 1+3, 2+3
> To give 3,4,5

## telephone_number

> Takes an 10 digit number and outputs it formatted as a US telephone number.
> For example 1234567890 would return (123) 456-7890

## christmas_tree

> Generates a christmas tree using \* based upon a given number of rows

## Example script using type script.

> Make sure there is tsconfig.json

> Make sure terminal is using a Command Prompt window as the default shell and then press CTRL SHIFT and B. Do not have Bash as the default shell.

> Select

> tsc: build -tsconfig.json

> Then

> tsc: watch -tsconfig.json

## Running the scripts

> Each of thee scripts can be run using node.js
> For example in powershell window execute
> node pig_latin
