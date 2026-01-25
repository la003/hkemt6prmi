//% color=#000000 icon="\uf2db"
namespace MT6PrHKEMi {

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
    //% group="Servomotor"
    //% weight=99 blockGap=16
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
    //% block="%adresse %zustand"
    //% group="Gleichstrommotor"
    //% adresse.defl=GleichstrommotorAdresse.Gleichstrommotor1
    //% zustand.defl=GleichstrommotorZustand.GleichstrommotorStop
    export function GleichstrommotorBewegen(adresse: GleichstrommotorAdresse, zustand: GleichstrommotorZustand) {

        // Buffer mit 1 Byte: [Zustand]
        let buffer = pins.createBuffer(1)
        buffer[0] = zustand

        // Senden über I²C
        pins.i2cWriteBuffer(adresse, buffer)
    }
    //GLEICHSTROMMOTOR

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
    //% group="Taster"
    //% weight=99 blockGap=16
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
    //% group="Ultraschallsensor"
    //% adresse.defl=UltraschallsensorAdresse.Ultraschallsensor1
    export function Ultraschallsensor_Wert(adresse: UltraschallsensorAdresse): number {
        let Wert = pins.i2cReadNumber(adresse, NumberFormat.UInt8LE)
        return Wert
    }
    //Ultraschallsensor

    //Helligkeitssensor
    export enum HelligkeitssensorAdresse {
        //% block="Helligkeitssensor_1"
        Helligkeitssensor1 = 0x05,
        //% block="Helligkeitssensor_2"
        Helligkeitssensor2 = 0x15,
        //% block="Helligkeitssensor_3"
        Helligkeitssensor3 = 0x25,
        //% block="Helligkeitssensor_4"
        Helligkeitssensor4 = 0x35,
        //% block="Helligkeitssensor_5"
        Helligkeitssensor5 = 0x45,
        //% block="Helligkeitssensor_6"
        Helligkeitssensor6 = 0x55,
        //% block="Helligkeitssensor_7"
        Helligkeitssensor7 = 0x65,
        //% block="Helligkeitssensor_8"
        Helligkeitssensor8 = 0x75,
    }
    //% block="Messwert %adresse"
    //% group="Helligkeitssensor"
    //% weight=99 blockGap=16
    //% adresse.defl=HelligkeitssensorAdresse.Helligkeitssensor1
    export function Helligkeitssensor_Abfrage(adresse: HelligkeitssensorAdresse): number {
        let Messwert = pins.i2cReadNumber(adresse, NumberFormat.UInt8LE )
        return Messwert
    }
    //Helligkeitssensor

    //FARBSENSOR
    // I2C & Registerdefinitionen
    const I2C_ADDR = 0x39
    const REG_ENABLE = 0x80
    const REG_ATIME = 0x81
    const REG_STATUS = 0x93
    const REG_CDATA_L = 0x94
    const REG_RDATA_L = 0x96
    const REG_GDATA_L = 0x98
    const REG_BDATA_L = 0x9A
    const REG_PDATA = 0x9C
    const REG_CONFIG2 = 0x90

    // Gesture-Konfiguration
    const REG_GPENTH = 0xA0
    const REG_GEXTH = 0xA1
    const REG_GCONF1 = 0xA2
    const REG_GCONF2 = 0xA3
    const REG_GO_U = 0xA4
    const REG_GO_D = 0xA5
    const REG_GPULSE = 0xA6
    const REG_GO_L = 0xA7
    const REG_GCONF3 = 0xAA
    const REG_GCONF4 = 0xAB
    const REG_GFLVL = 0xAE
    const REG_GSTATUS = 0xAF
    const REG_GFIFO_U = 0xFC
    const REG_GFIFO_D = 0xFD
    const REG_GFIFO_L = 0xFE
    const REG_GFIFO_R = 0xFF

    // ENABLE-Bits
    const PON = 0x01
    const AEN = 0x02
    const PEN = 0x04
    const GEN = 0x40

    // I2C Helfer
    function write8(reg: number, value: number) {
        const buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value & 0xFF
        pins.i2cWriteBuffer(I2C_ADDR, buf)
    }
    function read8(reg: number): number {
        pins.i2cWriteNumber(I2C_ADDR, reg, NumberFormat.UInt8BE)
        return pins.i2cReadNumber(I2C_ADDR, NumberFormat.UInt8BE) & 0xFF
    }
    function read16LE(loReg: number): number {
        const lo = read8(loReg)
        const hi = read8(loReg + 1)
        return (hi << 8) | lo
    }

    // Gesten-Enums & Filter
    export enum GestureDirection {
        //% block="keine"
        None = 0,
        //% block="hoch"
        Up = 1,
        //% block="runter"
        Down = 2,
        //% block="links"
        Left = 3,
        //% block="rechts"
        Right = 4,
    }

    const _ENERGY_MIN = 60 // Mindestenergie in FIFO (Summe U+D+L+R)
    const _TH = 25 // Deadband für Differenzen U-D / L-R

    // Emissionszustände (für Wiederholung/Timeout-Optionen)
    let _lastGestureEmitted: GestureDirection = GestureDirection.None
    let _lastGestureTimestamp = 0
    let _lastTextEmitted = "" // "UP/DOWN/LEFT/RIGHT" oder "" (keine)
    let _lastTextTimestamp = 0

    // Interner Power/Init-Status
    let _isPoweredOn = false

    // Initialisierung
    function initStableBalanced() {
        // ALS-Integrationszeit (~103 ms)
        write8(REG_ATIME, 219)

        // LEDBOOST moderat: 2x
        let c2 = read8(REG_CONFIG2)
        c2 = (c2 & 0xCF) | 0x10  // Bits 5:4 = 01 => 2x
        write8(REG_CONFIG2, c2)

        // Gesture: ausgewogene Startwerte (fix)
        write8(REG_GCONF1, 0b01000000)                                 // GFIFOTH=01 (8 Datensätze)
        write8(REG_GCONF2, (0b10 << 5) | (0b01 << 3) | 0b010)          // GGAIN=4x, GLDRIVE=50mA, GWTIME=5.6ms
        write8(REG_GPULSE, (0b01 << 6) | 16)                           // GPLEN=16µs, GPULSE=16
        write8(REG_GO_U, 0x00); write8(REG_GO_D, 0x00); write8(REG_GO_L, 0x00) // Offsets 0
        write8(REG_GCONF3, 0x00)                                       // alle Dimensionen
        write8(REG_GPENTH, 0x18)                                       // Entry ~24
        write8(REG_GEXTH, 0x0C)                                        // Exit  ~12

        // GIEN + GMODE aktivieren und FIFO leeren
        let g4 = read8(REG_GCONF4)
        g4 |= 0x03 // GIEN + GMODE
        write8(REG_GCONF4, g4)
        clearGestureFIFO()
    }

    function setGestureMode(on: boolean) {
        let v = read8(REG_GCONF4)
        v = on ? (v | 0x02) : (v & ~0x02) // GIEN
        v = on ? (v | 0x01) : (v & ~0x01) // GMODE
        write8(REG_GCONF4, v)
    }

    function clearGestureFIFO() {
        let v = read8(REG_GCONF4)
        write8(REG_GCONF4, v | 0x04)   // GFIFO_CLR setzen
        write8(REG_GCONF4, v & ~0x04)  // wieder löschen
    }

    function waitALSValid(timeoutMs = 60): boolean {
        const start = control.millis()
        while (control.millis() - start < timeoutMs) {
            const st = read8(REG_STATUS)
            const avalid = (st & 0x01) != 0 // AVALID Bit0
            if (avalid) return true
            basic.pause(2)
        }
        return false
    }

    function ensurePoweredOn(): void {
        if (_isPoweredOn) return

        initStableBalanced()
        write8(REG_ENABLE, PON | AEN | PEN | GEN)
        setGestureMode(true)
        clearGestureFIFO()

        // Emissions-Zustände zurücksetzen (nur beim Einschalten)
        _lastGestureEmitted = GestureDirection.None
        _lastGestureTimestamp = 0
        _lastTextEmitted = ""
        _lastTextTimestamp = 0

        _isPoweredOn = true

    }


    // Helligkeit lesen
    //% block="Helligkeit lesen" group="Farbsensor" weight=92
    export function readBrightness(): number {
        ensurePoweredOn()
        waitALSValid(60)
        return read16LE(REG_CDATA_L)
    }

    // Rot lesen
    //% block="Rot lesen" group="Farbsensor" weight=91 color=#E74C3C
    export function readRed(): number {
        ensurePoweredOn()
        waitALSValid(60)
        return read16LE(REG_RDATA_L)
    }

    // Grün lesen
    //% block="Grün lesen" group="Farbsensor" weight=90 color=#27AE60
    export function readGreen(): number {
        ensurePoweredOn()
        waitALSValid(60)
        return read16LE(REG_GDATA_L)
    }

    // Blau lesen
    //% block="Blau lesen" group="Farbsensor" weight=89 color=#2980B9
    export function readBlue(): number {
        ensurePoweredOn()
        waitALSValid(60)
        return read16LE(REG_BDATA_L)
    }

    // Abstand lesen
    //% block="Abstand lesen" group="Farbsensor" weight=87
    export function readDistance(): number {
        ensurePoweredOn()
        return read8(REG_PDATA)
    }

    // Interne Roh-Gestenerkennung (Rauschfilter + Dominanz der Achse)
    function detectGestureRaw(): GestureDirection {
        // GVALID prüfen
        const gstat = read8(REG_GSTATUS)
        const gvalid = (gstat & 0x01) != 0
        if (!gvalid) return GestureDirection.None

        // FIFO-Level
        const level = read8(REG_GFLVL)
        if (level <= 0) return GestureDirection.None

        // Summen bilden
        let sumU = 0, sumD = 0, sumL = 0, sumR = 0
        for (let i = 0; i < level; i++) {
            sumU += read8(REG_GFIFO_U)
            sumD += read8(REG_GFIFO_D)
            sumL += read8(REG_GFIFO_L)
            sumR += read8(REG_GFIFO_R)
        }
        clearGestureFIFO()

        // Mindestenergie-Filter
        const energy = sumU + sumD + sumL + sumR
        if (energy < _ENERGY_MIN) return GestureDirection.None

        const diffUD = sumU - sumD
        const diffLR = sumL - sumR

        // Dominante Achse entscheidet
        if (Math.abs(diffUD) >= Math.abs(diffLR)) {
            if (diffUD > _TH) return GestureDirection.Up
            if (diffUD < -_TH) return GestureDirection.Down
        } else {
            if (diffLR > _TH) return GestureDirection.Left
            if (diffLR < -_TH) return GestureDirection.Right
        }
        return GestureDirection.None
        }

        /**
         * Geste (Enum)
         * Zusätzlich: Wiederholung und Timeout einstellbar.
         *
         * @param repeat    true = gleiche Geste darf direkt erneut ausgegeben werden
         * @param timeoutMs >0 = gleiche Geste erst nach Ablauf erneut zulassen
         */
        //% block="Geste (Wiederholung %repeat Timeout %timeoutMs ms)" group="Farbsensor" weight=85 
        //% repeat.defl=true timeoutMs.defl=0
        export function gesture(repeat: boolean = true, timeoutMs: number = 0): GestureDirection {
            ensurePoweredOn()
            const now = control.millis()
            const g = detectGestureRaw()

            // Wiederholungslogik: identische Geste unterdrücken, falls repeat=false und Timeout nicht abgelaufen
            if (!repeat && g === _lastGestureEmitted) {
                const tooSoon = (timeoutMs > 0) && ((now - _lastGestureTimestamp) < timeoutMs)
                if (timeoutMs === 0 || tooSoon) {
                    //return GestureDirection.None
                }
            }

            // neuen Zustand merken
            _lastGestureEmitted = g
            _lastGestureTimestamp = now
            return g
        }

        /**
         * Gesten-Text – liefert "UP/DOWN/LEFT/RIGHT" oder "" (keine).
         * Zusätzlich: Wiederholung und Timeout einstellbar.
         *
         * @param repeat    true = gleicher Text darf direkt erneut ausgegeben werden
         * @param timeoutMs >0 = gleicher Text erst nach Ablauf erneut zulassen
         */
        //% block="Gesten-Text (Wiederholung %repeat Timeout %timeoutMs ms)" group="Farbsensor" weight=84
        //% repeat.defl=true timeoutMs.defl=0
        export function gestureText(repeat: boolean = true, timeoutMs: number = 0): string {
            ensurePoweredOn()
            const now = control.millis()
            const dir = detectGestureRaw()
            const txt =
                dir === GestureDirection.Up ? "UP" :
                    dir === GestureDirection.Down ? "DOWN" :
                        dir === GestureDirection.Left ? "LEFT" :
                            dir === GestureDirection.Right ? "RIGHT" :
                                "" // keine

            if (!repeat && txt === _lastTextEmitted) {
                const tooSoon = (timeoutMs > 0) && ((now - _lastTextTimestamp) < timeoutMs)
                if (timeoutMs === 0 || tooSoon) {
                    return ""
                }
            }

            _lastTextEmitted = txt
            _lastTextTimestamp = now
            return txt
        }
    }
