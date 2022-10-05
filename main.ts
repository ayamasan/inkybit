bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    inkybit.show()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    受信データ = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
    行 = parseFloat(受信データ.substr(0, 3))
    開始列 = parseFloat(受信データ.substr(3, 3))
    データ数 = parseFloat(受信データ.substr(6, 2))
    for (let カウンター = 0; カウンター <= 11; カウンター++) {
        データ = 受信データ.charAt(カウンター + 8)
        _16進数を10進数に(データ)
        if (_10進数 >= 8) {
            inkybit.setPixel(開始列 + カウンター * 4, 行, inkybit.Color.Black)
            _10進数 = _10進数 - 8
        }
        if (_10進数 >= 4) {
            inkybit.setPixel(開始列 + 1 + カウンター * 4, 行, inkybit.Color.Black)
            _10進数 = _10進数 - 4
        }
        if (_10進数 >= 2) {
            inkybit.setPixel(開始列 + 2 + カウンター * 4, 行, inkybit.Color.Black)
            _10進数 = _10進数 - 2
        }
        if (_10進数 >= 1) {
            inkybit.setPixel(開始列 + 3 + カウンター * 4, 行, inkybit.Color.Black)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    inkybit.clear()
    inkybit.show()
})
function _16進数を10進数に (テキスト: string) {
    _10進数 = 0
    if (テキスト == "F") {
        _10進数 = 15
    } else if (テキスト == "E") {
        _10進数 = 14
    } else if (テキスト == "D") {
        _10進数 = 13
    } else if (テキスト == "C") {
        _10進数 = 12
    } else if (テキスト == "B") {
        _10進数 = 11
    } else if (テキスト == "A") {
        _10進数 = 10
    } else {
        _10進数 = parseFloat(テキスト)
    }
}
let _10進数 = 0
let データ = ""
let データ数 = 0
let 開始列 = 0
let 行 = 0
let 受信データ = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Happy)
basic.clearScreen()
