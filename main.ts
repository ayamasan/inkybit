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
    if (受信データ == "DSP") {
        inkybit.show()
    } else if (受信データ == "CLR") {
        inkybit.clear()
        inkybit.show()
    } else if (受信データ == "WHI") {
        inkybit.drawRectangle(
        0,
        0,
        inkybit.width(),
        inkybit.height(),
        inkybit.Color.White,
        true
        )
        inkybit.show()
    } else if (受信データ == "BLK") {
        inkybit.drawRectangle(
        0,
        0,
        inkybit.width(),
        inkybit.height(),
        inkybit.Color.Black,
        true
        )
        inkybit.show()
    } else if (受信データ == "RED") {
        inkybit.drawRectangle(
        0,
        0,
        inkybit.width(),
        inkybit.height(),
        inkybit.Color.Accent,
        true
        )
        inkybit.show()
    } else {
        行 = parseFloat(受信データ.substr(0, 3))
        開始列 = parseFloat(受信データ.substr(3, 3))
        データ数 = parseFloat(受信データ.substr(6, 2))
        データカウント = 0
        if (行 >= 600) {
            行 = 行 - 600
            白も描画 = 0
            赤描画 = 1
        } else if (行 >= 400) {
            行 = 行 - 400
            白も描画 = 0
            赤描画 = 0
        } else if (行 >= 200) {
            行 = 行 - 200
            白も描画 = 1
            赤描画 = 1
        } else {
            白も描画 = 1
            赤描画 = 0
        }
        for (let カウンター = 0; カウンター <= 11; カウンター++) {
            _4倍カウンター = カウンター * 4
            データ = 受信データ.charAt(カウンター + 8)
            _16進数を10進数に(データ)
            if (データカウント < データ数) {
                if (_10進数 >= 8) {
                    if (赤描画 == 0) {
                        inkybit.setPixel(開始列 + _4倍カウンター, 行, inkybit.Color.Black)
                    } else {
                        inkybit.setPixel(開始列 + _4倍カウンター, 行, inkybit.Color.Accent)
                    }
                    _10進数 = _10進数 - 8
                } else if (白も描画 == 1) {
                    inkybit.setPixel(開始列 + _4倍カウンター, 行, inkybit.Color.White)
                }
            }
            データカウント += 1
            if (データカウント < データ数) {
                if (_10進数 >= 4) {
                    if (赤描画 == 0) {
                        inkybit.setPixel(開始列 + 1 + _4倍カウンター, 行, inkybit.Color.Black)
                    } else {
                        inkybit.setPixel(開始列 + 1 + _4倍カウンター, 行, inkybit.Color.Accent)
                    }
                    _10進数 = _10進数 - 4
                } else if (白も描画 == 1) {
                    inkybit.setPixel(開始列 + 1 + _4倍カウンター, 行, inkybit.Color.White)
                }
            }
            データカウント += 1
            if (データカウント < データ数) {
                if (_10進数 >= 2) {
                    if (赤描画 == 0) {
                        inkybit.setPixel(開始列 + 2 + _4倍カウンター, 行, inkybit.Color.Black)
                    } else {
                        inkybit.setPixel(開始列 + 2 + _4倍カウンター, 行, inkybit.Color.Accent)
                    }
                    _10進数 = _10進数 - 2
                } else if (白も描画 == 1) {
                    inkybit.setPixel(開始列 + 2 + _4倍カウンター, 行, inkybit.Color.White)
                }
            }
            データカウント += 1
            if (データカウント < データ数) {
                if (_10進数 >= 1) {
                    if (赤描画 == 0) {
                        inkybit.setPixel(開始列 + 3 + _4倍カウンター, 行, inkybit.Color.Black)
                    } else {
                        inkybit.setPixel(開始列 + 3 + _4倍カウンター, 行, inkybit.Color.Accent)
                    }
                } else if (白も描画 == 1) {
                    inkybit.setPixel(開始列 + 3 + _4倍カウンター, 行, inkybit.Color.White)
                }
            }
            データカウント += 1
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
let _4倍カウンター = 0
let 赤描画 = 0
let 白も描画 = 0
let データカウント = 0
let データ数 = 0
let 開始列 = 0
let 行 = 0
let 受信データ = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Happy)
basic.clearScreen()
