input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    set_Servo_backwards(1)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, servo_stop)
    pins.servoWritePin(AnalogPin.P2, servo_stop)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, servo_stop)
    pins.servoWritePin(AnalogPin.P2, servo_stop)
})
function set_Servo_backwards (servo_speed: number) {
    // Rechts in Fahrtrichtung
    pins.servoWritePin(AnalogPin.P1, 75)
    pins.servoWritePin(AnalogPin.P2, 120)
}
let servo_stop = 0
servo_stop = 85
let servo_speed = 0
basic.forever(function () {
	
})
