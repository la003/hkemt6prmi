namespace HKEMT6PrMi {

    //SERVOMOTOR
    export enum ServomotorAdresse {
        //% block="Servo_1"
        Servo1 = 0x0B,
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
    export function servoBewegen(adresse: ServomotorAdresse, position: number) {

        // Buffer mit 1 Byte: [Position]
        let buffer = pins.createBuffer(1)
        buffer[0] = position

        // Senden über I²C
        pins.i2cWriteBuffer(adresse, buffer)
    }
    //SERVOMOTOR


    //TASTER
    export enum TasterAdresse {
        //% block="Taster_1"
        Taster1 = 0x07,
        //% block="Taster_2"
        Taster2 = 0x17,
        //% block="Taster_3"
        Taster3 = 0x27,
        //% block="Taster_4"
        Taster4 = 0x37,
        //% block="Taster_5"
        Taster5 = 0x47,
        //% block="Taster_6"
        Taster6 = 0x57,
        //% block="Taster_7"
        Taster7 = 0x67,
        //% block="Taster_8"
        Taster8 = 0x77,
    }
    //% block="Zustand %adresse"
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
    export function Ultraschallsensor_Wert(adresse: UltraschallsensorAdresse): number {
        let Wert = pins.i2cReadNumber(adresse, NumberFormat.UInt16BE)
        return Wert
    }
    //Ultraschallsensor

    //GLEICHSTROMMOTOR
    export enum GleichstrommotorAdresse {
        //% block="Gleichstrommotor_1"
        Gleichstrommotor1 = 0x0C,
        //% block="Gleichstrommotor_2"
        Gleichstrommotor2 = 0x1C,
        //% block="Gleichstrommotor_3"
        Gleichstrommotor3 = 0x2C,
        //% block="Gleichstrommotor_4"
        Gleichstrommotor4 = 0x3C,
        //% block="Gleichstrommotor_5"
        Gleichstrommotor5 = 0x4C,
        //% block="Gleichstrommotor_6"
        Gleichstrommotor6 = 0x5C,
        //% block="Gleichstrommotor_7"
        Gleichstrommotor7 = 0x6C,
        //% block="Gleichstrommotor_8"
        Gleichstrommotor8 = 0x7C,
    }
    export enum GleichstrommotorZustand {
        //% block="Stop"
        GleichstrommotorStop = 0,
        //% block="Vorwärts"
        GleichstrommotorForward = 1,
        //% block="Rückwärts"
        GleichstrommotorBackward = 2,
    }
    //% block="%adresse %zustand mit %drehzahl RPM"
    //% adresse.defl=GleichstrommotorAdresse.Gleichstrommotor1
    //% zustand.defl=GleichstrommotorZustand.GleichstrommotorStop
    //% drehzahl.min=0 drehzahl.max=360
    export function GleichstrommotorBewegen(adresse: GleichstrommotorAdresse, zustand: GleichstrommotorZustand, drehzahl: number) {

        // Buffer mit 2 Byte: [Zustand][Drehzahl]
        let buffer = pins.createBuffer(2)
        buffer[0] = zustand
        buffer[1] = drehzahl

        // Senden über I²C
        pins.i2cWriteBuffer(adresse, buffer)
    }
    //GLEICHSTROMMOTOR

    //SCHRITTMOTOR
    export enum SchrittmotorAdresse {
        //% block="Schrittmotor_1"
        Schrittmotor1 = 0x0D,
        //% block="Schrittmotor_2"
        Schrittmotor2 = 0x1D,
        //% block="Schrittmotor_3"
        Schrittmotor3 = 0x2D,
        //% block="Schrittmotor_4"
        Schrittmotor4 = 0x3D,
        //% block="Schrittmotor_5"
        Schrittmotor5 = 0x4D,
        //% block="Schrittmotor_6"
        Schrittmotor6 = 0x5D,
        //% block="Schrittmotor_7"
        Schrittmotor7 = 0x6D,
        //% block="Schrittmotor_8"
        Schrittmotor8 = 0x7D,
    }
    //SCHRITTMOTOR

    //FARBSENSOR
    export enum FarbsensorAdresse {
        //% block="Farbsensor_1"
        Farbsensor1 = 0x0A,
        //% block="Farbsensor_2"
        Farbsensor2 = 0x1A,
        //% block="Farbsensor_3"
        Farbsensor3 = 0x2A,
        //% block="Farbsensor_4"
        Farbsensor4 = 0x3A,
        //% block="Farbsensor_5"
        Farbsensor5 = 0x4A,
        //% block="Farbsensor_6"
        Farbsensor6 = 0x5A,
        //% block="Farbsensor_7"
        Farbsensor7 = 0x6A,
        //% block="Farbsensor_8"
        Farbsensor8 = 0x7A,
    }
    //% block="%adresse erkennt Farbe %farbe"
    //% adresse.defl=Farbsensor.Farbsensor1
    export function Farbsensor_Farberkennung(adresse: FarbsensorAdresse): string {
        let Farbwert = pins.i2cReadNumber(adresse, NumberFormat.UInt16BE)
        let Farbe = ""
        if (Farbwert == 0) {Farbe = "Schwarz"}
        else if (Farbwert > 0 && Farbwert <= 50) {Farbe = "Rot"}
        else if (Farbwert > 50 && Farbwert <= 100) { Farbe = "Blau" }
        else if (Farbwert > 100 && Farbwert <= 150) { Farbe = "Grün" }
        else if (Farbwert > 150 && Farbwert <= 200) { Farbe = "Gelb" }
        else if (Farbwert > 200 && Farbwert <= 255) { Farbe = "Weiß" }
        else {Farbe = "Unbekannt"}
        return Farbe
    }
    //FARBSENSOR
}
