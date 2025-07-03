namespace Mindstorms {

    //SERVO
    export enum ServoAdresse {
        //% block="Servo_1"
        Servo1 = 0x08,
        //% block="Servo_2"
        Servo2 = 0x1B,
        //% block="Servo_3"
        Servo3 = 0x2B,
        //% block="Servo_4"
        Servo4 = 0x3B,
        //% block="Servo_5"
        Servo5 = 0x4B,
        //% block="Servo_6"
        Servo6 = 0x5B,
        //% block="Servo_7"
        Servo7 = 0x6B,
        //% block="Servo_8"
        Servo8 = 0x7B,
    }
    //% block="Bewege %adresse auf %position Grad"
    //% adresse.defl=ServoAdresse.Servo1
    //% position.min=0 position.max=180
    export function servoBewegen(adresse: ServoAdresse, position: number) {

        // Buffer mit 1 Byte: [Position]
        let buffer = pins.createBuffer(1)
        buffer[0] = position

        // Senden über I²C
        pins.i2cWriteBuffer(adresse, buffer)
    }
    //SERVO


    //TASTER
    export enum TasterAdresse {
        //% block="Taster_1"
        Taster1 = 0x17,
        //% block="Taster_2"
        Taster2 = 0x08,
    }
    //% block="Lese %adresse aus"
    //% adresse.defl=TasterAdresse.Taster1
    export function Taster_Abfrage(adresse: TasterAdresse): Boolean {
        let zustand = pins.i2cReadNumber(adresse, NumberFormat.UInt8BE)
        return zustand
    }
    //TASTER

    //Ultraschallsensor
    export enum UltraschallsensorAdresse {
        //% block="Ultraschallsensor_1"
        Ultraschallsensor1 = 0x08,
        //% block="Ultraschallsensor_2"
        Ultraschallsensor2 = 0x18,
        //% block="Ultraschallsensor_3"
        Ultraschallsensor3 = 0x28,
        //% block="Ultraschallsensor_4"
        Ultraschallsensor4 = 0x38,
        //% block="Ultraschallsensor_5"
        Ultraschallsensor5 = 0x48,
        //% block="Ultraschallsensor_6"
        Ultraschallsensor6 = 0x58,
        //% block="Ultraschallsensor_7"
        Ultraschallsensor7 = 0x68,
        //% block="Ultraschallsensor_8"
        Ultraschallsensor8 = 0x78,
    }
    //% block="Abstand %adresse in cm"
    //% adresse.defl=UltraschallsensorAdresse.Ultraschallsensor1
    export function Ultraschallsensor_Wert(adresse: UltraschallsensorAdresse): Number {
        let Wert = pins.i2cReadNumber(adresse, NumberFormat.UInt8BE)
        return Wert
    }
    //Ultraschallsensor

}
