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
    //% group="Gleichstrommotor"
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

    



//TESTABSCHNITT//////////////////////////////////



    // ---------------------------
    // I2C & Registerdefinitionen
    // ---------------------------
    const I2C_ADDR = 0x39

    const REG_ENABLE = 0x80
    const REG_ATIME = 0x81
    const REG_STATUS = 0x93

    const REG_CDATA_L = 0x94
    const REG_RDATA_L = 0x96
    const REG_GDATA_L = 0x98
    const REG_BDATA_L = 0x9A
    const REG_PDATA = 0x9C

    const REG_CONFIG2 = 0x90  // LEDBOOST (Bits 5:4)

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

    // ---------------------------
    // I2C Helfer
    // ---------------------------
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

    // ---------------------------
    // Gesten-Enums & Filter
    // ---------------------------
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

    // Robuste Heuristik / Rauschfilter (bewährt)
    const _ENERGY_MIN = 60 // Mindestenergie in FIFO (Summe U+D+L+R)
    const _TH = 25 // Deadband für Differenzen U-D / L-R

    // Emissionszustände (für Wiederholung/Timeout-Optionen)
    let _lastGestureEmitted: GestureDirection = GestureDirection.None
    let _lastGestureTimestamp = 0
    let _lastTextEmitted = "" // "UP/DOWN/LEFT/RIGHT" oder "" (keine)
    let _lastTextTimestamp = 0

    // ---------------------------
    // Initialisierung (fix: ausgewogen)
    // ---------------------------
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

    // ---------------------------
    // POWER
    // ---------------------------

    /**
     * Sensor anschalten (fixe, ausgewogene Defaults; PON/AEN/PEN/GEN; GMODE/GIEN; FIFO clear)
     */
    //% block="Sensor anschalten" group="Farbsensor" weight=100 color=#5C9DFF icon="\uf2db"
    export function powerOnSensor(): void {
        initStableBalanced()
        write8(REG_ENABLE, PON | AEN | PEN | GEN)
        setGestureMode(true)
        clearGestureFIFO()

        // Emissions-Zustände zurücksetzen
        _lastGestureEmitted = GestureDirection.None
        _lastGestureTimestamp = 0
        _lastTextEmitted = ""
        _lastTextTimestamp = 0
    }

    /**
     * Sensor ausschalten
     */
    //% block="Sensor ausschalten" group="Farbsensor" weight=99 color=#5C9DFF icon="\uf011"
    export function powerOffSensor(): void {
        write8(REG_ENABLE, 0x00)
        setGestureMode(false)
        clearGestureFIFO()

        _lastGestureEmitted = GestureDirection.None
        _lastGestureTimestamp = 0
        _lastTextEmitted = ""
        _lastTextTimestamp = 0
    }

    // ---------------------------
    // FARBSENSOR
    // ---------------------------

    /**
     * Helligkeit lesen (ehemals CLR)
     * Hinweis: Wartet, bis gültige ALS-Daten vorliegen.
     */
    //% block="Helligkeit lesen" group="Farbsensor" weight=92 color=#5C9DFF
    export function readBrightness(): number {
        waitALSValid(60)
        return read16LE(REG_CDATA_L)
    }

    /**
     * Rot lesen
     * Hinweis: Wartet, bis gültige ALS-Daten vorliegen.
     */
    //% block="Rot lesen" group="Farbsensor" weight=91 color=#E74C3C
    export function readRed(): number {
        waitALSValid(60)
        return read16LE(REG_RDATA_L)
    }

    /**
     * Grün lesen
     * Hinweis: Wartet, bis gültige ALS-Daten vorliegen.
     */
    //% block="Grün lesen" group="Farbsensor" weight=90 color=#27AE60
    export function readGreen(): number {
        waitALSValid(60)
        return read16LE(REG_GDATA_L)
    }

    /**
     * Blau lesen
     * Hinweis: Wartet, bis gültige ALS-Daten vorliegen.
     */
    //% block="Blau lesen" group="Farbsensor" weight=89 color=#2980B9
    export function readBlue(): number {
        waitALSValid(60)
        return read16LE(REG_BDATA_L)
    }

    // ---------------------------
    // LESEN (Gesten & Abstand)
    // ---------------------------

    /**
     * Abstand lesen (0..255) – ehemals Proximity
     */
    //% block="Abstand lesen" group="Farbsensor" weight=87 color=#5C9DFF
    export function readDistance(): number {
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
     * Geste (Enum) – funktioniert wie bisher.
     * Zusätzlich: Wiederholung und Timeout einstellbar.
     *
     * @param repeat    true = gleiche Geste darf direkt erneut ausgegeben werden
     * @param timeoutMs >0 = gleiche Geste erst nach Ablauf erneut zulassen
     */
    //% block="Geste (Wiederholung %repeat Timeout %timeoutMs ms)" group="Farbsensor" weight=85 color=#5C9DFF
    //% repeat.defl=true timeoutMs.defl=0
    export function gesture(repeat: boolean = true, timeoutMs: number = 0): GestureDirection {
        const now = control.millis()
        const g = detectGestureRaw()

        // Wiederholungslogik: identische Geste unterdrücken, falls repeat=false und Timeout nicht abgelaufen
        if (!repeat && g === _lastGestureEmitted) {
            const tooSoon = (timeoutMs > 0) && ((now - _lastGestureTimestamp) < timeoutMs)
            if (timeoutMs === 0 || tooSoon) {
                return GestureDirection.None
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
    //% block="Gesten-Text (Wiederholung %repeat Timeout %timeoutMs ms)" group="Farbsensor" weight=84 color=#5C9DFF
    //% repeat.defl=true timeoutMs.defl=0
    export function gestureText(repeat: boolean = true, timeoutMs: number = 0): string {
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









// APDS9960 MakeCode Extension (micro:bit) — stabile Defaults + optionales Gestenprofil + Gesten-Text
// I2C-Adresse fix 0x39; zentrale Register:
// ENABLE(0x80): PON/AEN/PEN/GEN; CONFIG2(0x90): LEDBOOST
// GCONF1..4(0xA2..0xAB): Gesture-Konfiguration; GPULSE(0xA6)
// STATUS(0x93): AVALID; PDATA(0x9C); R/G/B/CLR(0x96..0x9B / 0x94..0x95)
// GSTATUS(0xAF): GVALID; GFLVL(0xAE); GFIFO U/D/L/R(0xFC..0xFF)

// Gruppensortierung für die Palette
//% groups='["Power", "Konfiguration", "Lesen"]'
namespace apds9960 {
    // ---- Konstanten (Register-Adressen) ----
    const I2C_ADDR = 0x39
    const REG_ENABLE = 0x80
    const REG_ATIME = 0x81
    const REG_ID = 0x92
    const REG_STATUS = 0x93

    const REG_CDATA_L = 0x94
    const REG_RDATA_L = 0x96
    const REG_GDATA_L = 0x98
    const REG_BDATA_L = 0x9A
    const REG_PDATA = 0x9C

    const REG_CONFIG2 = 0x90 // LEDBOOST (Bits 5:4)

    const REG_GCONF1 = 0xA2 // GFIFOTH(7:6), GEXMSK(5:2), GEXPERS(1:0)
    const REG_GCONF2 = 0xA3 // GGAIN(6:5), GLDRIVE(4:3), GWTIME(2:0)
    const REG_GO_U = 0xA4 // GOFFSET_U
    const REG_GO_D = 0xA5 // GOFFSET_D
    const REG_GPULSE = 0xA6 // GPLEN(7:6), GPULSE(5:0)
    const REG_GO_L = 0xA7 // GOFFSET_L
    const REG_GCONF3 = 0xAA // GDIMS(1:0)
    const REG_GCONF4 = 0xAB // GFIFO_CLR(2), GIEN(1), GMODE(0)
    const REG_GPENTH = 0xA0 // Entry Threshold
    const REG_GEXTH = 0xA1 // Exit Threshold

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

    // ---- I2C-Helfer ----
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

    // Richtungen für Gesten
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

    // ---- interner Zustand für Entprellung ----
    let _lastGesture: GestureDirection = GestureDirection.None
    let _cooldownUntil = 0
    let _lockAxis: number = 0 // 0=none, 1=vert, 2=horiz

    // Tuning-Konstanten (kannst du bei Bedarf anpassen)
    const _PROX_GATE = 16      // Mindestnähe der Hand (Proximity-Gate)
    const _COOLDOWN_MS = 320   // Sperrzeit nach erkannter Geste
    const _ENERGY_MIN = 60     // Mindest-"Energie" in FIFO (Summe U+D+L+R)
    const _TH = 25             // Deadband-Schwelle für DiffUD/DiffLR

    // ---- Initialisierung mit stabilen Defaults ----
    function initStable() {
        // ALS-Integrationszeit ~103 ms
        write8(REG_ATIME, 219)

        // LEDBOOST moderat: 2x
        let c2 = read8(REG_CONFIG2)
        c2 = (c2 & 0xCF) | 0x10
        write8(REG_CONFIG2, c2)

        // Gesture: ausgewogene Startwerte
        write8(REG_GCONF1, 0b01000000)                    // GFIFOTH=01 (8 Datensätze)
        write8(REG_GCONF2, (0b10 << 5) | (0b01 << 3) | 0b010) // GGAIN=4x, GLDRIVE=50mA, GWTIME=5.6ms
        write8(REG_GPULSE, (0b01 << 6) | 16)              // GPLEN=16µs, GPULSE=16
        write8(REG_GO_U, 0x00); write8(REG_GO_D, 0x00); write8(REG_GO_L, 0x00) // Offsets 0
        write8(REG_GCONF3, 0x00)                          // alle Dimensionen
        write8(REG_GPENTH, 0x18)                          // Entry ~24
        write8(REG_GEXTH, 0x0C)                           // Exit  ~12
    }

    function setGestureMode(on: boolean) {
        let v = read8(REG_GCONF4)
        v = on ? (v | 0x02) : (v & ~0x02) // GIEN
        v = on ? (v | 0x01) : (v & ~0x01) // GMODE
        write8(REG_GCONF4, v)
    }
    function clearGestureFIFO() {
        let v = read8(REG_GCONF4)
        write8(REG_GCONF4, v | 0x04)   // GFIFO_CLR
        write8(REG_GCONF4, v & ~0x04)
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

    // ===== POWER =====

    /**
     * Sensor anschalten (stabile Defaults, PON/AEN/PEN/GEN, GMODE/GIEN, FIFO clear)
     */
    //% block="Sensor anschalten" group="Power" weight=100 color=#5C9DFF icon="\uf2db"
    export function powerOnSensor(): void {
        initStable()
        write8(REG_ENABLE, PON | AEN | PEN | GEN)
        setGestureMode(true)
        clearGestureFIFO()
        // Entprellungszustand zurücksetzen
        _lastGesture = GestureDirection.None
        _cooldownUntil = 0
        _lockAxis = 0
    }

    /**
     * Sensor ausschalten
     */
    //% block="Sensor ausschalten" group="Power" weight=99 color=#5C9DFF icon="\uf011"
    export function powerOffSensor(): void {
        write8(REG_ENABLE, 0x00)
        setGestureMode(false)
        clearGestureFIFO()
        _lastGesture = GestureDirection.None
        _cooldownUntil = 0
        _lockAxis = 0
    }

    // ===== KONFIGURATION =====

    export enum GestureProfile {
        //% block="ausgewogen"
        Balanced = 0,
        //% block="verstärkt"
        Boost = 1,
        //% block="rauscharm"
        LowNoise = 2
    }

    /**
     * Gestenprofil wählen (Balanced/Boost/LowNoise)
     * Achtung: Boost kann bei manchen Aufbauten zu Rauschen führen.
     */
    //% block="Gestenprofil %mode" group="Konfiguration" weight=70 color=#5C9DFF
    export function setGestureProfile(mode: GestureProfile): void {
        // Gemeinsame Basis
        write8(REG_GCONF1, 0b01000000) // GFIFOTH=01
        write8(REG_GCONF3, 0x00)       // alle Dimensionen
        write8(REG_GO_U, 0x00); write8(REG_GO_D, 0x00); write8(REG_GO_L, 0x00)

        if (mode == GestureProfile.Balanced) {
            // LEDBOOST 2x, Drive 50mA, Gain 4x, Wait 5.6ms, 16 Pulse, moderate Schwellen
            let c2 = read8(REG_CONFIG2); c2 = (c2 & 0xCF) | 0x10; write8(REG_CONFIG2, c2)
            write8(REG_GCONF2, (0b10 << 5) | (0b01 << 3) | 0b010)
            write8(REG_GPULSE, (0b01 << 6) | 16)
            write8(REG_GPENTH, 0x18); write8(REG_GEXTH, 0x0C)
        } else if (mode == GestureProfile.Boost) {
            // Vorsichtiger Boost: LEDBOOST 3x, Drive 100mA, Gain 8x, Wait 8.4ms, 24 Pulse
            let c2 = read8(REG_CONFIG2); c2 = (c2 & 0xCF) | 0x20; write8(REG_CONFIG2, c2)
            write8(REG_GCONF2, (0b11 << 5) | (0b10 << 3) | 0b011)
            write8(REG_GPULSE, (0b01 << 6) | 24)
            write8(REG_GPENTH, 0x10); write8(REG_GEXTH, 0x08)
        } else {
            // LowNoise: LEDBOOST 1x, Drive 25mA, Gain 2x, Wait 5.6ms, 12 Pulse, strengere Schwellen
            let c2 = read8(REG_CONFIG2); c2 = (c2 & 0xCF) | 0x00; write8(REG_CONFIG2, c2)
            write8(REG_GCONF2, (0b01 << 5) | (0b00 << 3) | 0b010)
            write8(REG_GPULSE, (0b01 << 6) | 12)
            write8(REG_GPENTH, 0x20); write8(REG_GEXTH, 0x14)
        }

        // GIEN + GMODE aktiv, FIFO leeren
        let g4 = read8(REG_GCONF4); g4 |= 0x03; write8(REG_GCONF4, g4)
        clearGestureFIFO()

        // Entprellung zurücksetzen
        _lastGesture = GestureDirection.None
        _cooldownUntil = 0
        _lockAxis = 0
    }

    // ===== LESEN =====

    /**
     * Proximity lesen (0..255)
     */
    //% block="Proximity lesen" group="Lesen" weight=97 color=#5C9DFF
    export function readProximity(): number {
        return read8(REG_PDATA)
    }



    /**
     * Geste lesen (Enum). Nutzt GSTATUS/GFLVL und robuste Heuristik mit Rauschfilter.
     */
    //% block="Geste" group="Lesen" weight=95 color=#5C9DFF
    export function gesture(): GestureDirection {
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

        // Rauschfilter: Mindestenergie
        const energy = sumU + sumD + sumL + sumR
        if (energy < _ENERGY_MIN) return GestureDirection.None

        const diffUD = sumU - sumD
        const diffLR = sumL - sumR

        // Achse mit größerer Differenz dominiert
        if (Math.abs(diffUD) >= Math.abs(diffLR)) {
            if (diffUD > _TH) return GestureDirection.Up
            if (diffUD < -_TH) return GestureDirection.Down
        } else {
            if (diffLR > _TH) return GestureDirection.Left
            if (diffLR < -_TH) return GestureDirection.Right
        }
        return GestureDirection.None
    }

    // *** NEU: Gesten-Text (aktueller Status als String) ***
    /**
     * Gesten-Text: Gibt "UP/DOWN/LEFT/RIGHT" oder "keine" zurück.
     */
    //% block="Gesten-Text" group="Lesen" weight=96 color=#5C9DFF
    export function gestureText(): string {
        const dir = gesture()
        switch (dir) {
            case GestureDirection.Up: return "UP"
            case GestureDirection.Down: return "DOWN"
            case GestureDirection.Left: return "LEFT"
            case GestureDirection.Right: return "RIGHT"
            default: return ""
        }
    }

    // Hilfsfunktionen für Entprellung
    function axisOf(dir: GestureDirection): number {
        if (dir == GestureDirection.Up || dir == GestureDirection.Down) return 1 // vert
        if (dir == GestureDirection.Left || dir == GestureDirection.Right) return 2 // horiz
        return 0
    }

    /**
     * Gestenänderung (entprellt):
     * - prüft Proximity-Gate
     * - Achsen-Lock (keine Flip-Flops)
     * - Cooldown (nur eine Meldung pro Wisch)
     * Gibt nur eine neue Richtung zurück, sonst "keine".
     */
    //% block="Gestenänderung (entprellt)" group="Lesen" weight=94 color=#5C9DFF
    export function gestureChangedDebounced(): GestureDirection {
        const now = control.millis()
        if (now < _cooldownUntil) return GestureDirection.None

        // Proximity-Gate
        const prox = readProximity()
        if (prox <= _PROX_GATE) { _lockAxis = 0; return GestureDirection.None }

        const g = gesture()
        if (g == GestureDirection.None) return GestureDirection.None

        const ax = axisOf(g)
        if (_lockAxis == 0) _lockAxis = ax
        else if (_lockAxis != ax) return GestureDirection.None // widersprechende Richtung ignorieren

        if (g != _lastGesture) {
            _lastGesture = g
            _cooldownUntil = now + _COOLDOWN_MS
            _lockAxis = 0
            return g
        }
        return GestureDirection.None
    }

    /**
     * Geste als Pfeil auf der LED-Matrix anzeigen (kurz)
     */
    //% block="Geste auf Matrix anzeigen %dir" group="Lesen" weight=93 color=#5C9DFF
    export function showGestureOnMatrix(dir: GestureDirection): void {
        switch (dir) {
            case GestureDirection.Up: basic.showArrow(ArrowNames.North); break
            case GestureDirection.Down: basic.showArrow(ArrowNames.South); break
            case GestureDirection.Left: basic.showArrow(ArrowNames.West); break
            case GestureDirection.Right: basic.showArrow(ArrowNames.East); break
            default: return
        }
        basic.pause(250)
        basic.clearScreen()
    }


    // --- interner Zustand (Text) ---
    let _lastTextEmitted = "__INIT__"
    let _lastTextTimestamp = 0

    /**
     * Gesten-Text mit Anti-Wiederholung (auch "keine" wird ausgegeben).
     * Gibt "" (leer) zurück, wenn der Text gleich dem zuletzt ausgegebenen ist.
     *
     * @param allowSameAfterMs  Wenn >0, darf derselbe Text nach Ablauf dieser Zeit erneut ausgegeben werden.
     *                          Standard 0 = niemals direkt nacheinander nochmal ausgeben.
     */
    //% block="Gesten-Text (keine Wiederholung) (Timeout %allowSameAfterMs ms)"
    //% group="Lesen" weight=98 color=#5C9DFF
    //% allowSameAfterMs.defl=10000
    export function gestureTextNoRepeatIncludingNone(allowSameAfterMs: number = 0): string {
        const now = control.millis()
        const txt = gestureText() // nutzt deinen bestehenden Gesten-Text-Block: "UP/DOWN/LEFT/RIGHT/keine"

        // Falls gleiche Ausgabe wie zuletzt:
        if (txt == _lastTextEmitted) {
            // Timeout-Regel: nach X ms darf derselbe Zustand wieder ausgegeben werden
            if (allowSameAfterMs > 0 && now - _lastTextTimestamp >= allowSameAfterMs) {
                _lastTextTimestamp = now
                return txt
            }
            // sonst keine Ausgabe (leer)
            return ""
        }

        // Neuer Zustand: ausgeben und merken
        _lastTextEmitted = txt
        _lastTextTimestamp = now
        return txt
    }

    /**
     * CLR lesen (wartet auf AVALID, vermeidet konstante/alte Werte)
     */
    //% block="CLR lesen" group="Lesen" weight=92 color=#5C9DFF
    export function readClear(): number {
        waitALSValid(60)
        return read16LE(REG_CDATA_L)
    }
    //% block="Rot lesen" group="Lesen" weight=91 color=#E74C3C
    export function readRed(): number {
        waitALSValid(60)
        return read16LE(REG_RDATA_L)
    }
    //% block="Grün lesen" group="Lesen" weight=90 color=#27AE60
    export function readGreen(): number {
        waitALSValid(60)
        return read16LE(REG_GDATA_L)
    }
    //% block="Blau lesen" group="Lesen" weight=89 color=#2980B9
    export function readBlue(): number {
        waitALSValid(60)
        return read16LE(REG_BDATA_L)
    }
}




