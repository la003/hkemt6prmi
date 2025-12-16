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
    //% block="%adresse erkannter Wert %Farbwert"
    //% adresse.defl=Farbsensor.Farbsensor1
    export function Farbsensor_Farbwert(adresse: FarbsensorAdresse): number {
        let Farbwert = pins.i2cReadNumber(adresse, NumberFormat.UInt16BE)
        return Farbwert
    }
    //FARBSENSOR


//TESTABSCHNITT
    //FARBSENSOR
    // APDS-9960 MakeCode-Erweiterung (micro:bit), Stand 2025-12
    // Quelle Register/Defaultwerte: SparkFun APDS-9960 Library & Datasheet
    // https://github.com/sparkfun/SparkFun_APDS-9960_Sensor_Arduino_Library  |  https://cdn.sparkfun.com/datasheets/Sensors/Proximity/apds9960.pdf

    const APDS9960_I2C_ADDR = 0x39

    // --- Register Map (APDS-9960) ---
    const R_ENABLE = 0x80
    const R_ATIME = 0x81
    const R_WTIME = 0x83
    const R_PERS = 0x8C
    const R_CONFIG1 = 0x8D
    const R_PPULSE = 0x8E
    const R_CONTROL = 0x8F
    const R_CONFIG2 = 0x90
    const R_STATUS = 0x93

    // RGBC data (16-bit little endian: L then H)
    const R_CDATAL = 0x94
    const R_CDATAH = 0x95
    const R_RDATAL = 0x96
    const R_RDATAH = 0x97
    const R_GDATAL = 0x98
    const R_GDATAH = 0x99
    const R_BDATAL = 0x9A
    const R_BDATAH = 0x9B

    // Proximity (8-bit)
    const R_PDATA = 0x9C
    const R_POFFSET_UR = 0x9D
    const R_POFFSET_DL = 0x9E
    const R_CONFIG3 = 0x9F

    // Gesture engine
    const R_GPENTH = 0xA0
    const R_GEXTH = 0xA1
    const R_GCONF1 = 0xA2
    const R_GCONF2 = 0xA3
    const R_GOFFSET_U = 0xA4
    const R_GOFFSET_D = 0xA5
    const R_GPULSE = 0xA6
    const R_GOFFSET_L = 0xA7
    const R_GOFFSET_R = 0xA9
    const R_GCONF3 = 0xAA
    const R_GCONF4 = 0xAB
    const R_GFLVL = 0xAE
    const R_GSTATUS = 0xAF
    const R_GFIFO_U = 0xFC
    const R_GFIFO_D = 0xFD
    const R_GFIFO_L = 0xFE
    const R_GFIFO_R = 0xFF

    // ENABLE bits
    const B_PON = 0x01
    const B_AEN = 0x02
    const B_PEN = 0x04
    const B_WEN = 0x08
    const B_AIEN = 0x10
    const B_PIEN = 0x20
    const B_GEN = 0x40

    // STATUS bits
    const B_AVALID = 0x01
    const B_PVALID = 0x02
    const B_GINT = 0x04

    // CONTROL field masks
    const M_AGAIN = 0x03      // bits 0..1
    const M_PGAIN = 0x0C      // bits 2..3

    // ALS Gain options
    enum APDS9960_AGAIN {
        AGAIN_1X = 0,
        AGAIN_4X = 1,
        AGAIN_16X = 2,
        AGAIN_64X = 3
    }

    // Proximity Gain options
    enum APDS9960_PGAIN {
        PGAIN_1X = 0,
        PGAIN_2X = 1,
        PGAIN_4X = 2,
        PGAIN_8X = 3
    }

    // Gesture directions (vereinfachter Decoder)
    enum APDS9960_Gesture {
        None = 0,
        Left = 1,
        Right = 2,
        Up = 3,
        Down = 4,
        Near = 5,
        Far = 6
    }

    // --- Namespace & State ---
    let _wbuf = pins.createBuffer(2)
    let _again = APDS9960_AGAIN.AGAIN_4X
    let _pgain = APDS9960_PGAIN.PGAIN_4X

    // --- Low-level I2C helpers ---
    function writeReg(reg: number, data: number): void {
        // Beim APDS-9960 enthalten die Registeradressen bereits das Kommando-Bit (0x80),
        // also KEIN zusätzliches OR mit 0x80/0xA0!
        _wbuf[0] = reg
        _wbuf[1] = data
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, _wbuf)
    }

    function readReg(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE)
    }

    function read16(regL: number): number {
        // liest LSB, dann MSB → UInt16LE
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, regL, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt16LE)
    }

    function readBlock(reg: number, len: number): Buffer {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE)
        return pins.i2cReadBuffer(APDS9960_I2C_ADDR, len)
    }

    // --- Power & Mode ---
    //% block="APDS9960 Power On"
    export function powerOn(): void {
        let t = readReg(R_ENABLE)
        t |= B_PON
        writeReg(R_ENABLE, t)
        basic.pause(3)
    }

    //% block="APDS9960 Power Off"
    export function powerOff(): void {
        let t = readReg(R_ENABLE)
        t &= ~B_PON
        writeReg(R_ENABLE, t)
    }

    //% block="ALS Enable $en"
    export function alsEnable(en: boolean = true): void {
        let t = readReg(R_ENABLE)
        t = en ? (t | B_AEN) : (t & ~B_AEN)
        writeReg(R_ENABLE, t)
    }

    //% block="Proximity Enable $en"
    export function proximityEnable(en: boolean = true): void {
        let t = readReg(R_ENABLE)
        t = en ? (t | B_PEN) : (t & ~B_PEN)
        writeReg(R_ENABLE, t)
    }

    //% block="Gesture Enable $en"
    export function gestureEnable(en: boolean = true): void {
        let t = readReg(R_ENABLE)
        t = en ? (t | B_GEN) : (t & ~B_GEN)
        writeReg(R_ENABLE, t)
    }

    // --- Gain settings ---
    //% block="set ALS GAIN %gain"
    export function setALSGain(gain: APDS9960_AGAIN): void {
        let t = readReg(R_CONTROL)
        t &= ~M_AGAIN
        t |= (gain & M_AGAIN)
        writeReg(R_CONTROL, t)
        _again = gain
    }

    //% block="set Proximity GAIN %gain"
    export function setProximityGain(gain: APDS9960_PGAIN): void {
        let t = readReg(R_CONTROL)
        t &= ~M_PGAIN
        t |= ((gain << 2) & M_PGAIN)
        writeReg(R_CONTROL, t)
        _pgain = gain
    }

    // --- RGBC / ALS reads ---
    //% block="get Clear (Ambient)"
    export function getClear(): number {
        return read16(R_CDATAL)
    }

    //% block="get Red"
    export function getRed(): number {
        return read16(R_RDATAL)
    }

    //% block="get Green"
    export function getGreen(): number {
        return read16(R_GDATAL)
    }

    //% block="get Blue"
    export function getBlue(): number {
        return read16(R_BDATAL)
    }

    // --- Proximity ---
    //% block="get Proximity"
    export function getProximity(): number {
        // 8-bit proximity; optional Skalierung über _pgain je nach Anwendung
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, R_PDATA, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE)
    }

    // --- Gesture (vereinfachte Auswertung) ---
    //% block="is Gesture Available?"
    export function isGestureAvailable(): boolean {
        let st = readReg(R_GSTATUS)
        return (st & 0x01) != 0 // GVALID
    }

    //% block="read Gesture"
    export function readGesture(): APDS9960_Gesture {
        // Einfacher Decoder: mittelt erste/letzte Messungen in GFIFO und vergleicht Richtungsdeltas
        if (!isGestureAvailable()) return APDS9960_Gesture.None
        let level = readReg(R_GFLVL) & 0x3F // max. 32 Datensätze
        if (level < 4) return APDS9960_Gesture.None

        // Je Kanal U/D/L/R die ersten und letzten 4 Samples mitteln
        let u = readBlock(R_GFIFO_U, level)
        let d = readBlock(R_GFIFO_D, level)
        let l = readBlock(R_GFIFO_L, level)
        let r = readBlock(R_GFIFO_R, level)

        let sumFirstU = 0, sumFirstD = 0, sumFirstL = 0, sumFirstR = 0
        let sumLastU = 0, sumLastD = 0, sumLastL = 0, sumLastR = 0
        let n = Math.min(4, level)
        for (let i = 0; i < n; i++) {
            sumFirstU += u.getUint8(i)
            sumFirstD += d.getUint8(i)
            sumFirstL += l.getUint8(i)
            sumFirstR += r.getUint8(i)
            sumLastU += u.getUint8(level - 1 - i)
            sumLastD += d.getUint8(level - 1 - i)
            sumLastL += l.getUint8(level - 1 - i)
            sumLastR += r.getUint8(level - 1 - i)
        }
        let dU = sumLastU - sumFirstU
        let dD = sumLastD - sumFirstD
        let dL = sumLastL - sumFirstL
        let dR = sumLastR - sumFirstR

        // Schwellen (empirisch): > 15 deutet Richtung an
        let thr = 15
        if (Math.abs(dL - dR) > Math.abs(dU - dD)) {
            if (dR - dL > thr) return APDS9960_Gesture.Right
            if (dL - dR > thr) return APDS9960_Gesture.Left
        } else {
            if (dU - dD > thr) return APDS9960_Gesture.Up
            if (dD - dU > thr) return APDS9960_Gesture.Down
        }
        // Near/Far grob (hohe absol. Werte in allen Richtungen)
        let totFirst = sumFirstU + sumFirstD + sumFirstL + sumFirstR
        let totLast = sumLastU + sumLastD + sumLastL + sumLastR
        if (totLast - totFirst > 4 * thr) return APDS9960_Gesture.Near
        if (totFirst - totLast > 4 * thr) return APDS9960_Gesture.Far

        return APDS9960_Gesture.None
    }

    // --- Initialisierung: sinnvolle Defaults für alle Engines ---
    //% block="APDS9960 Initialize"
    export function init(): void {
        // Disable everything, dann Defaults setzen
        writeReg(R_ENABLE, 0x00)

        // ALS/Wait Integrationszeiten (SparkFun-Defaults)
        writeReg(R_ATIME, 255)  // ~2,78ms
        writeReg(R_WTIME, 246)  // ~27ms
        writeReg(R_PERS, 0x11)  // 2 aufeinanderfolgende Events für Interrupt

        writeReg(R_CONFIG1, 0x60) // kein 12x Wait-Faktor
        writeReg(R_PPULSE, 0x87)  // Prox: 16us, 8 Puls
        writeReg(R_CONTROL, (APDS9960_AGAIN.AGAIN_4X & M_AGAIN) | ((APDS9960_PGAIN.PGAIN_4X << 2) & M_PGAIN))
        _again = APDS9960_AGAIN.AGAIN_4X
        _pgain = APDS9960_PGAIN.PGAIN_4X

        writeReg(R_CONFIG2, 0x01) // LED Boost off, keine Sättigungs-Ints
        writeReg(R_POFFSET_UR, 0x00)
        writeReg(R_POFFSET_DL, 0x00)
        writeReg(R_CONFIG3, 0x00) // alle Photodioden aktiv

        // Gesture Engine Defaults (SparkFun nahegelegt)
        writeReg(R_GPENTH, 40)
        writeReg(R_GEXTH, 30)
        writeReg(R_GCONF1, 0x40) // 4 Gesten für Interrupt, 1 für Exit
        writeReg(R_GCONF2, 0x41) // GGAIN=4x (bits 5..6 = 2), GWTIME=2.8ms (bits 0..2 = 1)
        writeReg(R_GPULSE, 0xC9) // 32us, 10 Puls
        writeReg(R_GOFFSET_U, 0x00)
        writeReg(R_GOFFSET_D, 0x00)
        writeReg(R_GOFFSET_L, 0x00)
        writeReg(R_GOFFSET_R, 0x00)
        writeReg(R_GCONF3, 0x00)
        writeReg(R_GCONF4, 0x00) // Gesture Interrupt disable zunächst

        // ALS + Proximity aktivieren und Power On
        alsEnable(true)
        proximityEnable(true)
        powerOn()

        // optional: Gesture aktivieren
        gestureEnable(true)
    }
    //Farbsensor

}
