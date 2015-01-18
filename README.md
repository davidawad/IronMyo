# IronMyo by David Awad, Sakib Jalal and Alec Huang.
A 3D Myo Controlled Iron Man Simulator in Oculus Rift using Unity Engine. 

![](http://2015s.pennapps.com/assets/images/logo.svg)
## This project was made at Penn Apps 2015
### *Requires two Myo Armband and an Oculus Rift. 
This project uses the bloomberg Api to ping for the stock price of Stark Technologies (Some Taiwanese Company)

The challenge was to get the bloomberg data into C#. Unity by default blocks external http requests unless you have paid for the full version of the app. What we ended up doing for the flexibility of API use was to call a python script.  

This project was meant to be a simulation of an Iron Man Suit. You can move around and use your hands. 

You have targets floating in a 3 dimensional environment that you can fire repulsor blasts at the targets using the Myo armbands and destroying the targets. 

This was our first time ever using Unity, Myo, Oculus, C# and the Bloomberg API.


The Myo will be set up like so.
![](https://raw.githubusercontent.com/DavidAwad/IronMyo/master/resources/Armbands.jpg)

And then have your computer set up next to it.

![](https://raw.githubusercontent.com/DavidAwad/IronMyo/master/resources/Oculus_setup.jpg)

With this set up you can run any of the executables.

##Editing Source

This was built as a simple unity project integrating a couple of C# programming hacks to get Unity to play sound and call API's from python<sup>1</sup>.


##Possible Problems

If you're having trouble running this try looking into the Oculus config util. 

Make sure you're using the latest firmware, and make sure you're computer is recognizing the oculus as an external device / monitor(in our case the oculus mirrored the desktop). 

#Penn Apps 2015 

(The real way you should be doing this is with http requests but unity free actually doesn't allow that which is why we ended up with using nodejs) 

