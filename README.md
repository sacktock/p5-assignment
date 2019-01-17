COMP1101 Programming Summative Assessment 1
===========================================

p5.js project by clvp22, Durham University.
	
Index.html (example page)
-------------------------

The head _<head>_ attaches and runs all the scripts to the webpage. The ```<script type="text/javascript">``` executes some javascript once the DOM has loaded, which adds _EventListeners_ and attaches functions to all the DOM elements. The ```<body>``` defines all the DOM elements using html tags, giving them unique ids and enclosing some of them in ```<div>```s for stylistic effect. Labels and text are also added for stylistic purposes. This page consists of 8 buttons and 8 sliders.

Buttons

- **Reset** -> resets the sketch to its original state along with all the buttons and sliders.
- **Clear** -> clears the canvas by setting all the pixels to the background colour of the canvas.
- **Pause** -> pauses or unpauses the animation.
- **Start** -> clears the canvas and unpauses the animation.
- **Invert** -> inverts the colours displayed on the canvas.
- **Sticky Mouse** -> toggles sticky mouse on or off, so that the waves follow the mouse position.
- **Random** -> gives the waves a random colour.
- **Fill** -> gives the waves fill.

Sliders

- **Hue** -> changes the hue component of colour of the waves.
- **Saturation** -> changes the saturation component of colour of the waves.
- **Lightness** -> changes the lightness component of colour of the waves.
- **Opacity** -> changes the opacity of the waves.
- **Wave Speed** -> changes the speed at which the waves move.
- **Waviness** -> changes the waviness of the waves.
- **Waviness 2** -> changes the waviness of the waves.
- **Amplitude** -> changes the range of y values the wave can have.

Index.js
--------

Variables

- **w** -> _w_ is an instance of the _Waves_ class.

Functions

- **setup** -> _w_ is set to an instance of the _Waves_ class.
- **draw** -> calls _w.draw()_, which draws the waves to the canvas if _w_ is not paused.
- **keyPressed** -> if space bar is pressed then _w_ is paused or unpaused based on the state of _w_.
- **setColSliders** -> called when the color of _w_ is changed by the _Invert_ or  the _Random_ button, and adjusts the hue, saturation and lightness sliders appropriately.
- **resetDOM** -> called when the _Reset_ button is pressed, to set the sliders to their default values.

Waves.js
--------

Properties

- **yoff** -> untouched variable used for drawing the waves.
- **xoff** -> untouched variable used for drawing the waves.
- **bgColor** -> stores the background colour of the canvas.
- **paused** -> boolean variable dictating whether the waves are drawn or not.
- **stickyMouse** -> boolean variable dictating whether the waves move relative to the mouse position or not.
- **fill** -> boolean variable dictating whether the waves are filled or not.
- **r** -> stores the red component of the colour of the waves.
- **g** -> stores the green component of the colour of the waves.
- **b** -> stores the blue component of the colour of the waves.
- **alpha** -> stores the opacity of the waves (0%-100%).
- **ySpeed** -> stores the speed at which the waves appear to move, or the rate at which _yoff_ is incremented when the waves are generated.
- **xSpeed** -> stores what appears to be a measure of waviness of the waves, or the rate at which _xoff_ is incremented when the waves are generated.
- **sampleRate** -> stores what appears to be a measure of waviness of the waves, or the rate at which points are generated for the wave to curve around.
- **amplitude** -> stores the range that y values can deviate.

Methods

- **constructor** -> instantiates the class. 
	- -> params
	- r
	- g
	- b
	- alpha
	- ySpeed
	- xSpeed
	- sampleRate
	- amplitude
- **draw** -> generates a wave form and draws it to the canvas.
- **mapPoint** -> generates a y value for a given x value and maps it as a point for the waves to curve around.
	- -> params 
	- x
- **setters**
	- setRed -> params -> r
	- setGreen -> params -> g
	- setBlue -> params -> b
	- setAlpha -> params -> alpha
	- setYSpeed -> params -> ySpeed
	- setXSpeed -> params -> xSpeed
	- setSampleRate -> params -> sampleRate
	- setAmplitude -> params -> amplitude
	- setFill -> params -> fill
- **getters**
	- getRed
	- getGreen
	- getBlue
	- getAlpha
	- getYSpeed
	- getXSpeed
	- getSampleRate
	- getAmplitude
	- isPaused
	- isStickyMouse
	- isFill
- **setRGB** -> sets the red, green and blue colour components of the wave based on hue, saturation and lightness values.
	- -> params
	- H
	- S
	- L
- **Pause** -> sets _paused_ to true.
- **Unpause** -> sets _paused_ to false.
- **StickyMouse** -> toggles _stickyMouse_ between true and false.
- **InvertColour** -> inverts the colour of the waves.
- **Random** -> generates a random colour for the waves.

Acknowledgment
--------------

The waves.js is an encapsulation and adaptation of the JS project Waves by user _vivianyoung_ found at: https://www.openprocessing.org/sketch/500317.

License
-------

This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
