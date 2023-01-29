# JAVASCRIPT-DESIGN-PATTERNS

This is a telephone package program written in Javascript.
It uses observer design pattern to implement a telephone and observer class.
A telephone class with three different methods add, remove and dial phone number was created. This telephone class uses an observer pattern that simply inherited from the telephone class.
Also, an observer class which has a method that can be called by the telephone class for the purposes of notification which it was created.
Furthermore, two observers were added to the telephone class which notifies them any time a number is dialed. One prints the phone number and the other "Now Dialing 2347023232". And finally, only numbers that are added can be dialed.
