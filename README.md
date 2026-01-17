1.1 JavaScript :
it is a programing language which is used to add functionalities to the website.

1.2 Data types:

1. User defined data type
   a. array
   b. object
   c. functions

2. Pre defined data type
   a. string
   b. boolean
   c. numbers
   d. null / undefined

1.3 Functions : Collection of statements to perform a task

1.4 Events:
User Interactions to the application is called events

ex: onclick, onChange, onSubmit, onResest

1.5 Operators:

1. arthematic -> +, - , /, ++, --, etc
2. logical -> && , ||, !
3. comparision operator -> >=, <=, <<,>> , ==, === , ? -> ternary operator
4. assignment operator -> = , +=, -= , /=
   normal syntax : x = x + 1
   += : x += 1 internally it does x = x+1 ;
   -=
   /=

   ternary operator :

   for user understandable result, we use this operator
   ( mainly to handle booleans )

   usecase:
   user.boolean ? 'succesfully logged in' : 'wrong cred'

   if true, the first value, if false, the second value

   user.role === 'admin' ? display admin dashboard : display user dashboard

!(not opearator) -> simply, opposite of result , toggling between two scenarios

!true - false
!false - true

!true && false - result :

if ( !true && false) {
console.log('hello');
}

1.6 Conditional statements:

1. if else
2. switch

3. if else :
   syntax :

   if ( user === logged in ) {
   console.log(hello user)
   } else {
   console.log(please login)
   }

   if ( dark ) {
   give dark
   } else if (white) {
   give white
   }
   else {
   default
   }

4. switch :

syntax :

swicth (value) {
case 'some case' : {
do this
break
}

    case 'some other case' : {
      do this
    }

    case 'nothing' : {
      dont do anything
    }


    default {
      stay in ground floor
    }

}

document.getElementById()

newDate() - gives current date

form :

signup for an account:
name: value given by user
email
password
mobile number
createdAt: new Date()
get Day()

what is the relationship between new Date and get Day ?
clue : new Date.getDay

dot notation will be used for objects

new Date returns one object

function new Date() {
return {
getDay : ()
getMonth : ()
}
}

array indexes : [0,1,2,3,......n-1]

Days:
sunday - 0
mon - 1
tue - 2
wed - 3
thursday - 4
fri - 6
sat. - 7

1.7. Looping statements :
Executes the stements present in Loop until the condition becomes false.

     1. for
     2. while
     3. do-while
     4. for-in

     1. For loop :

        syntax :



        for ( initialisatoin, condition, incre/dec) {
          //logic statemenst
        }

    2. For in loop : It is used only to iterate through the objects.

    for, while, do-while all these loops are used to iterate throught the arrays
    but, for-in loop is used to iterate through the objects only

    arrays : iterated based on the index :
    obj: iterates object from starting to ending key

    syntx:

    for (var key in objectName) {
      objectName[key] ;             //this returns the value of that key
    }


    Note (imp) :

    object - > objectName.key
    object -> objectName[0] //bracket notation only in for-in loop case.

1.8 : Array methods:

      1. push() - adds value at the last index position
      2. pop() - removes value at the last index position
      3. arrayName.toString() - converts whole array into string
      4. splice() - splice(index pos, delete count, new value)

Functions : (very very important):

1. Named Function / function constructor :

   syntax:

   function functionName () {
   return ...
   }
   - it is used to trigger a function whenever we needed in application
   - it can be called n no of times

2. IIFE (Immediately Invoked Function Expression):
   - a function which is invoked/called by itself.
   - it will execute the statements only for once, since we can call the function only for once.

   syntax:
   (function(arg1, arg2, arg3,....argn) {
   //statements we want to execute
   })(param1, param2, param3,.....paramn). ////we are defining the function and calling the function here itself.

   function
   function()
   - in this we doesnt have name for the functio, because we dont call it externally.

3. Anonymous function:
   a function without names is called Anonymous functions.

   syntax:

   var x = function (params) {
   //statements
   return 1

   }

   var x = 1 ;
   - this is mainly used in objects
   - also when we want to write one function in another function

4. Callback function:

a function which is passed as a parameter/ arg for another function.

syntax:

function a() {
//statements
}

function b(a) {
//statements. //this will be called call back function
}

function a will be callback Function
function b will be higher order function since it is taking the function a as a parameter.

what is higher order function?
ans : the function which takes one or more functions as a parameneter, is called higher order function

Closure:
A function which is defined inside another function is called closure.

- Also variables defined in parent function can be accesible in child function also.

Pre defined functions :

1. setTimeout
2. setInterval

these are the pre defined functions which are provided for us.

asychronus operations:

means it will be executed some other time

synchronus operations

AJAX (asychronus javascript and xml) :
xml - json

json - javascript object notation
it is one of the data formats

1. JSON object - array of objects
2. JSON string

Network
