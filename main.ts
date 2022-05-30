function set_Servo_forward (distance_cm: number) {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    // Rechts in Fahrtrichtung
    pins.servoWritePin(AnalogPin.P1, 0)
    // Links in Fahrtrichtung
    pins.servoWritePin(AnalogPin.P2, 180)
    control.waitMicros(57000 * distance_cm)
    pins.servoWritePin(AnalogPin.P1, servo_stop)
    pins.servoWritePin(AnalogPin.P2, servo_stop)
}
function set_Servo_turn_R (angle_d: number) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    // Links in Fahrtrichtung
    pins.servoWritePin(AnalogPin.P2, 180)
    control.waitMicros(570000 / 90 * angle_d)
    pins.servoWritePin(AnalogPin.P2, servo_stop)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    set_Servo_forward(10)
    set_Servo_turn_R(90)
    set_Servo_forward(10)
    set_Servo_turn_R(90)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, servo_stop)
    pins.servoWritePin(AnalogPin.P2, servo_stop)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, servo_stop)
    pins.servoWritePin(AnalogPin.P2, servo_stop)
})
let servo_stop = 0
servo_stop = 89
let servo_speed = 0
basic.forever(function () {
	
})
