makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.NEC)
